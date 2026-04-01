import { FC } from "react";
import { Typography, Stack, Box, Button, IconButton } from "@mui/material";
import { Add, Delete, Edit, Send } from "@mui/icons-material";

const ButtonPage: FC = () => {
  return (
    <Stack spacing={4} sx={{ p: 3, flex: 1 }}>
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Button & IconButton Demo
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Demonstrating buttons with the new Atlassian-style Material UI theme
          colors.
        </Typography>
      </Box>

      {/* Button Variants */}
      <Box>
        <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 600, mb: 2 }}>
          Variants
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
        </Stack>
      </Box>

      {/* Button Colors */}
      <Box>
        <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 600, mb: 2 }}>
          Colors (Contained)
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 600, mb: 2 }}>
          Colors (Outlined)
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
        </Stack>
      </Box>

      {/* Button Sizes */}
      <Box>
        <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 600, mb: 2 }}>
          Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>
      </Box>

      {/* Buttons with Icons */}
      <Box>
        <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 600, mb: 2 }}>
          Buttons with Icons
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" startIcon={<Add />}>
            Add Item
          </Button>
          <Button variant="outlined" color="error" endIcon={<Delete />}>
            Delete
          </Button>
          <Button variant="contained" color="success" endIcon={<Send />}>
            Send
          </Button>
        </Stack>
      </Box>

      {/* Icon Buttons */}
      <Box>
        <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 600, mb: 2 }}>
          Icon Buttons
        </Typography>
        <Stack direction="row" spacing={2}>
          <IconButton color="primary">
            <Add />
          </IconButton>
          <IconButton color="secondary">
            <Edit />
          </IconButton>
          <IconButton color="error">
            <Delete />
          </IconButton>
          <IconButton color="success">
            <Send />
          </IconButton>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 600, mb: 2 }}>
          Icon Buttons size
        </Typography>
        <Stack direction="row" spacing={2}>
          <IconButton
            size="small"
            color="primary"
            variant="contained"
            sx={{ fontSize: 16 }}
          >
            <Add />
          </IconButton>
          <IconButton
            size="medium"
            color="primary"
            variant="contained"
            sx={{ fontSize: 16 }}
          >
            <Add />
          </IconButton>
          <IconButton
            size="large"
            color="primary"
            variant="contained"
            sx={{ fontSize: 16 }}
          >
            <Add />
          </IconButton>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 600, mb: 2 }}>
          Icon Buttons variant
        </Typography>
        <Stack direction="row" spacing={2}>
          {["contained", "light", "dashed", "outlined", "shadow"]?.map(
            (_variant: any) => {
              return (
                <IconButton
                  size="small"
                  color="primary"
                  variant={_variant}
                  sx={{ fontSize: 16 }}
                >
                  <Add />
                </IconButton>
              );
            },
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

export default ButtonPage;
