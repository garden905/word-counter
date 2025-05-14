document.addEventListener("mouseup", () => {
    const selectedText = window.getSelection().toString();
  
    if (selectedText.trim().length > 0) {
      const count = selectedText.length;
  
      // すでに表示している要素があれば削除
      const oldPopup = document.getElementById("char-counter-popup");
      if (oldPopup) oldPopup.remove();
  
      // 表示用ポップアップ作成
      const popup = document.createElement("div");
      popup.id = "char-counter-popup";
      popup.textContent = `文字数: ${count}`;
      popup.style.position = "fixed";
      popup.style.top = `${event.clientY + 10}px`;
      popup.style.left = `${event.clientX + 10}px`;
      popup.className = "char-counter-style";
  
      document.body.appendChild(popup);
  
      // 3秒後に自動削除
      setTimeout(() => popup.remove(), 3000);
    }
  });
  