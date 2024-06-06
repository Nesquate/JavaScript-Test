# JavaScript 拖曳檔案 & 偵測事件練習

此範例用到了 `ondrop` 和 `dragover` 事件，主要處理檔案識別的部份在 `ondrop` 內，而 `dragover` 在這裡則是避免瀏覽器的預設行為使用

## 自己練習部份

拖曳圖片之後，會顯示圖片的預覽在拖曳區的下方

## 參考資料

- [Drop 示範 (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
- [JavaScript Regex (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) (這就是為什麼會需要 `/image.*/`)
- [Blob: type property(MDN docs)](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type) (`file.type` 的由來)
- [JS HTML5 拖曳上傳圖片預覽 (HackMD)](https://hackmd.io/@c36ICNyhQE6-iTXKxoIocg/HkSdHcJ9U)
- [FileReader 參考資料(鐵人賽)](https://ithelp.ithome.com.tw/articles/10275062)
