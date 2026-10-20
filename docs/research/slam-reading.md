# JetBot 單目 SLAM 選型（查核日期 2026-10-15）

沒有單一「所有場景最好」的單目 SLAM。必須分開比較位姿 ATE/RPE、追蹤失敗率、閉環、跨次重定位、稠密重建、延遲、記憶體與硬體。論文自己的 SOTA 宣稱只代表其評測設定；本專案沒有重跑以下全部論文，不能當作獨立排行榜。

| 方法 | 來源／時間 | 適合本專案的用途 | Nano 判斷與保存地圖 |
|---|---|---|---|
| ORB-SLAM3 | [論文](https://arxiv.org/abs/2007.11898)、[官方程式](https://github.com/UZ-SLAMLab/ORB_SLAM3) | 經典特徵式單目／視覺慣性 baseline，含重定位、多地圖、閉環 | 優先實測 CPU 版本；不是近期最高精度保證。Atlas 支援保存與載入；須同時保存相機校正和尺度座標轉換。GPL-3.0 |
| stella_vslam | [官方功能](https://stella-cv.readthedocs.io/en/stable/overview.html)、[保存與定位範例](https://stella-cv.readthedocs.io/en/latest/simple_tutorial.html) | 另一個工程部署候選，map database 工作流程清楚 | `--map-db-out`、`--map-db-in`、`--disable-mapping`；Nano FPS 仍需量測 |
| MASt3R-SLAM | [CVPR 2025／作者頁](https://edexheim.github.io/mast3r-slam/)、[官方程式](https://github.com/rmurai0610/MASt3R-SLAM) | 利用兩視角重建先驗的稠密單目 SLAM，適合 RTX 桌機作重建對照 | 官方「real time」不代表舊 Nano 能即時；不把 PLY 匯出視為可跨次重定位的證據 |
| DPV-SLAM | [2024 論文](https://arxiv.org/abs/2408.01654)、[官方程式](https://github.com/princeton-vl/DPVO) | 比較深度學習 SLAM 的速度／記憶體；區分 DPVO 純 VO 與 DPV-SLAM 的閉環 | 作者報告相對 DROID-SLAM 更快、記憶體更少；不是 Nano benchmark，也不能把 VO 當完整 SLAM |
| VGGT-SLAM 2.0 | [2026-01 論文](https://arxiv.org/abs/2601.19887)、[官方程式](https://github.com/MIT-SPARK/VGGT-SLAM) | 新一代稠密 RGB 重建對照。論文在 TUM 報告比前版降低約 23% pose error | 論文機載平台是 **Jetson Thor**；不能外推到 Nano。官方 repo 現已提供 2.0；摘要的「將釋出」描述早於 repo 現況 |
| VGGT-SLAM++ | [2026-04 預印本](https://arxiv.org/abs/2604.06830) | 論文追蹤清單；平面化 DEM 與 retrieval／global consistency | 不把摘要 SOTA 宣稱等同本專案已驗證，部署與 map reload 需另驗 |
| VGGT-GS SLAM | [2026-09 預印本](https://arxiv.org/abs/2609.19628) | 最新候選：未校正單目與 Gaussian splatting／feed-forward priors | 重建品質不等於可行駛空間可靠度；尚未在本機／Nano 評測 |
| Jetson-ORB-SLAM3 | [2026-08 預印本](https://arxiv.org/abs/2608.17874) | 若硬體其實是 Orin Nano，值得優先比較 GPU 前端 | 作者報告 EuRoC 單目慣性平均 32 FPS，平台是 **Orin Nano**，不是舊 Nano；也不是純單目、無 IMU 的同條件數字 |

## 建議路線

1. 先用 ORB-SLAM3 建立可檢查的相機 → 特徵／位姿 → Atlas 保存／重定位基線。低階 RL 只負責速度追蹤，不讓 RL 承擔建圖正確性。
2. 桌機 RTX 3090 另比較 MASt3R-SLAM、VGGT-SLAM 2.0；用相同錄影、相同尺度對齊方式與同一台硬體比較，不能混用作者表格的 FPS。
3. 舊 Nano 先試 640×480／15 Hz、500–1000 ORB 特徵、關閉 viewer、限制局部地圖／關鍵幀、已建圖後 localization-only。這些是實驗起點，不是已量測的保證。若不足，再試 424×320；縮放影像須一起縮放內參。
4. 先桌機建圖、Nano 載入圖定位，通常比一直在 Nano 做完整 BA 更值得測；相機模型、詞彙、序列化版本、地圖尺度須一致。
5. Nano 端執行小型輪控策略與 watchdog。長時間失去定位、地圖不一致或資料過期就停止；不要靠上一筆姿態繼續走。

## 單目不可省略的問題

- 純單目尺度不可觀測。導航的公尺尺度來自已知距離、輪編碼器、視覺慣性初始化或已知地標。以模擬器真值對齊只可作評測／明確標示的 bootstrap。
- ORB 的稀疏點雲不是完整障礙圖；沒看到特徵點的區域仍可能有白牆、玻璃、電線。不能把「沒有點」設為 free。
- 稠密障礙地圖需要額外可見自由空間證據：多視角深度、經校正的單目深度＋不確定度，或深度／測距感測器。純單目相機的盲區與弱紋理必須留作 unknown。
- 保存 **SLAM Atlas** 與保存 **occupancy grid** 是不同事。還要保存 camera intrinsics、camera→base extrinsics、Sim(3) 尺度／座標轉換、時間與版本 metadata。
- 完整驗收要用新拍攝的 second session 重定位；重播同一組 PNG 只證明保存／載入與已知影像匹配，不證明光線變化、移動家具後仍可靠。

## 硬體界線與驗收

舊 Jetson Nano 的軟體分支是 JetPack 4；NVIDIA 已宣布 JetPack 4.6.6 為最終版本。Orin Nano 是不同平台，不能使用其效能或安裝指令作舊 Nano 的保證。[NVIDIA 公告](https://forums.developer.nvidia.com/t/announcing-end-of-life-for-nvidia-jetpack-4-with-the-release-of-jetpack-4-6-6/314300)

本專案部署驗收目標（不是已達成數字）：定位 ≥10 Hz、端到端 p95 <150 ms、輪控 ≥20 Hz；量測 CPU/GPU、RAM peak、掉幀、tracking loss、重新定位成功率。低速 0.15–0.22 m/s，安全距離包含 footprint、定位誤差、制動距離與延遲。至少測 20 個可達目標、動態障礙、重新啟動定位、不同光照、探索覆蓋率。實機需 wheel encoder／IMU／相機型號確認。
