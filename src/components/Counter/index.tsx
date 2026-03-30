import React from 'react';

import { Chip, useTheme } from '@mui/material';

interface CounterProps {
  label: string | number;
  color?: 'primary' | 'grey';
  size?: 'small' | 'medium' | 'large';
  fontSize?: number;
}

export const counterClass = 'groupware-table-counter';

const Counter = (props: CounterProps) => {
  const { label, color = 'primary', size = 'small', fontSize } = props;
  const theme = useTheme();
  return (
    <Chip
      className={counterClass}
      label={label}
      size={size}
      sx={{
        p: 0,
        borderRadius: 99,
        height: 'unset',
        flexShrink: 0,
        transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out',
        backgroundColor: color === 'grey' ? theme.palette.background.softGrey : 'primary.lighter',
        color: color === 'grey' ? theme.palette.grey.main : 'primary.main',
        '& .MuiChip-label': { py: 0.25, px: 0.875, fontSize: fontSize }
      }}
    />
  );
};

export default Counter;
