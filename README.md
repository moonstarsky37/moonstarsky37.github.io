# moonstarsky37.github.io — 個人作品集

「從太空到地下」互動作品集：GeoAI × 測試自動化 × 工程領導。
純靜態、零建置、零外部相依（無 CDN）。

## 本機預覽

```bash
python -m http.server 8000
# 開 http://localhost:8000
```

（直接雙擊 index.html 也能看，但建議走 http server。）

## 部署到 GitHub Pages

1. GitHub 建立 repo，名稱固定為 `moonstarsky37.github.io`（public）。
2. 在本資料夾：
   ```bash
   git remote add origin https://github.com/moonstarsky37/moonstarsky37.github.io.git
   git push -u origin main
   ```
3. Repo → Settings → Pages → Source 選 `main` / root。約 1 分鐘後生效：
   `https://moonstarsky37.github.io/`

## 新增作品（唯一要學的事）

打開 `js/projects.js`，複製任一物件貼到 `PROJECTS` 陣列，改內容即可。欄位：

| 欄位 | 說明 |
|---|---|
| `band` | 出現位置：`space`／`air`／`city`／`under`／`core`＝五個高度帶；`more`＝「更多作品」網格 |
| `icon` | 一個 emoji |
| `period`、`org` | 卡片上的年份與單位（org 要 `{zh, en}`） |
| `title`／`desc`／`detail` | 標題／卡片一句話／modal 詳述（皆 `{zh, en}`） |
| `metrics` | 量化數字陣列 `{v, label:{zh,en}}`（卡片顯示前 3 個） |
| `stack` | 技術 chips（字串陣列） |
| `tags` | 篩選用：`vision` `ts` `llm` `iot` `platform` `test` `web` |
| `links` | `{label:{zh,en}, url}` 陣列，顯示於 modal |
| `featured` | `true` 會加上 ★ 邊框 |

時間軸（`TIMELINE`）、技能（`SKILLS`）、獎項（`HONORS`）、Hero 統計（`STATS`）同檔案內，一樣直接改。

## 換履歷檔

把新 PDF 放進 `resume/`，檔名沿用即可（Hero 的「下載履歷」指向 `resume/`）。

## 結構

```
index.html      骨架（不含內容）
css/style.css   樣式（tokens 在 :root）
js/projects.js  ★ 所有內容資料
js/i18n.js      介面字串（中英）
js/main.js      渲染與互動
resume/         履歷 PDF
docs/           設計規格
```
