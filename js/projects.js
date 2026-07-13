/* =========================================================
   projects.js — 作品資料檔
   新增作品：複製任一物件、改內容、貼進 PROJECTS 陣列即可。
   band: 'space' | 'air' | 'city' | 'under' | 'core' | 'more'
   tags: 'vision' | 'ts' | 'llm' | 'iot' | 'platform' | 'test' | 'web'
   ========================================================= */

const STATS = [
  { v: 6,  suffix: "+", label: { zh: "年 Python 開發", en: "yrs Python" } },
  { v: 12, suffix: "",  label: { zh: "專案／年（帶隊交付）", en: "projects / yr as lead" } },
  { v: 1,  suffix: "",  label: { zh: "中華民國發明專利", en: "invention patent" } },
  { v: 70, suffix: "%", prefix: "−", label: { zh: "模型交付週期", en: "model delivery cycle" } },
  { v: 26, suffix: "",  label: { zh: "Google Cloud 徽章", en: "Google Cloud badges" } }
];

const BANDS = [
  { id: "space", alt: "~700 km", icon: "🛰",
    title: { zh: "衛星軌道", en: "Orbit" },
    sub:   { zh: "衛星影像與資料立方，讓災害監測自動化", en: "Satellite imagery & data cubes for automated disaster monitoring" } },
  { id: "air", alt: "5 km – 100 m", icon: "✈",
    title: { zh: "航空、大氣與山區", en: "Air, Weather & Mountains" },
    sub:   { zh: "航攝判釋、雨量預報與坡地預警", en: "Aerial interpretation, rainfall nowcasting and slope early-warning" } },
  { id: "city", alt: "0 m", icon: "🏙",
    title: { zh: "城市地表", en: "Street Level" },
    sub:   { zh: "高精地圖、車載邊緣 AI 與即時救災影像", en: "HD maps, in-vehicle edge AI and real-time rescue vision" } },
  { id: "under", alt: "−8 m", icon: "🕳",
    title: { zh: "地下與水下", en: "Underground" },
    sub:   { zh: "看不見的地方，更需要不會失靈的系統", en: "Where you can't see is where systems must not fail" } },
  { id: "core", alt: "CORE", icon: "⬢",
    title: { zh: "資料中樞", en: "The Data Core" },
    sub:   { zh: "貫穿所有高度的平台、測試文化與 AI 工具鏈", en: "The platform, testing culture and AI tooling that connect every altitude" } }
];

