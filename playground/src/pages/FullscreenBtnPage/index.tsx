import React, { useRef, useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";

import FullscreenBtn from "@src/components/FullscreenBtn";

const FullscreenBtnPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Stack spacing={3} p={3} sx={{ flex: 1 }}>
      <Paper
        ref={containerRef}
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 200,
          position: "relative",
          bgcolor: isFullscreen ? "background.default" : "background.paper",
        }}
        variant="outlined"
      >
        <Typography mb={2}>This element can enter fullscreen mode.</Typography>

        <Box sx={{ position: "absolute", top: 16, right: 16 }}>
          <FullscreenBtn
            fullscreenRef={containerRef}
            onChange={setIsFullscreen}
          />
        </Box>
      </Paper>
    </Stack>
  );
};

export default FullscreenBtnPage;
