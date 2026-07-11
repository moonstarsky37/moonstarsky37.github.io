# 📘 個人維護手冊 — 怎麼加新東西（給未來的自己）

> 這份是你自己看的操作手冊。原則只有一條：**內容都在 `js/projects.js`，版面不用碰。**
> 改完存檔 → 瀏覽器重新整理就能看 → 確認沒問題再 push。

---

## 0. 每次更新的固定流程

```bash
# 1) 本機預覽（在 github_page 資料夾）
python -m http.server 8000        # 開 http://localhost:8000 檢查

# 2) 沒問題就上版
git add -A
git commit -m "add: XXX 作品"
git push
# 約 1 分鐘後 https://moonstarsky37.github.io/ 生效
```

檢查重點（每次都看一眼）：
- [ ] 中文模式和 **EN 模式各切一次**，卡片、彈窗都沒有跑出另一種語言
- [ ] 新卡片點得開、彈窗關得掉
- [ ] 手機寬度（瀏覽器縮窄）版面沒破

---

## 1. 新增一個作品（通用範本）

打開 `js/projects.js`，找到 `const PROJECTS = [`，把下面範本貼進陣列（任意位置，同一個 band 內照貼上順序排列）：

```js
{
  id: "my-new-work",                    // 英文小寫-連字號，不能跟別人重複
  band: "more",                         // 出現位置，見下表
  icon: "🧪",                           // 一個 emoji
  period: "2026",
  org:   { zh: "個人專案", en: "Personal project" },
  title: { zh: "作品標題", en: "Work Title" },
  desc:  { zh: "卡片上的一句話（30 字內）。", en: "One-liner on the card." },
  detail:{ zh: "點開彈窗後的完整介紹，寫幾句都可以：背景、你做了什麼、結果。",
           en: "Full description in the modal: context, what you built, outcome." },
  metrics: [                            // 量化數字，卡片最多顯示前 3 個；沒有就留 []
    { v: "99%", label: { zh: "某個指標", en: "some metric" } }
  ],
  stack: ["Python", "FastAPI"],         // 技術 chips（建議全英文，兩種語言都通用）
  tags: ["web"],                        // 篩選分類，見下表（可多個）
  links: [],                            // 見情境 A
  images: [],                           // 見情境 B
  featured: false                       // true = 卡片加 ★ 精選框
}
```

### band（作品出現在哪裡）

| band | 位置 | 放什麼 |
|---|---|---|
| `space` | 🛰 衛星軌道 | 衛星影像、遙測 |
| `air` | ✈ 航空大氣山區 | 航攝、氣象、坡地 |
| `city` | 🏙 城市地表 | 車載、街景、救災影像 |
| `under` | 🕳 地下水下 | 下水道、隧道、設備監測 |
| `core` | ⬢ 資料中樞 | 平台、基礎設施、LLM、流程 |
| `more` | 更多作品區 | **Freelance、黑客松、side project 一律放這** |

### tags（篩選器分類，可複選）

`vision`（視覺 AI）｜`ts`（時序）｜`llm`｜`iot`（IoT/邊緣）｜`platform`｜`test`（測試工程）｜`web`（Web/其他）

⚠️ 打錯字不會報錯，只是篩選不到——新分類要同步加進 `TAGS` 陣列才會出現新按鈕。

---

## 2. 情境 A：作品**有 GitHub／Demo 連結**

`links` 填陣列，彈窗底部會出現可點連結（自動開新分頁）：

```js
links: [
  { label: { zh: "原始碼", en: "Source" },  url: "https://github.com/moonstarsky37/xxx" },
  { label: { zh: "線上展示", en: "Live demo" }, url: "https://xxx.example.com" },
  { label: { zh: "文章", en: "Write-up" }, url: "https://blog..." }
]
```

建議：GitHub repo 記得補 README＋截圖，連過去才有東西看。

---

## 3. 情境 B：作品**只能放圖片＋說明**（公司案、無法開源的）