const PROJECTS = [
  /* ---------- 🛰 space ---------- */
  {
    id: "tasa-cube", band: "space", icon: "🛰", period: "2023",
    org: { zh: "國家太空中心（TASA）新南向計畫", en: "Taiwan Space Agency (TASA), New Southbound Program" },
    title: { zh: "衛星資料立方災害監測自動化", en: "Satellite Data-Cube Disaster Monitoring" },
    desc:  { zh: "以 Open Data Cube 建構衛星影像自動化災害監測與通報系統。", en: "Automated disaster monitoring & alerting on satellite imagery with Open Data Cube." },
    detail:{ zh: "以 Linux 環境部署 Open Data Cube 與 ThinkTron 後端，將多時序衛星影像標準化入庫，供 WebGIS 平台進行災害判釋與通報自動化；同一技術棧後續用於越南遙測大數據教育訓練。",
             en: "Deployed Open Data Cube with the in-house backend on Linux, standardizing multi-temporal satellite imagery for WebGIS-based disaster interpretation and automated alerting; the same stack later powered remote-sensing training in Vietnam." },
    metrics: [ { v: { zh: "多時序", en: "Multi-T" }, label: { zh: "衛星影像入庫", en: "temporal imagery" } } ],
    stack: ["Open Data Cube", "Python", "Linux", "WebGIS", "Sentinel-2"],
    tags: ["platform", "vision"], links: [], featured: false
  },
  {
    id: "rice-paddy", band: "space", icon: "🌾", period: "2024–2025",
    org: { zh: "農業部門委託案", en: "Agricultural agency project" },
    title: { zh: "衛星影像盤點台灣水稻", en: "Nationwide Rice-Paddy Mapping from Satellites" },
    desc:  { zh: "衛星遙測影像分類，自動盤點全台水稻田分布。", en: "Satellite image classification to inventory rice paddies across Taiwan." },
    detail:{ zh: "於 Data Cube 虛擬機上建立訓練與辨識流程，以衛星影像對全台水稻進行自動化判釋盤點，供農政單位掌握種植分布。",
             en: "Built the training/inference pipeline on Data Cube VMs to automatically classify rice paddies from satellite imagery for agricultural administration." },
    metrics: [ { v: { zh: "全台", en: "Nationwide" }, label: { zh: "水稻判釋範圍", en: "island-wide coverage" } } ],
    stack: ["Python", "Remote Sensing", "Data Cube", "ML"],
    tags: ["vision"], links: [], featured: false
  },

  /* ---------- ✈ air ---------- */
  {
    id: "forest", band: "air", icon: "🌲", period: "2020–2022", featured: true,
    org: { zh: "林業及自然保育署（3 年期研究案）", en: "Forestry & Nature Conservation Agency (3-year program)" },
    title: { zh: "森林覆蓋型航攝影像 AI 判釋", en: "Forest-Coverage AI Interpretation from Aerial Photos" },
    desc:  { zh: "3,248 張航攝影像 × 16 組參數組合，把全人工判圖流程半自動化。", en: "3,248 aerial images × 16 parameter combos — semi-automating a fully manual workflow." },
    detail:{ zh: "第四次森林資源調查的判圖原為全人工、專家間結果不一致。以 3,248 張 DMC 航攝影像搭配數值地形，測試 16 組參數組合（波段／地文因子／光譜）訓練分類模型，並為業主打造「標註 → 模型訓練 → 專家逐張檢核編修」的 GUI 工具鏈，讓專家回饋持續收斂資料品質，最終導入實際圖資編修作業。",
             en: "The 4th national forest survey relied on inconsistent manual interpretation. Trained classifiers on 3,248 DMC aerial images with terrain data across 16 parameter combinations, and built the client a labeling → training → per-image expert-review GUI toolchain, converging dataset quality and shipping into real map-editing operations." },
    metrics: [ { v: "3,248", label: { zh: "航攝影像", en: "aerial images" } },
               { v: "16", label: { zh: "參數組合", en: "parameter combos" } },
               { v: { zh: "3 年", en: "3 yrs" }, label: { zh: "跨年度維運", en: "years operated" } } ],
    stack: ["Python", "Image Classification", "GUI Toolchain", "QGIS"],
    tags: ["vision", "test"], links: [], featured: true
  },
  {
    id: "rainfall", band: "air", icon: "🌧", period: "2020–2024", featured: true,
    org: { zh: "桃園市水務局 → 全台多專案", en: "Taoyuan Water Resources Bureau → nationwide reuse" },
    title: { zh: "全台雨量即時預報系統", en: "Nationwide Rainfall Nowcasting" },
    desc:  { zh: "每 10 分鐘產出未來 3 小時降雨預報，串接淹水模擬供防汛決策。", en: "3-hour rainfall forecasts refreshed every 10 minutes, feeding flood simulation for decisions." },
    detail:{ zh: "以 ConvLSTM 學習氣象署雷達回波，從桃園範圍泛化到全台；整合 NCDR 雷達回波預測與殘差模型，設計每 10 分鐘一輪的自動化排程資料流與各資料源錯誤日誌；以 C++ 整合二維淹水模擬模型（SEC-HY21）並發布 RESTful API 供水理三維展示與決策系統即時取用，穩定維運多年。",
             en: "ConvLSTM over radar echo, generalized from Taoyuan to all of Taiwan; integrated NCDR forecasts and a residual model on a 10-minute automated pipeline with per-source error logging; wrapped the SEC-HY21 2D flood model via C++ and served RESTful APIs to decision systems — operated reliably for years." },
    metrics: [ { v: "3 hr", label: { zh: "預報長度", en: "forecast horizon" } },
               { v: "10 min", label: { zh: "自動更新頻率", en: "refresh cycle" } },
               { v: { zh: "全台", en: "Nationwide" }, label: { zh: "涵蓋範圍", en: "coverage" } } ],
    stack: ["ConvLSTM", "Python", "C++", "RESTful API", "Scheduled Pipelines"],
    tags: ["ts", "test"], links: [], featured: true
  },
  {
    id: "typhoon-dtw", band: "air", icon: "🌀", period: "2025",
    org: { zh: "防災決策模組", en: "Disaster-decision module" },
    title: { zh: "颱風路徑 DTW 歷史比對", en: "Typhoon-Track Matching with DTW" },
    desc:  { zh: "動態時間校正演算法比對 40 年歷史颱風庫，找出最相似路徑。", en: "Dynamic Time Warping against a 40-year typhoon database to find the most similar tracks." },
    detail:{ zh: "以 DTW 對當前颱風與 40 年歷史颱風資料庫做「位置」與「形狀」雙軌比對（形狀比對去除地理位置影響），協助防災單位、保險與能源產業做風險應對與決策優化。",
             en: "DTW matches live typhoons against a 40-year historical database on both position and shape (shape matching removes geographic bias), supporting risk decisions for disaster agencies, insurers and energy operators." },
    metrics: [ { v: { zh: "40 年", en: "40 yrs" }, label: { zh: "歷史資料庫", en: "historical DB" } },
               { v: { zh: "雙軌", en: "Dual" }, label: { zh: "位置＋形狀比對", en: "position + shape" } } ],
    stack: ["Python", "DTW", "Time-Series Analysis"],
    tags: ["ts"], links: [], featured: false
  },
  {
    id: "techi-slope", band: "air", icon: "⛰", period: "2024–2025",
    org: { zh: "德基水庫集水區", en: "Techi Reservoir watershed" },
    title: { zh: "邊坡失穩 AI 預警服務", en: "Slope-Failure Early Warning" },
    desc:  { zh: "歷史崩塌調查訓練模型，雨量門檻警戒由人工靜態變自動動態。", en: "Models from landslide surveys turn static manual thresholds into automated dynamic alerts." },
    detail:{ zh: "以歷史崩塌調查結果訓練決策樹模型，結合斜坡單元崩塌機率與雨量門檻（R24／I3）判定警戒；透過 TronCube 自動化排程倉儲與 Python SDK 動態取用 DEM 地形因子與最新雨量預報，把「靜態人工」預警升級為「動態自動」。",
             en: "Decision-tree models from historical landslide surveys combine slope-unit failure probability with rainfall thresholds (R24/I3); TronCube scheduled warehousing + Python SDK feed DEM factors and live rainfall forecasts, upgrading static manual alerting to dynamic automation." },
    metrics: [ { v: "R24/I3", label: { zh: "雨量門檻指標", en: "rainfall thresholds" } } ],
    stack: ["Python", "Decision Trees", "TronCube SDK", "DEM"],
    tags: ["ts", "platform"], links: [], featured: false
  },
  {
    id: "landslide", band: "air", icon: "🏔", period: "2021–2023",
    org: { zh: "多場域（陽明山等）", en: "Multiple sites (incl. Yangmingshan)" },
    title: { zh: "崩塌地辨識 Mask R-CNN", en: "Landslide Detection with Mask R-CNN" },
    desc:  { zh: "訓練／驗證集準確度 95%+，容器化 API 多機自動部署。", en: "95%+ train/val accuracy, containerized API with automated multi-host deployment." },
    detail:{ zh: "基於購置之百萬元級標註資料訓練 Mask R-CNN 崩塌判釋模型，訓練／驗證集準確度達 95% 以上；以 FastAPI＋Detectron2 打包容器化服務（含單元測試結構與 DataCube 整合輸出），並完成兩台以上主機的 Docker 自動化安裝驗證。",
             en: "Mask R-CNN trained on an NT$1M-grade annotated dataset reaching 95%+ train/val accuracy; packaged as a FastAPI + Detectron2 containerized service (with unit-test structure and DataCube output integration), verified via automated Docker installs across multiple hosts." },
    metrics: [ { v: "95%+", label: { zh: "訓練／驗證準確度", en: "train/val accuracy" } } ],
    stack: ["Mask R-CNN", "Detectron2", "FastAPI", "Docker"],
    tags: ["vision", "test"], links: [], featured: false
  },
  {
    id: "gnss-insar", band: "air", icon: "📡", period: "2022–2024",
    org: { zh: "與國立臺灣海洋大學合作", en: "With National Taiwan Ocean University" },
    title: { zh: "GNSS × InSAR 坡地位移驗證", en: "GNSS × InSAR Ground-Displacement Validation" },
    desc:  { zh: "地表時序位移資料交叉驗證雷達干涉結果，落地坡地社區監測。", en: "Time-series ground displacement cross-validating InSAR for hillside communities." },
    detail:{ zh: "整合海洋大學 GNSS 設備之地表時序位移觀測，分析並驗證合成孔徑雷達干涉（InSAR）結果，將衛星級監測落地到坡地社區應用。",
             en: "Integrated GNSS time-series displacement observations to analyze and validate InSAR results, grounding satellite-grade monitoring in hillside-community applications." },
    metrics: [ { v: { zh: "2 源", en: "2" }, label: { zh: "GNSS＋InSAR 交叉驗證", en: "cross-validated sources" } } ],
    stack: ["GNSS", "InSAR", "Time-Series Analysis", "Python"],
    tags: ["ts", "iot"], links: [], featured: false
  },

  /* ---------- 🏙 city ---------- */
  {
    id: "hdmap", band: "city", icon: "🗺", period: "2020–2023", featured: true,
    org: { zh: "經濟部 AI 領航計畫／內政部無人載具案", en: "MOEA AI pilot / MOI autonomous-vehicle HD-map program" },
    title: { zh: "高精地圖 AI 自動化萃取", en: "HD-Map Feature Extraction with AI" },
    desc:  { zh: "LiDAR 點雲＋SLAM 自動辨識桿件與標線，制定 5 類 × 200+ 標註規範。", en: "LiDAR + SLAM recognition of poles & markings; 200+ annotation specs across 5 classes." },
    detail:{ zh: "以 SLAM 將 AI 辨識結果投影至真實座標，用 LiDAR 點雲（PointNet 等）辨識桿狀物、標線與標字並產製高精地圖向量圖資；完成台北信義路與桃園機廠兩場域移動式測繪（MMS）資料蒐集、5 類道路物件各 200 件以上的標註規範與 3 種以上演算法可行性評估；支援 OpenDrive／Lanelet2 格式轉換，技術納入公司專利佈局，並擔任內政部無人載具高精地圖測製案技術負責人。",
             en: "SLAM projects detections onto real coordinates; LiDAR point-cloud models (PointNet et al.) extract poles, lane markings and text into HD-map vectors. Collected MMS data over two sites, defined 200+ annotation standards per each of 5 object classes with 3+ algorithm feasibility studies; supported OpenDrive/Lanelet2 conversion. Technology entered the company patent portfolio; served as technical lead on the MOI unmanned-vehicle HD-map case." },
    metrics: [ { v: "5×200+", label: { zh: "物件類別×標註樣本", en: "classes × labels" } },
               { v: "2", label: { zh: "MMS 測繪場域", en: "MMS survey sites" } } ],
    stack: ["LiDAR", "SLAM", "PointNet", "Lanelet2", "OpenDrive"],
    tags: ["vision", "test"], links: [], featured: true
  },
  {
    id: "pavement-box", band: "city", icon: "🚗", period: "2021–2022", featured: true,
    org: { zh: "訂閱制商用服務（硬體租賃＋軟體訂閱）", en: "Commercial subscription service (hardware lease + software)" },
    title: { zh: "AI 路檢盒：道路鋪面檢測", en: "AI Road-Inspection Box" },
    desc:  { zh: "車載邊緣 AI 即時判釋鋪面破損，多數類別 mAP 85%+，24 小時修復 SLA。", en: "In-vehicle edge AI grading pavement damage — most classes 85%+ mAP, 24-hour-fix SLA." },
    detail:{ zh: "開發鋪面種類／損壞類別辨識與破損面積計算模型（幾乎全部辨識模型獨立完成，多數類別 mAP 85% 以上，少數樣本不足類別 60–70%），整合 7 吋車用觸控螢幕之車載 IoT 硬體，即時顯示辨識結果與道路座標定位並可串接圖台；服務以硬體租賃＋軟體訂閱模式商轉，支援 24 小時修復、72 小時備品之 SLA 營運。後續並以參數化資料集重建方法論（n=4 類別再平衡、r=0.67 切分）修復 2 萬張既有標註的品質問題。",
             en: "Built nearly all recognition models (pavement type, damage class, damaged-area computation; most classes 85%+ mAP) and integrated the 7-inch in-vehicle IoT unit showing detections with road coordinates, map-platform ready. Operated commercially under a hardware-lease + subscription model with 24-hour-fix / 72-hour-replacement SLA. Later rebuilt a 20k-image dataset with parameterized split rules (n=4 rebalancing, r=0.67)." },
    metrics: [ { v: "85%+", label: { zh: "多數類別 mAP", en: "mAP (most classes)" } },
               { v: "24 hr", label: { zh: "SLA 修復承諾", en: "fix SLA" } },
               { v: "20k", label: { zh: "標註資料治理", en: "labels governed" } } ],
    stack: ["YOLO/Darknet", "Edge AI", "IoT", "Docker", "SLA Operations"],
    tags: ["vision", "iot", "test"], links: [], featured: true
  },
  {
    id: "rescue-5g", band: "city", icon: "🚒", period: "2021–2022", featured: true,
    org: { zh: "內政部消防署（台灣特種搜救隊）", en: "National Fire Agency (special search & rescue teams)" },
    title: { zh: "5G AI 救災平台：辨識串流到 AR 眼鏡", en: "5G AI Rescue Platform Streaming to AR Glasses" },
    desc:  { zh: "容器化影像辨識與 OCR 服務，辨識結果即時串流到 AR 眼鏡與指揮中心。", en: "Containerized vision & OCR services streaming results live to AR glasses and command centers." },
    detail:{ zh: "為特種搜救隊建置崩塌範圍辨識、噴漆文字 OCR、紅外線人員偵測與搜救進度紀錄之容器化服務與資料庫架構；開發即時串流整合框架，讓辨識結果同步顯示於 AR 眼鏡與指揮平台，系統部署於消防署雲端。另建置離線三維建模（維冠大樓場域驗證）與 Cesium 網頁圖磚展示。",
             en: "Built containerized services — landslide-extent recognition, spray-paint OCR, infrared human detection, rescue-progress logging — with the database schema; a real-time streaming framework renders results on AR glasses and the command platform, deployed on the agency cloud. Also delivered offline 3D reconstruction (validated on the Weiguan Building site) with Cesium web tiles." },
    metrics: [ { v: { zh: "即時", en: "Live" }, label: { zh: "AR 眼鏡串流", en: "AR streaming" } },
               { v: { zh: "4 種", en: "4" }, label: { zh: "現場辨識模組", en: "field vision modules" } } ],
    stack: ["Docker", "OCR", "Streaming Integration", "AR", "Cesium"],
    tags: ["vision", "iot"], links: [], featured: true
  },
  {
    id: "fixed-cam", band: "city", icon: "📷", period: "2022–2024",
    org: { zh: "多專案共用模組", en: "Shared modules across projects" },
    title: { zh: "定點攝影 AI 模組集", en: "Fixed-Camera AI Module Suite" },
    desc:  { zh: "停車格、CCTV 人車流、水尺讀值、裂縫、無人機載具——一套可重用的辨識模組。", en: "Parking slots, CCTV people/vehicle flow, water-gauge reading, cracks, UAV carriers — reusable detectors." },
    detail:{ zh: "針對特定場景打造可重用的辨識模組：停車格佔用、CCTV 人流／車流、水尺刻度（MSER）、結構裂縫與無人機常用載具辨識，供各專案快速組裝落地。",
             en: "Reusable scene-specific detectors — parking occupancy, CCTV people/vehicle flow, water-gauge reading via MSER, structural cracks, and common UAV carriers — assembled quickly into projects." },
    metrics: [ { v: "5+", label: { zh: "可重用模組", en: "reusable modules" } } ],
    stack: ["OpenCV", "YOLO", "MSER", "Python"],
    tags: ["vision"], links: [], featured: false
  },
  {
    id: "fire-risk", band: "city", icon: "🔥", period: "2023–2024",
    org: { zh: "消防大數據平台", en: "Fire-service big-data platform" },
    title: { zh: "行政區火災風險預測", en: "District Fire-Risk Forecasting" },
    desc:  { zh: "火災潛勢 × 猛烈度因子，Stack Ensemble＋AutoML 自動更新風險地圖。", en: "Probability × severity factors with Stack Ensemble + AutoML auto-refreshed risk maps." },
    detail:{ zh: "整合土地利用、人口密度、列管場所、狹窄巷弄、水源等因子，以 Stack Ensemble 與 AutoML 建立火災風險與消防需求預測；並建置淹水預報模型（NCDR 84 小時雨量預報 → 感測器未來 24 小時水位，統計行政區積淹水 30 公分點位）供風險決策。",
             en: "Combined land-use, population, registered-site, alley-width and water-source factors into Stack-Ensemble + AutoML fire-risk and demand forecasts; plus a flood model (84-hr NCDR rainfall → 24-hr sensor water levels, counting ≥30 cm inundation points per district)." },
    metrics: [ { v: "24 hr", label: { zh: "淹水水位預測", en: "flood forecast" } } ],
    stack: ["Stack Ensemble", "AutoML", "Python", "GIS"],
    tags: ["ts", "platform"], links: [], featured: false
  },

  /* ---------- 🕳 under ---------- */
  {
    id: "sewer", band: "under", icon: "🌊", period: "2024", featured: true,
    org: { zh: "台北市政府（水利工程）", en: "Taipei City Government (hydraulic engineering)" },
    title: { zh: "下水道水位 Transformer 預測", en: "Sewer Water-Level Forecasting with Transformers" },
    desc:  { zh: "5 座測站未來 1 小時水位預測，凱米颱風實測驗證後部署上線。", en: "1-hour-ahead levels at 5 stations, validated on Typhoon Gaemi and deployed to production." },
    detail:{ zh: "以長時序 Transformer 架構，用氣象署定量降水預報（測站所在網格＋周邊 8 格）與過去 12 小時水位，預測未來 1 小時（每 10 分鐘一筆）的下水道水位；資料清洗統一異常值、10 分鐘等距採樣、訓練／驗證／測試 7:2:1 切分，並以 2024 凱米颱風事件獨立驗證後部署上線，成為公司統一時序模組的示範案例。",
             en: "A long-horizon Transformer takes CWA quantitative precipitation forecasts (station cell + 8 neighbors) and 12 hours of levels to predict the next hour at 10-minute steps across 5 stations; standardized cleaning, 10-min resampling and 7:2:1 splits, independently validated on Typhoon Gaemi (2024) and deployed — the reference case for the unified time-series module." },
    metrics: [ { v: "5", label: { zh: "IoT 觀測站", en: "IoT stations" } },
               { v: "7:2:1", label: { zh: "資料集切分", en: "train/val/test" } },
               { v: { zh: "上線", en: "Live" }, label: { zh: "營運狀態", en: "in production" } } ],
    stack: ["Transformer", "PyTorch", "IoT", "Forecasting"],
    tags: ["ts", "iot", "test"], links: [], featured: true
  },
  {
    id: "tunnel", band: "under", icon: "🏛", period: "2021–2022", featured: true,
    org: { zh: "台北市文化局（歷史甬道）", en: "Taipei Dept. of Cultural Affairs (heritage tunnel)" },
    title: { zh: "地下甬道形變監測邊緣裝置", en: "Underground Tunnel Deformation Monitor" },
    desc:  { zh: "雙目相機＋Jetson 的 IP66 邊緣裝置，即時形變量測與地震警報推播；主辦兼主技簽約交付。", en: "Stereo camera + Jetson in IP66 enclosures — real-time deformation and quake alerts; signed & delivered as project + tech lead." },
    detail:{ zh: "設計 ZED 2i 雙目相機＋NVIDIA Jetson Nano＋IP66 防護＋4G 回傳的邊緣運算架構，以 RabbitMQ 建立訊息流，用深度估計與定位點偏移計算牆面形變並偵測人員；串接氣象署地震監測，LINE Notify 定期推播。以專案暨技術負責人身分完成簽約與交付，配套流程部分產品化。",
             en: "Designed the edge stack — ZED 2i stereo camera + Jetson Nano in IP66 enclosures with 4G uplink — with RabbitMQ messaging; depth estimation and anchor-drift computation measure wall deformation with human detection; CWB earthquake feeds push via LINE Notify. Signed and delivered as both project and technical lead; workflow partially productized." },
    metrics: [ { v: "IP66", label: { zh: "戶外防護等級", en: "ingress protection" } },
               { v: "4G", label: { zh: "即時回傳", en: "live uplink" } } ],
    stack: ["ZED 2i", "Jetson Nano", "RabbitMQ", "LINE Notify", "Edge AI"],
    tags: ["iot", "vision"], links: [], featured: true
  },
  {
    id: "vibration", band: "under", icon: "⚙", period: "2022–2023",
    org: { zh: "臺中精密機械園區水資源計畫", en: "Taichung precision-machinery park water program" },
    title: { zh: "馬達振動時頻壽命判讀", en: "Motor-Vibration Spectrogram Lifecycle Analysis" },
    desc:  { zh: "即時頻譜比對馬達運轉狀態，偵測主頻衰減掌握生命週期。", en: "Live spectrogram comparison tracks dominant-frequency drift to assess motor lifecycle." },
    detail:{ zh: "對抽水馬達振動訊號做時頻分析：低頻區反映管段共振、高頻區反映馬達機械特徵；以主頻時間序列變化偵測運轉衰減與異常，支援設備維運決策。",
             en: "Time-frequency analysis of pump vibrations — low bands reflect pipe resonance, high bands motor mechanics; dominant-frequency drift over time flags degradation for maintenance decisions." },
    metrics: [ { v: { zh: "時頻", en: "Spectral" }, label: { zh: "頻譜特徵追蹤", en: "spectrogram tracking" } } ],
    stack: ["Python", "Signal Processing", "IoT"],
    tags: ["ts", "iot"], links: [], featured: false
  },

  /* ---------- ⬢ core ---------- */
  {
    id: "troncube", band: "core", icon: "⬢", period: "2023–2025", featured: true,
    org: { zh: "自主產品研發（內部研發＋政府補助）", en: "In-house product R&D (internal + subsidized)" },
    title: { zh: "TronCube 地理空間資料倉儲平台", en: "TronCube Geospatial Data Warehouse" },
    desc:  { zh: "17 個微服務的資料中樞——發明專利 I925616，導入 4 個以上政府專案。", en: "A 17-microservice data core — Invention Patent I925616, adopted by 4+ government projects." },
    detail:{ zh: "為解決向量／網格／IoT 資料異質與各專案重工，架構 17 個微服務：5 個格式別上傳器、資料轉換、Schema、DB（含測試資料清理 SQL）、PgBouncer 連線池、監控、前後台與 SDK；核心 API 與轉換服務內建 unittest／pytest 測試套件與 Makefile 一鍵測試（含 10 萬筆級壓力 fixtures），GitLab CI 持續整合；主題標籤時空搜尋，RESTful API＋QGIS 外掛＋Python SDK 讓 PM 與前端自助取數。成果取得中華民國發明專利第 I925616 號（共同發明人，本人主導申請撰寫）；新北市災害應變雲端協作平臺在上包硬體延宕下改以 API 串接如期交付、節省約 2.3 人月；臺北水源平台完成舊檔案式倉儲遷移。",
             en: "To end per-project rework across vector/grid/IoT data, architected 17 microservices — five format-specific uploaders, transformer, schema, DB (with test-data cleanup SQL), PgBouncer, monitoring, portals and SDKs. Core API and transformation services ship unittest/pytest suites with one-command Makefile targets (incl. 100k-row stress fixtures) on GitLab CI; hashtag spatio-temporal search plus RESTful API + QGIS plugin + Python SDK enable self-service. Earned Taiwan Invention Patent I925616 (co-inventor; led the filing). The New Taipei disaster-response platform shipped on time via API integration despite contractor hardware delays, saving ~2.3 person-months; the Taipei water-source platform migrated off legacy file storage." },
    metrics: [ { v: "17", label: { zh: "微服務", en: "microservices" } },
               { v: "I925616", label: { zh: "發明專利", en: "invention patent" } },
               { v: "2.3", label: { zh: "單案節省人月", en: "person-months saved" } },
               { v: "4+", label: { zh: "政府專案採用", en: "gov adoptions" } } ],
    stack: ["Python", "PostgreSQL", "Docker", "pytest", "GitLab CI", "QGIS Plugin"],
    tags: ["platform", "test"], links: [], featured: true
  },
  {
    id: "edp", band: "core", icon: "🛡", period: "2020–2025", featured: true,
    org: { zh: "新北市消防局等多機關", en: "New Taipei Fire Dept. & multiple agencies" },
    title: { zh: "全災型智慧化指揮監控平臺（EDP）", en: "Emergency Data Platform (EDP)" },
    desc:  { zh: "跨機關防救災資料倉儲與決策支援——支援水門啟閉等實際防汛決策。", en: "Cross-agency disaster data warehouse supporting real operational decisions like floodgate control." },
    detail:{ zh: "整合中央與地方防救災系統與監測資料的一站式決策平台：災防示警、IoT 監測與警戒分布、AI 颱洪／消防風險模擬與視覺化圖表。負責主資料庫開發（備援庫由協力團隊）、平台壓力測試與 GitLab CI；2023 年擔任擴充案資料分析組組長。EDP 的核心價值即是協助主管單位決策——包含水門啟閉等防汛操作。",
             en: "A one-stop decision platform unifying central/local disaster systems: alerts, IoT monitoring with warning zones, AI typhoon-flood and fire-risk simulation, and visual analytics. Owned the primary database (backup by a partner team), the platform's stress testing and GitLab CI; led the data-analysis team on the 2023 expansion. EDP exists to support command decisions — including floodgate operations." },
    metrics: [ { v: { zh: "跨機關", en: "Multi-agency" }, label: { zh: "資料整合", en: "cross-agency data" } },
               { v: { zh: "壓測", en: "Stress-tested" }, label: { zh: "平台級壓力測試", en: "platform stress tests" } } ],
    stack: ["PostgreSQL", "GeoServer", "Leaflet", "Docker", "GitLab CI"],
    tags: ["platform", "test"], links: [], featured: true
  },
  {
    id: "llm-ops", band: "core", icon: "🤖", period: "2023–2025", featured: true,
    org: { zh: "新北市消防局 LLM POC／公司內部", en: "New Taipei Fire Dept. LLM POC / internal ops" },
    title: { zh: "地端 LLM 導入：從 POC 到正式合約", en: "On-Prem LLM: POC to Signed Contract" },
    desc:  { zh: "政府資料不上雲的前提下打造 LLM Agent 架構，POC 轉 2025 正式簽約。", en: "An LLM agent architecture for data that can't leave premises — POC converted to a signed 2025 contract." },
    detail:{ zh: "政府資料機敏、多數不可上雲：設計 AnythingLLM＋Ollama（含微調模型與 TAIDE）之開發／落地雙軌容器化架構；Prompt Engineering＋Function Calling 讓 LLM 將使用者問題轉為結構化 JSON、觸發後端 API 查詢政府資料庫後產出專業回覆。新北市消防局 POC 促成 2025 年正式簽約（業主為此配置 96GB VRAM AI 伺服器）；框架供多專案複用。同期建置公司內網 LLM 平台與 Whisper 會議轉寫，2024 下半年起導入 ChatGPT 輔助開發並撰寫 Claude 導入規範。",
             en: "With sensitive government data barred from the cloud, designed a dual-track (dev/prod) containerized stack on AnythingLLM + Ollama (incl. fine-tuned models and TAIDE). Prompt engineering + function calling turn questions into structured JSON that triggers backend APIs over government databases. The fire-department POC converted into a signed 2025 contract (the client provisioned a 96GB-VRAM AI server); the framework is reused across teams. Also built the intranet LLM platform and Whisper transcription, rolled out ChatGPT-assisted development from H2 2024 and authored Claude adoption guidelines." },
    metrics: [ { v: "96 GB", label: { zh: "業主配置 VRAM", en: "client-provisioned VRAM" } },
               { v: { zh: "POC→約", en: "POC→Deal" }, label: { zh: "2025 正式簽約", en: "signed 2025" } } ],
    stack: ["Ollama", "RAG", "Function Calling", "TAIDE", "Whisper", "Docker"],
    tags: ["llm", "platform"], links: [], featured: true
  },
  {
    id: "ts-module", band: "core", icon: "⏱", period: "2024",
    org: { zh: "公司級模組標準化", en: "Company-wide module standardization" },
    title: { zh: "統一時間序列 AI 模組", en: "Unified Time-Series AI Module" },
    desc:  { zh: "模型交付週期由 3–4 個月縮短至 1 個月內，多專案直接複用。", en: "Model delivery cut from 3–4 months to under one month, reused across projects." },
    detail:{ zh: "把各專案重複開發的時序模型（資料清洗、10 分鐘等距採樣、7:2:1 切分、訓練與部署）標準化為公司統一模組；與遠傳電信協作部署雨量預測至台北市政府伺服器，台北市災害應變中心（EOC）與國道 ETC 維運等專案直接複用，並救回懸置多年的零人月遺留案。",
             en: "Standardized the recurring time-series stack (cleaning, 10-min resampling, 7:2:1 splits, training, deployment) into one company module; deployed rainfall prediction onto Taipei City servers with Far EasTone. Reused by the Taipei EOC and freeway-ETC maintenance projects — and rescued a long-stalled zero-budget legacy deliverable." },
    metrics: [ { v: { zh: "→1 個月", en: "→1 mo" }, label: { zh: "交付週期（原 3–4 月）", en: "delivery (was 3–4 mo)" } } ],
    stack: ["Python", "Transformer", "PostgreSQL", "GitLab CI"],
    tags: ["ts", "platform", "test"], links: [], featured: false
  },
  {
    id: "observability", band: "core", icon: "📈", period: "2024",
    org: { zh: "團隊基礎設施", en: "Team infrastructure" },
    title: { zh: "觀測性與基礎設施標準化", en: "Observability & Infra Standardization" },
    desc:  { zh: "Grafana＋Loki＋Promtail 日誌中樞；機房／虛擬化／資安檢核全文件化。", en: "Grafana + Loki + Promtail log hub; datacenter, virtualization and security checks fully documented." },
    detail:{ zh: "導入 Grafana＋Loki＋Promtail 容器日誌收整（LogQL 查詢、容器監控儀表板），除錯集中定位；撰寫 tutorial-101 文件庫——Docker 安裝、ISMS 資安模組檢核、Proxmox VE 建機、實體機網路架構、本地 LLM 服務——新人照文件即可重建環境。",
             en: "Rolled out Grafana + Loki + Promtail container log aggregation (LogQL, dashboards) for centralized debugging; authored the tutorial-101 docs — Docker setup, ISMS security checks, Proxmox VE provisioning, physical network layout, local LLM service — so environments rebuild from docs alone." },
    metrics: [ { v: { zh: "1 處", en: "One pane" }, label: { zh: "日誌集中查詢", en: "central log search" } } ],
    stack: ["Grafana", "Loki", "Promtail", "Proxmox VE", "ISMS"],
    tags: ["platform", "test"], links: [], featured: false
  },

  /* ---------- more：Freelance 與早期作品 ---------- */
  {
    id: "dividend-tool", band: "more", icon: "💹", period: "2025",
    org: { zh: "Freelance", en: "Freelance" },
    title: { zh: "股利再投資試算工具", en: "Dividend-Reinvestment Calculator" },
    desc:  { zh: "以年度資金、現金／股票股利與均價推算長期持股與成本；含 Google Sheets 版。", en: "Long-horizon shares & cost projection from annual capital, dividends and prices; Google Sheets edition included." },
    detail:{ zh: "為私人客戶開發 Python 試算工具：輸入年度資金投入、現金與股票股利、年度均價，推算長期最終持股數與總投入成本；另交付 Google Sheets 版本，讓慣用試算表的使用者直接操作。",
             en: "Python tool for a private client projecting final share count and total invested cost from annual contributions, cash/stock dividends and average prices; delivered a Google Sheets edition for spreadsheet-first users." },
    metrics: [], stack: ["Python", "Google Sheets"], tags: ["ts", "web"], links: [], featured: false
  },
  {
    id: "mosir", band: "more", icon: "📝", period: "2025",
    org: { zh: "mosir.app（社群微網誌平台）", en: "mosir.app (social microblogging platform)" },
    title: { zh: "Beta 上線後端貢獻與測試", en: "Beta-Launch Backend Contribution & Testing" },
    desc:  { zh: "文章發布機器人、API 整合測試與探索性測試，上線前回報並驗證修復。", en: "Publishing bot, API integration tests and exploratory testing — bugs reported and fixes verified pre-launch." },
    detail:{ zh: "擔任平台 Beta 上線的後端貢獻者：開發文章發布機器人串接內容 API、對新 API 端點撰寫整合測試，並執行探索性測試，於上線前回報錯誤並驗證修復——把測試工程習慣帶進社群產品。",
             en: "Backend contributor for the beta launch: built a publishing bot against the content API, wrote integration tests for new endpoints, and ran exploratory testing — reporting bugs and verifying fixes before launch." },
    metrics: [], stack: ["Python", "REST API", "Integration Testing"], tags: ["test", "web"], links: [{ label: { zh: "平台", en: "Platform" }, url: "https://mosir.app" }], featured: false
  },
  {
    id: "magical-mirai", band: "more", icon: "🎤", period: "2025",
    org: { zh: "Magical Mirai 2025 Programming Contest（東京）", en: "Magical Mirai 2025 Programming Contest (Tokyo)" },
    title: { zh: "歌詞驅動互動網頁應用", en: "Lyric-Driven Interactive Web App" },
    desc:  { zh: "以 TextAlive App API 打造隨音樂歌詞即時反應的互動網頁。", en: "An interactive web experience reacting live to lyrics via the TextAlive App API." },
    detail:{ zh: "組隊參加初音未來 Magical Mirai 2025 程式競賽，以 TextAlive App API 開發歌詞同步的互動式網頁應用，探索 Web 前端與音樂資料流的即時協作。",
             en: "Team entry to the Hatsune Miku Magical Mirai 2025 contest: a lyric-synchronized interactive web app on the TextAlive App API, exploring real-time choreography between front-end and music data." },
    metrics: [], stack: ["JavaScript", "TextAlive API", "Web Audio"], tags: ["web"], links: [{ label: { zh: "線上展示", en: "Live demo" }, url: "https://moonstarsky37.github.io/miku-magical-mirai-music-player/" },
            { label: { zh: "原始碼", en: "Source" }, url: "https://github.com/moonstarsky37/miku-magical-mirai-music-player" },
            { label: { zh: "競賽頁", en: "Contest" }, url: "https://magicalmirai.com/2025/procon/index_en.html" }], featured: false
  },
  {
    id: "tpe-dataplatform", band: "more", icon: "🤰", period: "2023",
    org: { zh: "2023 臺北程式設計節黑客松", en: "Taipei Codefest 2023 Hackathon" },
    title: { zh: "友善生育城市儀表板", en: "Pregnancy-Friendly City Dashboard" },
    desc:  { zh: "6 人隊長帶隊晉級決賽：6 個友善生育儀表板組件，整合托育、生育率、心理資源等臺北開放資料。", en: "Led a 6-person team to the finals — 6 pregnancy-friendly dashboard components on Taipei open data." },
    detail:{ zh: "基於臺北城市儀表板開源前端（Vue 3）fork 客製：爬蟲＋跨機關開放資料經 pandas/GeoPandas ETL 產出圖表 JSON 與 GeoJSON 圖層；6 個組件涵蓋托育中心收托與收費、新生兒統計、心理諮詢處、生育率×物價、產後離職率，其中 3 個含 Mapbox 地圖圖層。",
             en: "Customized fork of the open-source Taipei City Dashboard FE (Vue 3): crawler + multi-agency open data through a pandas/GeoPandas ETL into chart JSON and GeoJSON layers; 6 components covering daycare capacity/fees, newborn stats, counseling sites, fertility vs CPI and post-childbirth employment, 3 with Mapbox map layers." },
    metrics: [ { v: "6", label: { zh: "儀表板組件", en: "dashboard components" } },
               { v: "3", label: { zh: "Mapbox 地圖圖層", en: "map-layer components" } },
               { v: { zh: "決賽", en: "Finals" }, label: { zh: "6 人團隊隊長", en: "captain of 6" } } ],
    stack: ["Vue", "Python", "pandas", "GeoPandas", "Mapbox"],
    tags: ["web"], links: [{ label: { zh: "原始碼", en: "Source" }, url: "https://github.com/moonstarsky37/TPE-DataPlatform" }], featured: false
  },
  {
    id: "hack104", band: "more", icon: "🧩", period: "2017",
    org: { zh: "HACK104 黑客松", en: "HACK104 Hackathon" },
    title: { zh: "NMF 職缺推薦", en: "Job Recommendation with NMF" },
    desc:  { zh: "以非負矩陣分解預測求職者偏好職缺。", en: "Predicting job preferences with non-negative matrix factorization." },
    detail:{ zh: "於 104 人力銀行黑客松以非負矩陣分解（NMF）建模求職者與職缺的隱含關聯，產出職缺推薦。",
             en: "Modeled latent jobseeker–job affinities with NMF at the HACK104 hackathon to generate recommendations." },
    metrics: [], stack: ["Python", "NMF", "RecSys"], tags: ["ts"], links: [], featured: false
  },
  {
    id: "pixnet-bot", band: "more", icon: "💬", period: "2017",
    org: { zh: "PIXNET Hackathon 4th", en: "PIXNET Hackathon 4th" },
    title: { zh: "智慧黑白講：檢索×生成聊天機器人", en: "Retrieval × Generation Chatbot" },
    desc:  { zh: "BM25 檢索排序＋jieba 語意判斷＋seq2seq 生成回覆。", en: "BM25 ranking + jieba parsing + seq2seq generation." },
    detail:{ zh: "打造貼近真人應答的聊天機器人：BM25 做候選檢索排序、jieba 判斷語意極性、TensorFlow seq2seq（附 attention）生成回覆——2017 年的 RAG 雛形。",
             en: "A human-like chatbot: BM25 candidate ranking, jieba semantic parsing, and TensorFlow seq2seq with attention for responses — a 2017 proto-RAG." },
    metrics: [], stack: ["TensorFlow", "seq2seq", "BM25", "jieba"], tags: ["llm"], links: [], featured: false
  },
  {
    id: "vgsn", band: "more", icon: "🈶", period: "2017",
    org: { zh: "IEEE IALP 2017（新加坡，口頭發表）", en: "IEEE IALP 2017 (Singapore, oral)" },
    title: { zh: "VGSN：中文字型缺字生成", en: "VGSN: Generating Missing Chinese Glyphs" },
    desc:  { zh: "第一作者論文——以 VAE 變體自動生成 256×256 中文字型缺字。", en: "First-author paper — VAE-based generation of missing 256×256 font glyphs." },
    detail:{ zh: "提出 Variational Grid Setting Network（VAE 變體），以少量樣本自動生成字型集中缺少的中文字，輸出達 256×256 解析度；第一作者並於新加坡口頭發表。",
             en: "Proposed the Variational Grid Setting Network (a VAE variant) generating missing Chinese characters at 256×256 from few samples; first author, presented orally in Singapore." },
    metrics: [ { v: "256²", label: { zh: "生成解析度", en: "output resolution" } } ],
    stack: ["VAE", "TensorFlow"], tags: ["vision"],
    links: [{ label: { zh: "arXiv", en: "arXiv" }, url: "https://arxiv.org/abs/1710.01255" }], featured: false
  },
  {
    id: "unity-bird", band: "more", icon: "🐦", period: "2018",
    org: { zh: "個人作品", en: "Personal project" },
    title: { zh: "Unity 神經網路 Flappy Bird", en: "Neural-Net Flappy Bird in Unity" },
    desc:  { zh: "C# 實作：玩家模式之外，讓神經網路自己學會飛。", en: "C# game where a neural network learns to fly the bird." },
    detail:{ zh: "以 Unity（C#）實作跨平台小遊戲：除玩家操作模式，另建神經網路訓練模式，讓 AI 自行演化出通關飛行策略。",
             en: "A cross-platform Unity (C#) game with a training mode where a neural network evolves its own flight policy alongside the playable mode." },
    metrics: [], stack: ["Unity", "C#", "NN"], tags: ["web"], links: [], featured: false
  },
  {
    id: "etf-system", band: "more", icon: "🚢", period: "2016–2017",
    org: { zh: "產學合作（morely-etf.com）", en: "Industry-academia co-op (morely-etf.com)" },
    title: { zh: "出口貿易流程系統", en: "Export Transaction Flow System" },
    desc:  { zh: "全端打造航運出口流程的新增、搜尋、紀錄與統計系統。", en: "Full-stack system to create, search, log and analyze export shipping flows." },
    detail:{ zh: "從需求分析到上線：MySQL 關聯式 schema 設計、Node.js 後端、HTML5/CSS3/EJS 前端與 Android（Java）客戶端，並洽談 VPS 完成正式部署——第一次把系統從零帶到營運。",
             en: "From requirements to production: MySQL schema design, Node.js backend, HTML5/CSS3/EJS front-end and an Android (Java) client, deployed to a leased VPS — first zero-to-production system." },
    metrics: [], stack: ["Node.js", "MySQL", "EJS", "Android/Java"], tags: ["web"], links: [], featured: false
  },
  {
    id: "csharp-ml", band: "more", icon: "🧮", period: "2017 → 2026",
    org: { zh: "研究所課程作品（2026 翻新開源）", en: "Graduate coursework (rebuilt & open-sourced 2026)" },
    title: { zh: "C# 模糊推論與神經網路視覺化", en: "Fuzzy Inference & NN Visualizer in C#" },
    desc:  { zh: "Windows 桌面版模糊集合設計與隸屬函數視覺化，2026 以 .NET 8 + ScottPlot 翻新開源。", en: "Desktop fuzzy-set design and membership-function visualization, rebuilt on .NET 8 + ScottPlot and open-sourced in 2026." },
    detail:{ zh: "以 C# 實作模糊集合工作站（十種隸屬函數、PropertyGrid 即時調參）與隸屬函數比較器；2026 從 .NET Framework 4.6.1 + MSChart 遷移至 .NET 8 + ScottPlot 5,並修正原版高斯 σ² 等數學 bug 後開源。",
             en: "A fuzzy-set workbench (ten membership types with live PropertyGrid tuning) and a membership-function comparator in C#; migrated in 2026 from .NET Framework 4.6.1 + MSChart to .NET 8 + ScottPlot 5, fixing the original Gaussian σ² math bug along the way." },
    metrics: [], stack: ["C#", ".NET 8", "WinForms", "ScottPlot", "Fuzzy Logic"], tags: ["vision"],
    links: [{ label: { zh: "Fuzzy Set Studio", en: "Fuzzy Set Studio" }, url: "https://github.com/moonstarsky37/fuzzy-set-studio" },
            { label: { zh: "MF Visualizer", en: "MF Visualizer" }, url: "https://github.com/moonstarsky37/mf-visualizer" }], featured: false
  },
  {
    id: "liver3d-viewer", band: "more", icon: "🫀", period: "2017 → 2026",
    org: { zh: "台大碩論輔助工具（2026 翻新開源）", en: "NTU thesis helper tool (rebuilt & open-sourced 2026)" },
    title: { zh: "肝臟 3D 點雲檢視器", en: "Liver 3D Point-Cloud Viewer" },
    desc:  { zh: "把逐切片肝臟分割遮罩堆疊重建成可旋轉 3D 點雲，碩論研究的目視驗證工具。", en: "Stacks per-slice liver segmentation masks into a rotatable 3D point cloud — the eyeball-check tool from my thesis research." },
    detail:{ zh: "碩論《以連續影像全卷積深度學習網路圈選3D醫學影像之研究》（與台大醫院合作，65 例腹部 CT）研究期間，用來快速確認逐切片分割結果堆疊後的 3D 形狀是否合理。原為 Python 3.6 PyInstaller 單檔工具，2026 重構為 uv 套件：幾何核心與 Qt 解耦、headless pytest、PyQt6。",
             en: "Built during my thesis (Consecutive Convolutional Network for 3D Medical Image Segmentation, with NTUH, 65 abdominal CT cases) to sanity-check that per-slice masks stack into plausible anatomy. Originally a Python 3.6 PyInstaller tool; rebuilt in 2026 as a uv package with a Qt-decoupled, headless-tested geometry core." },
    metrics: [], stack: ["Python", "uv", "PyQt6", "pyqtgraph", "NumPy"], tags: ["vision"],
    links: [{ label: { zh: "GitHub", en: "GitHub" }, url: "https://github.com/moonstarsky37/liver3d-viewer" },
            { label: { zh: "論文", en: "Thesis" }, url: "https://tdr.lib.ntu.edu.tw/jspui/handle/123456789/77270" }], featured: false
  },
  {
    id: "shibuya-3d-viewer", band: "more", icon: "🗼", period: "2024-12",
    org: { zh: "個人專案", en: "Personal project" },
    title: { zh: "澀谷 3D 城市瀏覽器", en: "Shibuya 3D City Viewer" },
    desc:  { zh: "CesiumJS 載入東京 PLATEAU 3D Tiles，瀏覽器直接漫遊澀谷街區。", en: "CesiumJS demo streaming Tokyo PLATEAU 3D Tiles — fly through Shibuya in the browser." },
    detail:{ zh: "想在瀏覽器直接看東京都市模型：以 CesiumJS 1.123 載入「3D都市モデル（Project PLATEAU）東京都23区（国土交通省）」的澀谷區 3D Tiles，Node 18 + http-server 本地即起。2026-07 以自建 jp-ui-design skill 產出日系風 landing page（白練×瑠璃配色、Noto Sans JP、半滿版版式）作為專案門面。",
             en: "A browser-based view of Tokyo's official city model: CesiumJS 1.123 streams Shibuya 3D Tiles from MLIT's Project PLATEAU (Tokyo 23 wards dataset); Node 18 + http-server to run locally. In 2026-07 added a Japanese-style landing page (shironeri×ruri palette, Noto Sans JP, half-bleed layout) generated with my jp-ui-design skill." },
    metrics: [], stack: ["CesiumJS", "JavaScript", "Node.js"], tags: ["web"],
    links: [{ label: { zh: "原始碼", en: "Source" }, url: "https://github.com/moonstarsky37/Shibuya-3D-City-Viewer-Demo" },
            { label: { zh: "線上展示", en: "Live demo" }, url: "https://moonstarsky37.github.io/Shibuya-3D-City-Viewer-Demo/" }], featured: false
  }
];

