import NumberInput from "@src/components/NumberInput";
import { FC, useState } from "react";
import { Typography, Stack, Box } from "@mui/material";

const NumberInputPage: FC = () => {
  const [val1, setVal1] = useState(10);
  const [val2, setVal2] = useState(5);
  const [val3, setVal3] = useState(50);

  return (
    <Stack spacing={4} sx={{ p: 3, flex: 1 }}>
      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}
        >
          Basic Usage
        </Typography>
        <NumberInput value={val1} onChange={setVal1} />
        <Typography sx={{ mt: 1 }}>Value: {val1}</Typography>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}
        >
          Min (0) and Max (100) Constraints
        </Typography>
        <NumberInput value={val2} onChange={setVal2} min={0} max={100} />
        <Typography sx={{ mt: 1 }}>Value: {val2}</Typography>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}
        >
          With End Adornment
        </Typography>
        <NumberInput
          value={val3}
          onChange={setVal3}
          endAdornment="%"
          sx={{ width: 200 }}
        />
        <Typography sx={{ mt: 1 }}>Value: {val3}%</Typography>
      </Box>
    </Stack>
  );
};

export default NumberInputPage;
