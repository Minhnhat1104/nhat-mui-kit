import {
  AppsOutlined,
  Home,
  HomeOutlined,
  InsertDriveFileOutlined,
  LayersOutlined,
  StorageOutlined,
  SvgIconComponent,
} from "@mui/icons-material";

interface NavLeaf {
  label: string;
  id: string;
  type: "leaf";
  url: string;
}
interface NavCollapse {
  label: string;
  id: string;
  type: "collapse";
  icon?: SvgIconComponent;
  children: (NavCollapse | NavLeaf)[];
}
interface NavGroup {
  label: string;
  id: string;
  type: "group";
  children: (NavCollapse | NavLeaf)[];
}

export type NavItem = NavLeaf | NavCollapse | NavGroup;

export const sidebarItems: NavItem[] = [
  {
    label: "Pages",
    id: "pages-group",
    type: "group",
    children: [
      {
        label: "Elements",
        id: "elements",
        icon: StorageOutlined,
        type: "collapse",
        children: [
          {
            label: "Circular Progress",
            id: "circular-progress",
            type: "leaf",
            url: "/pages/elements/circular-progress",
          },
          {
            label: "Counter",
            id: "counter",
            type: "leaf",
            url: "/pages/elements/counter",
          },
          {
            label: "Loading Container",
            id: "loading-container",
            type: "leaf",
            url: "/pages/elements/loading-container",
          },
          {
            label: "Number Input",
            id: "number-input",
            type: "leaf",
            url: "/pages/elements/number-input",
          },
          {
            label: "Split View",
            id: "split-view",
            type: "leaf",
            url: "/pages/elements/split-view",
          },
          {
            label: "Swiper Modal",
            id: "swiper-modal",
            type: "leaf",
            url: "/pages/elements/swiper-modal",
          },
          {
            label: "Fullscreen Btn",
            id: "fullscreen-btn",
            type: "leaf",
            url: "/pages/elements/fullscreen-btn",
          },
          {
            label: "Outlined Select",
            id: "outlined-select",
            type: "leaf",
            url: "/pages/elements/outlined-select",
          },
          {
            label: "Tooltip Overflow Text",
            id: "tooltip-overflow-text",
            type: "leaf",
            url: "/pages/elements/tooltip-overflow-text",
          },
          {
            label: "Button",
            id: "button",
            type: "leaf",
            url: "/pages/elements/button",
          },
        ],
      },
    ],
  },
];

export function isNavLeaf(item: NavItem): item is NavLeaf {
  return item.type === "leaf";
}

export function isNavCollapse(item: NavItem): item is NavCollapse {
  return item.type === "collapse";
}

export function isNavGroup(item: NavItem): item is NavGroup {
  return item.type === "group";
}
