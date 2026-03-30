import SplitView from "@src/components/SplitView";
import { FC, useState } from "react";
import { Typography, Box, Paper, Button, Stack } from "@mui/material";

const SplitViewPage: FC = () => {
  const [isSplit, setIsSplit] = useState(true);

  return (
    <Stack spacing={2} sx={{ p: 3, height: "80vh", flex: 1 }}>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Button variant="contained" onClick={() => setIsSplit(!isSplit)}>
          Toggle Split Mode: {isSplit ? "ON" : "OFF"}
        </Button>
      </Stack>

      <Box
        sx={{
          flex: 1,
          border: "1px solid #ccc",
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <SplitView
          isSplitMode={isSplit}
          leftPane={
            <Box sx={{ p: 2, bgcolor: "#f5f5f5", height: "100%" }}>
              <Typography variant="h6">Left Pane (Sidebar Content)</Typography>
              <Typography>This is the left side of the split view.</Typography>
            </Box>
          }
          rightPane={
            <Box sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6">Right Pane (Main Content)</Typography>
              <Typography>
                This is the right side of the split view. You can drag the sash
                to resize if split mode is ON.
              </Typography>
            </Box>
          }
          leftInitSize={300}
        />
      </Box>
    </Stack>
  );
};

export default SplitViewPage;