1. 圖片放進 `assets/img/`，檔名用作品 id 開頭，例如：
   `assets/img/sewer-01.png`、`assets/img/sewer-02.png`
2. 在作品物件填 `images`（彈窗會直向排列成圖集）：

```js
images: [
  "assets/img/sewer-01.png",                                  // 最簡單：直接給路徑
  { src: "assets/img/sewer-02.png",                           // 進階：加說明文字
    cap: { zh: "凱米颱風事件驗證結果", en: "Validation on Typhoon Gaemi" } }
],
links: []    // 沒連結就留空，彈窗不會出現連結區
```

3. 想讓**卡片本身**也有封面圖，加一行：

```js
thumb: "assets/img/sewer-01.png"    // 卡片頂部 150px 高封面
```

**圖片規範（重要）**：
- 尺寸：寬 1200px 內就夠；截圖先壓縮（tinypng.com 或 `squoosh.app`），單張 < 300KB
- **不要放公司簡報原圖、含機敏資料的畫面**（地圖上的真實個資、內網 IP、客戶 logo）——裁掉或打碼再上
- 沒有圖也完全 OK：`images: []` 就是純文字卡，現有大部分作品都是這樣

---

## 4. 情境 C：兩者都有（連結＋圖片）

`links` 和 `images` 同時填即可，彈窗順序：說明 → 圖片 → 數字 → 技術棧 → 連結。

---

## 5. 改其他區塊（都在 `js/projects.js`）

| 要改什麼 | 找哪個陣列 | 格式 |
|---|---|---|
| Hero 五格大數字 | `STATS` | `{ v: 數字, suffix:"+", label:{zh,en} }`（v 必須是純數字，會跑 count-up 動畫） |
| 經歷時間軸 | `TIMELINE` | `{ y:"2027", t:{zh,en} }`，照年份順序插入 |
| 技能區 | `SKILLS` | 群組內 `items` 建議全英文；要雙語就寫 `{zh,en}` |
| 獎項/專利 | `HONORS` | `{ t:{zh,en} }` |
| 高度帶標題文案 | `BANDS` | 一般不用動 |
| 介面按鈕文字 | `js/i18n.js` | key-value，兩種語言都要填 |

---

## 6. 換履歷檔

新版履歷（HTML 或 PDF）丟進 `resume/`，然後改 `resume/index.html` 裡兩顆按鈕的 `href` 檔名。Hero 的「Résumé」按鈕永遠指向 `resume/`，不用動。

---

## 7. 常見問題（踩過再回來看）

| 症狀 | 原因 |
|---|---|
| 整頁空白 | `projects.js` 語法錯誤——九成是**少逗號**或引號沒關。跑 `node --check js/projects.js` 找行號 |
| 新卡片沒出現 | `band` 拼錯（只有 space/air/city/under/core/more 六種） |
| 篩選器選了看不到它 | `tags` 拼錯，對照上面清單 |
| EN 模式出現中文 | 該欄位只寫了字串沒寫 `{zh, en}`；`title/desc/detail/org/metrics.label/links.label/images.cap` 都要雙語 |
| 圖片不顯示 | 路徑大小寫（GitHub Pages 分大小寫！`Img` ≠ `img`）、或忘了 `git add` 圖片檔 |
| 想換預設語言 | `js/main.js` 第一段 `|| "en"` 改 `|| "zh"` |
| 語言切換記憶怪怪的 | 瀏覽器 localStorage 記住了上次選擇；無痕視窗測預設值 |

---

## 8. 內容撰寫心法（讓卡片維持水準）

- **desc 一句話 = 你做了什麼＋一個數字**。例：「5 座測站未來 1 小時水位預測，颱風實測驗證後上線。」
- **detail 三段式**：背景問題 → 你的作法 → 結果。不確定的數字寧可不寫。
- 公司案照舊規則：**寫客戶白話名稱，不寫內部案號**（B2311 這種外人看不懂）。
- 每季回顧一次 `TIMELINE`，把新的里程碑補上去。
