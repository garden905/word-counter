function createPopup(top, left, count, threshold) {
  const popup = document.createElement("div");
  popup.id = "word-counter-popup";
  popup.className = "word-counter-popup";
  popup.textContent = `${count} 文字`;
  popup.style.position = "fixed";
  popup.style.top = top;
  popup.style.left = left;
  if (typeof threshold === "number") {
    if (count > threshold) {
      popup.style.backgroundColor = "#4caf50";
    } else {
      popup.style.backgroundColor = "#f44336";
    }
  }
  return popup;
}

function getSelectionCount() {
  const selection = window.getSelection();
  if (!selection) return 0;
  return selection.toString().length;
}

function getRect(startX, startY, endX, endY) {
  return {
    top: Math.min(startY, endY),
    left: Math.min(startX, endX),
    bottom: Math.max(startY, endY),
    right: Math.max(startX, endX),
  };
}

let startX = 0;
let startY = 0;

document.addEventListener("mousedown", (event) => {
  startX = event.clientX;
  startY = event.clientY;
});

document.addEventListener("mouseup", (event) => {
  const selectionCount = getSelectionCount();
  if (selectionCount > 0) {
    // すでに表示している要素があれば削除
    const oldPopup = document.getElementById("word-counter-popup");
    if (oldPopup) oldPopup.remove();

    // マウスの位置を取得
    const rect = getRect(startX, startY, event.clientX, event.clientY);

    // ローカルから設定を取得
    getLocal((enableThreshold, threshold, position) => {
      let top, left;
      switch (position) {
        case "top":
          top = `${rect.top - 20}px`;
          left = `${rect.left}px`;
          break;
        case "bottom":
          top = `${rect.bottom - 20}px`;
          left = `${rect.right - 10}px`;
          break;
        case "center":
          top = `${(rect.top + rect.bottom) / 2 - 10}px`;
          left = `${(rect.left + rect.right) / 2 - 20}px`;
          break;
        default:
          top = "20px";
          left = "20px";
          break;
      }

      // ポップアップの作成
      const popup = createPopup(
        top,
        left,
        selectionCount,
        enableThreshold ? threshold : null
      );

      document.body.appendChild(popup);

      // 3秒後に自動削除
      setTimeout(() => popup.remove(), 3000);
    });
  }
});
