# @minhnhat1104/mui-kit

A comprehensive collection of shared React components and utilities for Hanbiro applications, built with React, Material UI, and Vite.

## 🚀 Installation

Install the package via npm or yarn:

```bash
npm install @minhnhat1104/mui-kit
# or
yarn add @minhnhat1104/mui-kit
```

## 📦 Usage

### Initialization & Setup

> [!IMPORTANT]
> Wrap your root component with `<ThemeCustomization>` for correct styling.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeCustomization } from "@minhnhat1104/mui-kit/components";
// 1. Render the application
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
import { SplitView, NumberInput } from "@minhnhat1104/mui-kit/components";
```

### Importing Utilities

```tsx
import { getBaseUrl, getGroupwareUrl, isDevelopment } from "@minhnhat1104/mui-kit/utils";

console.log("API Base URL:", getBaseUrl());
console.log("Groupware URL:", getGroupwareUrl());
```

## 🛠 Features

### Utilities (`@minhnhat1104/mui-kit/utils`)

| Export                | Description                                              |
| --------------------- | -------------------------------------------------------- |
| `isDevelopment`       | Function returning `true` if running in dev environment  |
| `getBaseUrl`          | Returns the base server URL based on current environment |
| `getGroupwareUrl`     | Returns the full Groupware URL for the current host      |

### Components (`@minhnhat1104/mui-kit/components`)

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
