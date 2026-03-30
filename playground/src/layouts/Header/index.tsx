import React, { useState } from "react";

import { SearchOutlined } from "@mui/icons-material";
import { Box, InputAdornment, TextField, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isLogin?: boolean;
}

function Header({ isLogin }: HeaderProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Box
        px={2}
        sx={{
          width: "100%",
          height: 64,
          top: 0,
          borderBottom: theme.border.light,
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for results"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchOutlined fontSize="small" />
              </InputAdornment>
            ),
          }}
          sx={{ mr: "auto", width: 500 }}
        />
      </Box>
    </>
  );
}

export default Header;
