import React, { useEffect, useState } from 'react';
import { Maximize, Minimize } from 'react-feather';

import { Box, SxProps, Tooltip, useTheme } from '@mui/material';

interface FullscreenBtnProps {
  fullscreenRef?: React.RefObject<HTMLDivElement>;
  onChange: (nVal: boolean) => void;
  sx?: SxProps;
}

const FullscreenBtn = (props: FullscreenBtnProps) => {
  const { fullscreenRef, sx, onChange } = props;
  const theme = useTheme();

  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) {
        // Element is in fullscreen mode
        setIsFullscreen(true);
        onChange && onChange(true);
      } else {
        // Exited fullscreen mode
        setIsFullscreen(false);
        onChange && onChange(false);
        // Perform actions when exiting fullscreen, e.g., reset state, play/pause media
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <Tooltip title={"Fullscreen"} placement="top">
      <Box
        onClick={(e) => {
          e.stopPropagation();
          if (document?.fullscreenElement) {
            document.exitFullscreen();
          } else {
            fullscreenRef?.current?.requestFullscreen();
          }
        }}
        sx={{
          display: 'flex',
          width: 28,
          height: 28,
          zIndex: 20,
          cursor: 'pointer',
          borderRadius: 1,
          background: theme.palette.background.softGrey,
          transition: 'color 0.15s ease-in-out',

          color: theme.palette.grey.main,
          '&:hover': {
            color: theme.palette.grey.darker
          },
          ...sx
        }}
      >
        {isFullscreen ? (
          <Minimize size={16} style={{ color: 'inherit', margin: 'auto', fontSize: 16 }} />
        ) : (
          <Maximize size={16} style={{ color: 'inherit', margin: 'auto', fontSize: 16 }} />
        )}
      </Box>
    </Tooltip>
  );
};

export default FullscreenBtn;
