function getLocal(callback) {
  chrome.storage.local.get(
    ["enableThreshold", "threshold", "position"],
    (result) => {
      if (chrome.runtime.lastError) {
        console.error(
          "Error accessing chrome.storage:",
          chrome.runtime.lastError
        );
        return;
      }
      const enableThreshold = result.enableThreshold || false;
      const threshold = result.threshold || 0;
      const position = result.position || "top";
      callback(enableThreshold, threshold, position);
    }
  );
}
