# 玩家投稿審核

1. 在你的 Google 雲端硬碟開啟「Ponder｜玩家意見與題目投稿」，選「回覆」。
2. 分開處理改善意見與題目投稿。投稿先看是否容易理解、貼近生活、有不同角度，並刪去私人資料。
3. 你決定批准後，整理成繁體中文和英文。一個簡短情境、一個主問題、一句具體追問即可。公開暱稱只用玩家自願提供的資料；沒有就省略 `author`。
4. 只把已批准的內容加入 `src/approved-questions.json` 陣列。未審核內容留在 Google 表單，不要上傳到公開 repository。
5. 發布更新並等 GitHub Actions 成功後，題目才會出現在「玩家題目」。你也可以把批准的題目交給維護網站的人代為整理和發布。

這是人工審核及發布流程；Google Forms 沒有連接一鍵刊登功能。Google 表單內標記「已批准」本身不會更新網站。

## 已批准題目的格式

以下只是格式範例，不會自動加入題庫。每題使用獨一無二的 `community-` 開頭 ID，刊登後不要改動，以保留分享連結。

```json
[
  {
    "id": "community-friends-001",
    "status": "approved",
    "category": "Party",
    "groupSize": "small",
    "emoji": "☕",
    "title": "One free hour",
    "scenario": "You and a friend have an unexpected hour free.",
    "question": "What nearby place would you visit together?",
    "twist": "",
    "deeperQuestion": "What would you like to do there?",
    "zh": {
      "title": "空出一小時",
      "scenario": "你和朋友突然多了一小時空檔。",
      "question": "你會提議一起去哪個附近的地方？",
      "twist": "",
      "deeperQuestion": "去到那裡，你最想做甚麼？"
    }
  }
]
```

`category` 可用 `Couple`、`Family`、`Party`、`Solo`。聚會的 `groupSize` 可用 `small`（2–3 人）、`medium`（4–6 人）、`large`（7 人以上）。

網站只接受 `status: "approved"`、欄位完整且 ID 合規的紀錄；重複 ID 只顯示第一筆。不過 JSON 檔本身是公開的，因此驗證不能代替私人審核。請不要把待審題目放進檔案。
