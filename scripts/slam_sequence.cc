// Project adapter linked against GPL-3.0 ORB-SLAM3; distribute under GPL-3.0.
#include <System.h>
#include <MapPoint.h>
#include <Map.h>
#include <KeyFrame.h>
#include <opencv2/imgcodecs.hpp>
#include <fstream>
#include <sstream>
#include <chrono>
#include <thread>
#include <iomanip>
int main(int argc,char**argv){
 if(argc<6){std::cerr<<"vocabulary settings sequence output_prefix mode(0=mapping,1=localize,2=continue,3=export)\n";return 2;}
 ORB_SLAM3::System slam(argv[1],argv[2],ORB_SLAM3::System::MONOCULAR,false);
 slam.SaveKeyFrameGraphCSV(std::string(argv[4])+"_start_graph.csv");
 if(std::string(argv[5])=="3"){slam.Shutdown();slam.SaveKeyFrameGraphCSV(std::string(argv[4])+"_end_graph.csv");return 0;}
 if(std::string(argv[5])!="0") slam.ActivateLocalizationMode();
 bool continue_mapping=std::string(argv[5])=="2", mapping_enabled=false;
 bool streaming=std::string(argv[3])=="-";
 std::ifstream list; if(!streaming)list.open(std::string(argv[3])+"/rgb.txt");
 std::istream& input=streaming?std::cin:list;
 if(!streaming && !list){std::cerr<<"Missing rgb.txt\n";slam.Shutdown();return 2;}
 std::ofstream poses(std::string(argv[4])+"_poses.csv"), points(std::string(argv[4])+"_points.csv");
 poses<<"timestamp,state,tx,ty,tz,qx,qy,qz,qw,latency_ms,inliers,map_id,reference_keyframe_id\n";
 points<<"timestamp,id,x,y,z\n";
 std::string line; int n=0,tracked=0;
 while(std::getline(input,line)){
  if(line.empty()||line[0]=='#')continue;
  double t;std::string file;std::istringstream row(line);if(!(row>>t>>file))continue;
  cv::Mat image=cv::imread(streaming?file:std::string(argv[3])+"/"+file);
  if(image.empty()){std::cerr<<"Missing image "<<file<<"\n";slam.Shutdown();return 3;}
  auto start=std::chrono::steady_clock::now();
  auto Tcw=slam.TrackMonocular(image,t); auto Twc=Tcw.inverse();
  const bool map_changed=slam.MapChanged();
  double ms=std::chrono::duration<double,std::milli>(std::chrono::steady_clock::now()-start).count();
  int state=slam.GetTrackingState(); auto xyz=Twc.translation();auto q=Twc.unit_quaternion();
  auto landmarks=slam.GetTrackedMapPoints();int good=0;long map_id=-1;
  if(state==2){++tracked;for(auto*mp:landmarks){if(!mp||mp->isBad())continue;map_id=mp->GetMap()->GetId();auto x=mp->GetWorldPos();points<<std::setprecision(10)<<t<<','<<mp->mnId<<','<<x[0]<<','<<x[1]<<','<<x[2]<<'\n';++good;}}
  auto* reference=state==2 ? slam.GetTrackingReferenceKeyFrame() : nullptr;
  if(reference && reference->isBad()) reference=nullptr;
  long reference_id=reference ? static_cast<long>(reference->mnId) : -1;
  poses<<std::setprecision(10)<<t<<','<<state<<','<<xyz[0]<<','<<xyz[1]<<','<<xyz[2]<<','<<q.x()<<','<<q.y()<<','<<q.z()<<','<<q.w()<<','<<ms<<','<<good<<','<<map_id<<','<<reference_id<<'\n';poses.flush();++n;
  if(continue_mapping){
   if(!mapping_enabled && state==2){slam.DeactivateLocalizationMode();mapping_enabled=true;}
   else if(mapping_enabled && state!=2){slam.ActivateLocalizationMode();mapping_enabled=false;}
  }
  if(streaming){
   std::ostringstream response;
   response<<std::setprecision(10)<<"POSE_JSON {\"timestamp\":"<<t<<",\"state\":"<<state<<",\"position\":["<<xyz[0]<<','<<xyz[1]<<','<<xyz[2]<<"],\"quaternion\":["<<q.x()<<','<<q.y()<<','<<q.z()<<','<<q.w()<<"],\"inliers\":"<<good<<",\"map_id\":"<<map_id<<",\"reference_keyframe_id\":"<<reference_id;
   response<<",\"map_changed\":"<<(map_changed?"true":"false");
   if(reference){
    auto reference_pose=reference->GetPoseInverse();auto rp=reference_pose.translation();auto rq=reference_pose.unit_quaternion();
    response<<",\"reference\":{\"id\":"<<reference_id<<",\"timestamp\":"<<reference->mTimeStamp
            <<",\"position\":["<<rp[0]<<','<<rp[1]<<','<<rp[2]<<"],\"quaternion\":["
            <<rq.x()<<','<<rq.y()<<','<<rq.z()<<','<<rq.w()<<"]}";
   }
   response<<"}";
   std::cout<<response.str()<<std::endl;
  }
  // Give asynchronous mapping time; report tracking latency separately from replay pacing.
  if(!streaming && ms<80)std::this_thread::sleep_for(std::chrono::milliseconds(int(80-ms)));
 }
 slam.Shutdown();slam.SaveKeyFrameGraphCSV(std::string(argv[4])+"_end_graph.csv");slam.SaveKeyFrameTrajectoryTUM(std::string(argv[4])+"_keyframes.txt");
 std::cout<<"RESULT frames="<<n<<" tracked="<<tracked<<std::endl;
 return tracked>0?0:4;
}
