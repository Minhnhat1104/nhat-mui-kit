import React, { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Calendar } from "react-feather";

import OutlinedSelect from "@src/components/OutlinedSelect";

const OutlinedSelectPage = () => {
  const [value, setValue] = useState<string>("Option 1");
  const [arrayValue, setArrayValue] = useState<string[]>(["Tag 1", "Tag 2"]);

  return (
    <Stack spacing={4} p={3} sx={{ flex: 1 }}>
      <Box maxWidth={300}>
        <Stack spacing={2}>
          <Typography variant="subtitle2">Default String Value</Typography>
          <OutlinedSelect
            value={value}
            placeholder="Select an option"
            onClick={() => {}}
            onClear={() => setValue("")}
            open={false}
          />

          <Typography variant="subtitle2">Array Value (Chips)</Typography>
          <OutlinedSelect
            value={arrayValue}
            placeholder="Select tags"
            onClick={() => {}}
            onClear={() => setArrayValue([])}
            open={false}
          />

          <Typography variant="subtitle2">With End Icon (Disabled)</Typography>
          <OutlinedSelect
            value={"Filtered Date"}
            placeholder="Select tags"
            onClick={() => {}}
            endIcon={Calendar}
            disabled={true}
          />
        </Stack>
      </Box>
    </Stack>
  );
};

export default OutlinedSelectPage;
