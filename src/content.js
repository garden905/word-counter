document.addEventListener("mouseup", (event) => {
  const selectedText = window.getSelection().toString();
  console.log(window.innerHeight);

  if (selectedText.trim().length > 0) {
    const count = selectedText.length;

    // すでに表示している要素があれば削除
    const oldPopup = document.getElementById("word-counter-popup");
    if (oldPopup) oldPopup.remove();

    // ポップアップの表示位置を取得
    chrome.storage.local.get("position", (result) => {
      const position = result.position;

      let top, left;
      switch (position) {
        case "top":
          top = `${event.clientY - 20}px`;
          left = `${event.clientX - 10}px`;
          break;
        case "bottom":
          top = `${event.clientY + 10}px`;
          left = `${event.clientX - 10}px`;
          break;
        case "fixed":
          top = "20px";
          left = "20px";
          break;
        default:
          top = `${window.innerHeight - 10}px`;
          left = `${window.innerWidth - 10}px`;
          break;
      }
      // ポップアップの作成
      const popup = document.createElement("div");
      popup.id = "word-counter-popup";
      popup.textContent = `${count} 文字`;
      popup.style.position = "fixed";
      popup.style.top = top;
      popup.style.left = left;
      popup.className = "word-counter-style";
      console.log(popup);

      document.body.appendChild(popup);

      // 3秒後に自動削除
      setTimeout(() => popup.remove(), 3000);
    });
  }
});
