import Counter from "@src/components/Counter";
import { FC } from "react";
import { Typography, Stack, Box } from "@mui/material";

const CounterPage: FC = () => {
  return (
    <Stack spacing={4} sx={{ p: 3, flex: 1 }}>
      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}
        >
          Colors
        </Typography>
        <Stack direction="row" spacing={2}>
          <Counter label={10} color="primary" />
          <Counter label="99+" color="grey" />
        </Stack>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}
        >
          Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Counter label="Small" size="small" />
          <Counter label="Medium" size="medium" />
          <Counter label="Large" size="large" />
        </Stack>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}
        >
          Custom Font Size
        </Typography>
        <Stack direction="row" spacing={2}>
          <Counter label="Custom 10px" fontSize={10} />
          <Counter label="Custom 16px" fontSize={16} />
        </Stack>
      </Box>
    </Stack>
  );
};

export default CounterPage;
