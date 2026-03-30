import React from 'react';

import { CircularProgress, Typography, Box, SxProps, useTheme } from '@mui/material';

interface CircularProgressWithLabelProps {
  sx?: SxProps;
  variant?: 'determinate' | 'indeterminate';
  value: number;
}

const CircularProgressWithLabel = (props: CircularProgressWithLabelProps) => {
  const { sx, value, variant = 'determinate' } = props;
  const theme = useTheme();
  return (
    <Box sx={{ position: 'relative', width: 'fit-content', ...sx, height: 60 }}>
      <CircularProgress
        variant="determinate"
        size={60}
        sx={{
          color: theme.palette.background.softGrey,
          ...theme.applyStyles('dark', {
            color: theme.palette.background.softGrey
          })
        }}
        value={100}
      />
      <CircularProgress
        size={60}
        variant={variant}
        sx={{
          position: 'absolute',
          left: 0
        }}
        value={value}
      />
      <Typography
        variant="caption"
        component="div"
        sx={{ color: 'text.secondary', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >{`${Math.round(value)}%`}</Typography>
    </Box>
  );
};

export default CircularProgressWithLabel;
