import React, { lazy } from "react";

import { Navigate, type RouteObject } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

const CircularProgressWithLabelPage = lazy(
  () => import("@playground/pages/CircularProgressWithLabelPage"),
);
const CounterPage = lazy(() => import("@playground/pages/CounterPage"));
const LoadingContainerPage = lazy(
  () => import("@playground/pages/LoadingContainerPage"),
);
const NumberInputPage = lazy(() => import("@playground/pages/NumberInputPage"));
const SplitViewPage = lazy(() => import("@playground/pages/SplitViewPage"));
const SwiperModalPage = lazy(() => import("@playground/pages/SwiperModalPage"));
const FullscreenBtnPage = lazy(
  () => import("@playground/pages/FullscreenBtnPage"),
);
const OutlinedSelectPage = lazy(
  () => import("@playground/pages/OutlinedSelectPage"),
);
const ToolltipOverflowTextPage = lazy(
  () => import("@playground/pages/ToolltipOverflowTextPage"),
);
const ButtonPage = lazy(() => import("@playground/pages/ButtonPage"));

const publicRoutes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/pages/elements",
        children: [
          {
            path: "circular-progress",
            element: <CircularProgressWithLabelPage />,
          },
          {
            path: "counter",
            element: <CounterPage />,
          },
          {
            path: "loading-container",
            element: <LoadingContainerPage />,
          },
          {
            path: "number-input",
            element: <NumberInputPage />,
          },
          {
            path: "split-view",
            element: <SplitViewPage />,
          },
          {
            path: "swiper-modal",
            element: <SwiperModalPage />,
          },
          {
            path: "fullscreen-btn",
            element: <FullscreenBtnPage />,
          },
          {
            path: "outlined-select",
            element: <OutlinedSelectPage />,
          },
          {
            path: "tooltip-overflow-text",
            element: <ToolltipOverflowTextPage />,
          },
          {
            path: "button",
            element: <ButtonPage />,
          },
        ],
      },
    ],
  },
  {
    index: true,
    element: <Navigate to="/pages/elements/split-view" />,
  },
  {
    path: "*",
    element: <Navigate to="/pages/elements/split-view" />,
  },
];

export default publicRoutes;
