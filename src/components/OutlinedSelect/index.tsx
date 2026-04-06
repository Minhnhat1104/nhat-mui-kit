import React, { forwardRef } from "react";
import { ArrowDropDown, ArrowDropUp, Close } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Chip } from "@mui/material";

interface OutlinedSelectProps {
  open?: boolean;
  value: string | string[]; // array will show Chip
  placeholder: string;
  onClick: () => void;
  onClear?: () => void;
  endIcon?: React.ElementType; // used in Date Fitler
  disabled?: boolean;
  id?: string;
}

const OutlinedSelect = (props: OutlinedSelectProps, ref: any) => {
  const {
    open,
    value,
    placeholder,
    onClick,
    onClear,
    endIcon: EndIcon,
    disabled = false,
    id,
  } = props;
  const theme = useTheme();

  const hasValue =
    (typeof value === "string" && value !== "") ||
    (Array.isArray(value) && value?.length > 0);
  const showArrowIcon = typeof open === "boolean";

  return (
    <Stack
      id={id}
      sx={{
        pl: 1.5,
        pr: 0.5,
        py: 0.5,
        minHeight: 40,
        width: "100%",
        cursor: "pointer",
        transition: "border-color 0.15s ease-in-out",
        background: theme.palette.common.white,
        ...(!disabled && {
          "&:hover": {
            borderColor: theme.palette.text.primary,
          },
        }),
      }}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      ref={ref}
      onClick={disabled ? undefined : onClick}
      border={theme.border.main}
      borderRadius={1}
    >
      {hasValue ? (
        Array.isArray(value) ? (
          <Stack
            direction="row"
            sx={{ minWidth: 0, mt: -1, ml: -1, flexWrap: "wrap" }}
          >
            {value?.map((_item) => (
              <Chip label={_item} key={_item} sx={{ mt: 1, ml: 1 }} />
            ))}
          </Stack>
        ) : (
          <Typography color={disabled ? "text.secondary" : "text.primary"}>
            {value}
          </Typography>
        )
      ) : (
        <Typography color="text.secondary">{placeholder}</Typography>
      )}

      <Stack
        spacing={0.5}
        direction="row"
        alignItems="center"
        sx={{ mr: 0.25 }}
      >
        {onClear && hasValue && (
          <IconButton
            variant="light"
            color="secondary"
            size="small"
            disabled={disabled}
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
          >
            <Close />
          </IconButton>
        )}
        {EndIcon ? (
          <InputAdornment position="end" sx={{ pr: 0.5 }}>
            <EndIcon sx={{ fontSize: 20 }} />
          </InputAdornment>
        ) : (
          showArrowIcon &&
          (open ? (
            <ArrowDropUp
              sx={{
                color: disabled
                  ? theme.palette.text.secondary
                  : theme.palette.grey.main,
              }}
            />
          ) : (
            <ArrowDropDown
              sx={{
                color: disabled
                  ? theme.palette.text.secondary
                  : theme.palette.grey.main,
              }}
            />
          ))
        )}
      </Stack>
    </Stack>
  );
};

export default forwardRef(OutlinedSelect);
