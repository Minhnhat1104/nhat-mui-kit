# @nhat/mui-kit

A comprehensive collection of shared React components and utilities for Hanbiro applications, built with React, Material UI, and Vite.

## 🚀 Installation

Install the package via npm or yarn:

```bash
npm install @nhat/mui-kit
# or
yarn add @nhat/mui-kit
```

## 📦 Usage

### Initialization & Setup

> [!IMPORTANT]
> You must call `initHanbiroReactSDK` before rendering your application to configure the SDK with your server's base URL. Wrap your root component with `<ThemeCustomization>` for correct styling.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeCustomization } from "@nhat/mui-kit/components";
import { initHanbiroReactSDK } from "@nhat/mui-kit/utils";

// 1. Initialize the SDK with your base URL
initHanbiroReactSDK({ baseUrl: "https://your-server.com/ngw" });

// 2. Render the application
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeCustomization>
      <App />
    </ThemeCustomization>
  </React.StrictMode>,
);
```

### Importing Components

```tsx
import { SplitView, NumberInput } from "@nhat/mui-kit/components";
```

### Importing Utilities

```tsx
import { getBaseUrl, getGroupwareUrl, isDevelopment } from "@nhat/mui-kit/utils";

console.log("API Base URL:", getBaseUrl());
console.log("Groupware URL:", getGroupwareUrl());
```

## 🛠 Features

### Utilities (`@nhat/mui-kit/utils`)

| Export                | Description                                              |
| --------------------- | -------------------------------------------------------- |
| `initHanbiroReactSDK` | Initializes the SDK with your server's `baseUrl`         |
| `isDevelopment`       | Function returning `true` if running in dev environment  |
| `getBaseUrl`          | Returns the base server URL based on current environment |
| `getGroupwareUrl`     | Returns the full Groupware URL for the current host      |

### Components (`@nhat/mui-kit/components`)

| Component                   | Description                                    |
| --------------------------- | ---------------------------------------------- |
| `CircularProgressWithLabel` | Progress indicator with percentage label       |
| `Counter`                   | Simple numeric counter component               |
| `FullscreenBtn`             | Button component to toggle fullscreen mode     |
| `LoadingContainer`          | Full-container loading state                   |
| `NumberInput`               | Numeric input with increment/decrement buttons |
| `OutlinedSelect`            | Select input component with an outlined style  |
| `SelectBox`                 | Custom dropdown selection component            |
| `SplitView`                 | Resizable split-pane layout                    |
| `SwiperModal`               | Modal component with swipe support             |
| `ThemeCustomization`        | Global theme provider for Hanbiro styling      |
| `ToolltipOverflowText`      | Text component with tooltip on overflow        |

## 📋 Requirements

- **React**: `>=18.0.0`
- **React DOM**: `>=18.0.0`
- **Material UI**: `^5.0.0`
- **Emotion**: `^11.0.0`

## 📄 License

MIT © Hanbiro Inc.
