'use strict';

chrome.devtools.panels.create(
  'ObservePoint',
  'images/icon128.png',
  'pages/devtools-panel/index.html',
  (_panel) => {
    // code invoked on panel creation
  }
);
