import "@mui/material/IconButton";

declare module "@mui/material/IconButton" {
  interface IconButtonOwnProps {
    variant?: "dashed" | "shadow" | "light" | "contained" | "outlined";
    shape?: "rounded" | "square";
  }
}
