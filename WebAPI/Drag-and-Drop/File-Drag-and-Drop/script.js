function showPicturePreview(files) {
  // 個人延伸: 希望圖片被拖曳之後能夠產生 Preview

  for (let file of files) {
    const imageType = /image.*/; // 這是 regex

    if (!file.type.match(imageType)) {
      continue;
    }

    const img = document.createElement("img");
    img.file = file;
    img.classList.add("img_preview");
    document.body.appendChild(img);

    // 使用 FileReader 讀檔案
    const reader = new FileReader();
    reader.onload = (event) => (img.src = event.target.result); // 讀完檔案之後要觸發什麼事件
    reader.readAsDataURL(file); // 以 dataURI (base64) 讀入檔案內容
  }
}

function dropHandler(event) {
  console.log("File(s) dropped");

  // 避免預設行為 (例如拖進去檔案會在瀏覽器開啟)
  event.preventDefault();

  // 以下兩種 API 現今主流瀏覽器都支援
  if (event.dataTransfer.items) {
    // 這是 DataTransferItemList API
    [...event.dataTransfer.items].forEach((item, index) => {
      if (item.kind === "file") {
        const file = item.getAsFile();
        console.log(`file[${index}].name = ${file.name}`);
      }
    });
  } else {
    // 這是 DataTransfer API
    [...event.dataTransfer.files].forEach((file, i) => {
      console.log(`file[${i}].name = ${file.name}`);
    });
  }

  // 預覽圖片部份
  showPicturePreview(event.dataTransfer.files);
}

function dragOverHandler(event) {
  console.log("File(s) in drop zone");

  // 避免拖曳後的預設行為 (開啟檔案)
  event.preventDefault();
}

// 增加監聽事件，畢竟寫在 HTML 很醜又不方便
const dropZone = document.getElementById("drop_zone");
dropZone.addEventListener("drop", dropHandler, false);
dropZone.addEventListener("dragover", dragOverHandler, false);
