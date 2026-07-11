# 個人作品集網站設計規格（moonstarsky37.github.io）

日期：2026-07-11｜狀態：設計已獲口頭核准（"OK"）

## 目標
互動式 GitHub Pages 個人作品集：呈現黃梓育的 GeoAI／測試自動化職涯與作品，中英雙語，未來以資料檔擴充作品，零建置系統。

## 核心概念
「從太空到地下」垂直下降敘事。捲動＝下降；背景漸層隨深度變化；左側高度尺同步顯示；專案依實際作業高度分帶。

## 檔案架構
```
github_page/
├── index.html        版面骨架（section 容器，不含專案內容）
├── css/style.css     全部樣式（design tokens 於 :root）
├── js/projects.js    ★資料檔：PROJECTS 陣列＋TIMELINE＋STATS
├── js/i18n.js        I18N 字典（zh/en）
├── js/main.js        渲染＋互動引擎
├── resume/           中英履歷（下載連結目標）
├── docs/             本規格
└── README.md         部署與新增作品說明
```

## 資料模型（projects.js）
```js
{ id, band,            // 'space'|'air'|'city'|'under'|'core'|'more'
  icon,                // emoji
  period, org,         // 顯示於卡片 meta
  title: {zh, en},
  desc:  {zh, en},     // 卡片一句話
  detail:{zh, en},     // modal 詳述（可多句）
  metrics: [{v, label:{zh,en}}],   // 量化數字
  stack: [],           // 技術 chips
  tags: [],            // 篩選: vision|ts|llm|iot|platform|test|web
  links: [{label:{zh,en}, url}], featured }
```
新增作品＝append 一個物件。band 決定落在哪個高度帶；`more` 落在「更多作品」網格。

## 版面（由上而下）
1. **Hero（深空）**：姓名/雙語 tagline/聯絡按鈕（GitHub/LinkedIn/Scholar/Email/履歷下載）＋5 格統計 count-up（6+ 年 Python、12 案/年、1 發明專利、−70% 交付週期、26 GCP 徽章）。
2. **高度帶 ×4**：🛰 ~700 km 衛星軌道｜✈ 5 km–100 m 航空大氣與山區｜🏙 0 m 城市地表｜🕳 −8 m 地下與水下。各帶=標題＋副標＋卡片格（自 PROJECTS 渲染）。
3. **⬢ 資料中樞（core）**：TronCube／EDP／LLM 導入／時序模組統一／觀測性基建，加六階段測試流程橫條與專利徽章。
4. **經歷時間軸**：2011→2026，垂直線＋節點（TIMELINE 陣列）。
5. **更多作品**：Freelance（股利試算、mosir.app、Magical Mirai）＋2019 前作品（HACK104、PIXNET chatbot、Unity NN、C# Fuzzy/MLP、ETF、IALP 論文）。
6. **技能**＋**獎項與演講**＋**Footer**。

## 互動
- 篩選 chips（全部/視覺 AI/時序/LLM/IoT/平台/測試/Web）作用於所有卡片。
- 卡片點擊→modal（detail＋metrics＋stack＋links）；ESC/背景點擊關閉；焦點管理。
- 右上 中⇄EN 切換（localStorage 持久）；`<html lang>` 同步。
- 星空 canvas 視差（隨捲動淡出）；高度尺 IntersectionObserver 更新；數字 count-up；區塊 reveal。
- `prefers-reduced-motion`：停用視差/count-up/transition。
- RWD：<900px 隱藏高度尺、改頂部細進度條；卡片單欄。

## 設計 tokens
- 漸層停靠：#070d1f 深空 → #0e2a52 → #2b6ca3 高空 → #6e5a3a 地平 → #2e2116 地層 → #12100d 地底 → #0b0f1a 中樞。
- 強調：金 #e8b04b（主）、資料青 #57c7e3（輔）；文字 #e9eef7／次要 #9fb0c8。
- 字體：系統 sans 堆疊＋"Noto Sans TC"；標題 800 縮距；數字 tabular-nums。
- 單一深色世界觀（刻意單主題，非疏漏）。

## 紀律
- 不嵌入公司簡報圖；圖形一律 CSS/SVG 原生。
- 數字沿用已核實履歷（黑客松＝2023 城市儀表板 6 人隊長決賽；興創＝KKC 與中興工程顧問社合資）。
- 無外部 CDN；完全自包含。

## 驗證
本機 `python -m http.server` 開啟：雙語切換、篩選、modal、reduced-motion、行動版斷點、新增測試物件至 projects.js 確認自動出卡。

## 實作步驟
1. projects.js＋i18n.js（資料先行）→ 2. index.html → 3. style.css → 4. main.js → 5. resume/ 複製＋README → 6. git init＋commit → 7. Artifact 預覽供你檢視。
