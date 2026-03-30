import React from "react";
import { Box, Stack, Typography, Paper } from "@mui/material";

import ToolltipOverflowText from "@src/components/ToolltipOverflowText";

const ToolltipOverflowTextPage = () => {
  return (
    <Stack spacing={3} p={3} sx={{ flex: 1 }}>
      <Paper sx={{ p: 2, width: 200 }} variant="outlined">
        <Typography variant="subtitle2" color="primary" mb={1}>
          1 Line Truncation (Overflowing)
        </Typography>
        <ToolltipOverflowText lines={1}>
          This is a very long text that will definitely truncate and show a
          tooltip when hovered because it exceeds the container width.
        </ToolltipOverflowText>
      </Paper>

      <Paper sx={{ p: 2, width: 200 }} variant="outlined">
        <Typography variant="subtitle2" color="primary" mb={1}>
          3 Line Truncation (Overflowing)
        </Typography>
        <ToolltipOverflowText lines={3}>
          Here is some long text that is allowed to span across multiple lines
          up to 3. If it exceeds 3 lines, it will then show an ellipsis and the
          full text will be available in the tooltip when hovered by the user.
          Let's make it a bit longer to be absolutely sure that it truncates
          properly.
        </ToolltipOverflowText>
      </Paper>

      <Paper sx={{ p: 2, width: 200 }} variant="outlined">
        <Typography variant="subtitle2" color="primary" mb={1}>
          No Overflow
        </Typography>
        <ToolltipOverflowText lines={2}>Short text here.</ToolltipOverflowText>
      </Paper>
    </Stack>
  );
};

export default ToolltipOverflowTextPage;
