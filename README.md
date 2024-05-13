Chrome Extension using [Nx workspace](https://nx.dev/getting-started/intro) and Angular.

## 📖 Table of Contents

- [Prerequisites](#🎯-Prerequisites)
- [Getting Started](#🚀-Getting-Started)
- [Project Structure](#🏗-Project-Structure)
- [Commands](#🕹-Commands)
- [Release](#📦-Release)
- [License](#📜-License)

## 🎯 Prerequisites

- [Node.js](https://nodejs.org) (>= 16 required)
- npm package manager (>= 8 required)
- [Chrome](https://www.google.com/chrome)

## 🚀 Getting Started

1. Install dependencies

```shell
npm i
```

2. Run development live reload

```shell
npm run start:dev
```

3. Open Chrome browser
4. Go to this url: `chrome://extensions`
5. Click on `"Developer mode"`
6. Click on `"Load unpacked"`
7. Choose the `extension` directory from this root directory

> ℹ️ More info about developing Chrome extension can be found [here](https://developer.chrome.com/docs/extensions/mv3)

## 🏗 Project Structure

We have 3 applications:

1. Popup (`apps/popup`) - used for the upper popup
2. Options (`apps/options`) - used for the options page
3. DevTools Panel (`apps/devtools-panel`) - used for the devtools panel

In every Chrome extension we have background script that communicate with the content scripts, which can be found in `apps/scripts/background/src/main.ts`.

We also can inject content script which can be found in `apps/scripts/content/src/main.ts`.

All the applications already have the Chrome types so can just use `chrome` and the editor will recognize it.

## 🕹 Commands

Start with development configuration

```shell
npm run start:dev
```

Start with production configuration.

```shell
npm run start:prod
```

Build with development configuration.

```shell
npm run build:dev
```

Build with production configuration.

```shell
npm run build:prod
```

## 📦 Release

- Run `npm run build:prod`
- Create zip file from the extension directory
- Upload the zip to the Chrome developer dashboard

## 📜 License

[MIT](LICENSE)
# chrome-extension-starter
