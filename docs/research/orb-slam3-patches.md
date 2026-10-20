# ORB-SLAM3 相容性與重定位修補

基底 commit：`4452a3c4ab75b1cde34e5505a36ec3f9edcdc4c4`，Pangolin v0.9.2，Ubuntu 24.04 / C++17。完整差異在 `configs/orb_slam3_compat.patch`，原始 GPL-3.0 授權保留。

- `LoopClosing::mnFullBAIdx` 改為整數 generation counter；原 bool 自增不符合 C++17。
- Shutdown 在保存前等待 background mapper／loop closer／GBA 結束。
- `Map::PreSave` 使用 map point 快照迭代，避免 `EraseObservation → SetBadFlag → EraseMapPoint` 使 set iterator 失效。此問題由先前建圖過程的 gdb 堆疊確認。
- `MapPoint::PreSave` 使用 observation 快照；`EraseObservation` 在空集合時不取 begin()->first。
- 從 Atlas 啟動 localization-only 時選取最大非空 persisted map；預設建構的新空地圖是 mapping/merge 流程，不能直接當重定位模式。
- 第一次重定位沒有有效 previous pose 時，跳過未初始化的 previous timestamp 比較。
- localization-only 在 LOST／RECENTLY_LOST 都嘗試 retrieval，失敗時保留既有地圖並停止控制，不建立新的未對齊地圖。

修補已以本專案 RGB 模擬序列保存／重載，以及新 Isaac session 的影像定位做整合測試。不代表所有 ORB-SLAM3 感測器模式或 benchmark 都已回歸；本專案驗證範圍是 **monocular localization**。若要用 IMU／stereo，需另測。