/* ---------- 經歷時間軸 ---------- */
const TIMELINE = [
  { y: "2011–13", t: { zh: "AMC10/12 與 AIME 資格 ×2（美國數學競賽）、TRML", en: "AMC 10/12 & AIME qualification ×2, TRML" } },
  { y: "2013", t: { zh: "政大應用數學系入學（後雙主修資管；書卷獎多次、系排名第 3）", en: "NCCU Applied Math (double major in MIS; multiple dean's awards, dept. rank 3)" } },
  { y: "2016", t: { zh: "產學合作出口貿易系統——第一個從零到上線的全端系統", en: "Export-flow system — first zero-to-production full-stack build" } },
  { y: "2017", t: { zh: "HACK104／PIXNET 黑客松；IALP 2017 第一作者口頭發表（新加坡）；台大工工碩士入學", en: "Two hackathons; first-author IALP 2017 oral (Singapore); began M.S. at NTU" } },
  { y: "2018", t: { zh: "中強光電 AI 實習；IISE Asia 最佳論文獎", en: "Coretronic AI internship; IISE Asia Best Paper Award" } },
  { y: "2019", t: { zh: "台大碩士畢業（台大醫院合作論文）；興創實習；團隊獲亞洲資料創新應用大擂台台灣研發獎；入伍", en: "M.S. thesis with NTUH; ThinkTron internship; team won Asia Open Data Challenge Taiwan R&D Award; military service" } },
  { y: "2020", t: { zh: "正式加入興創知能任 AI 演算法工程師——雨量預報、高精地圖、5G 救災", en: "Joined ThinkTron as AI Algorithm Engineer — rainfall, HD maps, 5G rescue" } },
  { y: "2023", t: { zh: "升任 AI 課長；台北程式設計節「城市儀表板」黑客松 6 人隊長晉級決賽；東京 KKC 研討會 3 議題主講", en: "Promoted to Section Manager (AI); led a 6-person hackathon team to the finals; 3 talks at the KKC Symposium, Tokyo" } },
  { y: "2024", t: { zh: "帶隊交付 12 專案；統一時序模組（交付週期 −70%）；越南 3 場英文授課", en: "12 projects delivered; unified time-series module (−70% cycle); 3 English trainings in Vietnam" } },
  { y: "2025", t: { zh: "主導 TronCube 專利申請送件；LLM POC 轉正式合約；離任後自由接案（mosir.app、Magical Mirai 2025）", en: "Led the TronCube patent filing; LLM POC converted to contract; freelance after departure (mosir.app, Magical Mirai 2025)" } },
  { y: "2026", t: { zh: "中華民國發明專利第 I925616 號公告發證（共同發明人）", en: "Taiwan Invention Patent No. I925616 granted (co-inventor)" } }
];

