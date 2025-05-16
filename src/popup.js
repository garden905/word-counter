document.getElementById("save").onclick = () => {
  const figure_number = document.getElementById("figure_number").value;
  const position = document.getElementById("position").value;
  chrome.storage.local.set({ figure_number,position }, () => {
    alert("保存しました");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["figure_number","position"], (result) => {
    document.getElementById("figure_number").value = result.figure_number || 0;
    document.getElementById("position").value = result.position || "top";
  });
});
