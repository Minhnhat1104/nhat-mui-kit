import CircularProgressWithLabel from "@src/components/CircularProgressWithLabel";
import { FC, useState, useEffect } from "react";
import { Box, Typography, Slider, Stack } from "@mui/material";

const CircularProgressWithLabelPage: FC = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10,
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={4} sx={{ p: 3, flex: 1 }}>
      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}
        >
          Automatic Progress
        </Typography>
        <CircularProgressWithLabel value={progress} />
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}
        >
          Manual Control
        </Typography>
        <Stack spacing={2} direction="row" alignItems="center" sx={{ mb: 1 }}>
          <Slider
            value={progress}
            onChange={(_, newValue) => setProgress(newValue as number)}
            aria-labelledby="input-slider"
            sx={{ width: 300 }}
          />
          <Typography>{Math.round(progress)}%</Typography>
        </Stack>
        <CircularProgressWithLabel value={progress} />
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}
        >
          Indeterminate Variant
        </Typography>
        <CircularProgressWithLabel value={progress} variant="indeterminate" />
      </Box>
    </Stack>
  );
};

export default CircularProgressWithLabelPage;
