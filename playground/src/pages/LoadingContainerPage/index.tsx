import LoadingContainer from "@src/components/LoadingContainer";
import { FC } from "react";
import { Typography, Stack, Box, Paper } from "@mui/material";

const LoadingContainerPage: FC = () => {
  return (
    <Stack spacing={4} sx={{ p: 3, flex: 1 }}>
      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}
        >
          Default (Semi-height)
        </Typography>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <LoadingContainer label="Loading data..." />
        </Paper>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}
        >
          Full Height in Container
        </Typography>
        <Paper variant="outlined" sx={{ p: 2, height: 200, display: "flex" }}>
          <LoadingContainer
            fullHeight
            label="Fetching resources..."
            size="small"
          />
        </Paper>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}
        >
          Small Size without Label
        </Typography>
        <Paper
          variant="outlined"
          sx={{ p: 2, width: 100, height: 100, display: "flex" }}
        >
          <LoadingContainer fullHeight size="small" />
        </Paper>
      </Box>
    </Stack>
  );
};

export default LoadingContainerPage;
