import * as React from "react";
import { forwardRef, useState } from "react";

import {
  Box,
  OutlinedInput,
  Stack,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";

import useLongPress from "./useLongPress";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface NumberInputProps {
  value: number;
  onChange: (nVal: number) => void;
  min?: number;
  max?: number;
  endAdornment?: string | React.ReactNode;
  sx?: SxProps;
}

const NumberInput: React.ForwardRefRenderFunction<
  React.ForwardedRef<HTMLDivElement>,
  NumberInputProps
> = (props, ref) => {
  const {
    value,
    onChange,
    min = 0,
    max = 999999999999999,
    endAdornment,
    sx,
  } = props;
  // exceed default max will make number error (Javascript will introduce rounding errors due to limitations in floating-point precision.)
  const theme = useTheme();

  const pressIntervalRef = React.useRef<{
    interval: ReturnType<typeof setInterval> | null;
    value: number;
  }>({
    interval: null,
    value: 0,
  });

  const [number, setNumber] = useState<number>(value);

  React.useEffect(() => {
    if (value && typeof value === "number") {
      setNumber(value);
    } else {
      setNumber(0);
    }
  }, [value]);

  const handleOnChange = (nVal: number) => {
    onChange(nVal);
    setNumber(nVal);
  };

  const increase = (callback?: (nVal: number) => void) => {
    setNumber((prev) => {
      const nVal: any = Number(prev);
      console.log("🚀 ~ nVal:", nVal);

      if ((nVal && !isNaN(nVal)) || nVal === 0) {
        if (max && nVal < max) {
          pressIntervalRef.current.value = nVal + 1;
          callback && callback(nVal + 1);
          return nVal + 1;
        } else {
          pressIntervalRef.current.value = max;
          callback && callback(max);
          return max;
        }
      } else {
        pressIntervalRef.current.value = 1;
        callback && callback(1);
        return 1;
      }
    });
  };

  const decrease = (callback?: (nVal: number) => void) => {
    setNumber((prev) => {
      const nVal: any = Number(prev);

      if ((nVal && !isNaN(nVal)) || (nVal === 0 && min < nVal)) {
        pressIntervalRef.current.value = nVal - 1;
        callback && callback(nVal - 1);
        return nVal - 1;
      } else {
        pressIntervalRef.current.value = min;
        callback && callback(min);
        return min;
      }
    });
  };

  const increaseLongPressEvent = useLongPress({
    onClear: () => {
      if (pressIntervalRef.current?.interval) {
        clearInterval(pressIntervalRef.current?.interval);
        handleOnChange(pressIntervalRef.current?.value);
        pressIntervalRef.current.interval = null;
      }
    },
    onClick: () => increase((nVal) => onChange(nVal)),
    onLongPress: () => {
      increase();
      pressIntervalRef.current.interval = setInterval(increase, 50);
    },
  });

  const decreaseLongPressEvent = useLongPress({
    onClear: () => {
      if (pressIntervalRef.current?.interval) {
        clearInterval(pressIntervalRef.current?.interval);
        handleOnChange(pressIntervalRef.current?.value);
        pressIntervalRef.current.interval = null;
      }
    },
    onClick: () => decrease((nVal) => onChange(nVal)),
    onLongPress: () => {
      decrease();
      pressIntervalRef.current.interval = setInterval(decrease, 50);
    },
  });

  return (
    <OutlinedInput
      value={number}
      onChange={(e) => {
        const nVal: any = Number(e?.target?.value);
        if ((nVal && !isNaN(nVal)) || nVal === 0) {
          if (min > nVal) {
            handleOnChange(min);
          } else if (max && nVal > max) {
            // handleOnChange(max);
          } else {
            handleOnChange(nVal);
          }
        }
      }}
      endAdornment={
        <Stack direction="row" alignItems="center" spacing={1}>
          {endAdornment}
          <Stack>
            <Box
              {...increaseLongPressEvent}
              component="button"
              type="button"
              sx={{
                width: 16,
                height: 16,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                background: theme.palette.background.softGrey,
                transition: "border-color,background 0.15s ease-in-out",
                display: "flex",
                border: theme.border.light,
                borderBottom: "none",
                cursor: "pointer",
                p: 0,
                "&:hover": {
                  color: "#fff",
                  background: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              <ExpandLess sx={{ fontSize: 12, margin: "auto", flexShrink: 0 }} />
            </Box>
            <Box
              {...decreaseLongPressEvent}
              component="button"
              type="button"
              sx={{
                width: 16,
                height: 16,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                background: theme.palette.background.softGrey,
                transition: "border-color,background 0.15s ease-in-out",
                display: "flex",
                border: theme.border.light,
                cursor: "pointer",
                p: 0,
                "&:hover": {
                  color: "#fff",
                  background: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              <ExpandMore
                sx={{ fontSize: 12, margin: "auto", flexShrink: 0 }}
              />
            </Box>
          </Stack>
        </Stack>
      }
      ref={ref}
      sx={{ ...sx, pr: 1.25 }}
    />
  );
};

export default forwardRef(NumberInput);
