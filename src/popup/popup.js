const thresholdSwitch = document.getElementById("threshold-switch");
const thresholdInput = document.getElementById("threshold-input");
const positionSelect = document.getElementById("position-select");

function saveSettings() {
  const enableThreshold = thresholdSwitch.checked;
  const threshold = thresholdInput.value;
  const position = positionSelect.value;

  chrome.storage.local.set({
    enableThreshold,
    threshold,
    position,
  });
}

thresholdSwitch.addEventListener("change", saveSettings);
thresholdInput.addEventListener("change", saveSettings);
positionSelect.addEventListener("change", saveSettings);

document.addEventListener("DOMContentLoaded", () => {
  getLocal((enableThreshold, threshold, position) => {
    document.getElementById("threshold-switch").checked = enableThreshold;
    document.getElementById("threshold-input").value = threshold;
    document.getElementById("position-select").value = position;
  });
});
