document.getElementById("save").onclick = () => {
  const position = document.getElementById("position").value;
  chrome.storage.local.set({ position }, () => {
    alert("保存しました");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("position", (result) => {
    document.getElementById("position").value = result.position || "top";
  });
});