/* ---------- 技能 ---------- */
const SKILLS = [
  { g: { zh: "測試與品質", en: "Testing & Quality" },
    items: ["Test Planning", "unittest / pytest", "SIT / UAT", "Stress Testing", "SonarQube", "GitLab CI/CD", "Annotation Standards", "SLA Operations"] },
  { g: { zh: "程式語言", en: "Languages" },
    items: ["Python", "SQL / PostgreSQL", "C++", "Node.js", "Golang", "R", "Java", "C#"] },
  { g: { zh: "雲端與基礎設施", en: "Cloud & Infra" },
    items: ["Docker", "Kubernetes", "Terraform", "GCP", "AWS", "Airflow", "Proxmox VE", "Grafana / Loki", "RabbitMQ", "FastAPI"] },
  { g: { zh: "AI / 機器學習", en: "AI / ML" },
    items: ["PyTorch", "YOLO / Mask R-CNN / U-Net", "Transformer Forecasting", "ConvLSTM", "LLM (RAG / Fine-tuning / Function Calling)", "Whisper", "LiDAR / SLAM", "NVIDIA Jetson"] }
];

/* ---------- 獎項與認證 ---------- */
const HONORS = [
  { t: { zh: "中華民國發明專利第 I925616 號「地理空間資料處理系統及方法」共同發明人（2026 公告，權利至 2045）", en: "Taiwan Invention Patent I925616, Geospatial Data Processing System and Method — co-inventor (granted 2026, term to 2045)" } },
  { t: { zh: "Google Cloud 技能徽章 26 枚（K8s、Terraform、BigQuery、雲端安全…）", en: "26 Google Cloud skill badges (K8s, Terraform, BigQuery, security…)" } },
  { t: { zh: "NVIDIA 深度學習學院（DLI）證書 ×2（Jetson Nano、DeepStream）", en: "NVIDIA DLI certificates ×2 (Jetson Nano, DeepStream)" } },
  { t: { zh: "亞洲資料創新應用大擂台「台灣研發獎」（2019，團隊）", en: "Taiwan R&D Award, Asia Open Data Challenge (2019, team)" } },
  { t: { zh: "IISE Asia 2018 最佳論文獎", en: "Best Paper Award, IISE Asia 2018" } },
  { t: { zh: "2023 台北程式設計節「城市儀表板」大黑客松決賽（6 人團隊隊長）", en: "Finals, Taipei Coding Festival City-Dashboard Hackathon 2023 (captain of 6)" } },
  { t: { zh: "PyCon Taiwan 受邀講者；東京 KKC 技術研討會 3 議題主講；APRSAF／越南共 4 場以上英文授課", en: "Invited PyCon Taiwan speaker; 3 talks at KKC Symposium Tokyo; 4+ English trainings (APRSAF, Vietnam)" } }
];

/* ---------- 篩選標籤 ---------- */
const TAGS = [
  { id: "all",      label: { zh: "全部", en: "All" } },
  { id: "vision",   label: { zh: "視覺 AI", en: "Vision" } },
  { id: "ts",       label: { zh: "Forecasting", en: "Time series" } },
  { id: "llm",      label: { zh: "LLM", en: "LLM" } },
  { id: "iot",      label: { zh: "IoT／邊緣", en: "IoT / Edge" } },
  { id: "platform", label: { zh: "平台", en: "Platform" } },
  { id: "test",     label: { zh: "測試工程", en: "Testing" } },
  { id: "web",      label: { zh: "Web／其他", en: "Web / Misc" } }
];
