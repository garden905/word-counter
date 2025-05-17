document.getElementById("save").onclick = () => {
  const figure_number = document.getElementById("figure_number").value;
  const toggle_figure = document.getElementById("toggle_figure").checked;
  const position = document.getElementById("position").value;
  chrome.storage.local.set({ figure_number,toggle_figure,position }, () => {
    alert("保存しました");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["figure_number","position"], (result) => {
    document.getElementById("figure_number").value = result.figure_number || 0;
    console.log("toggle_figure:", result.toggle_figure); // 値を確認
    document.getElementById("toggle_figure").checked = result.toggle_figure || false;
    document.getElementById("position").value = result.position || "top";

        // チェックボックスの状態に応じて入力欄を有効/無効にする
        const toggleFigure = document.getElementById("toggle_figure");
        const figureNumber = document.getElementById("figure_number");
        figureNumber.disabled = !toggleFigure.checked;
     
        toggleFigure.addEventListener("change", () => {
          figureNumber.disabled = !toggleFigure.checked;
        });
  });
   
});
