// Official Chrome pattern: icon click opens the docked side panel.
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error('[Streamer Arsonist] sidePanel:', error));
