import { useEffect, useState } from "react";
import { X } from "react-feather";
import { useTranslation } from "react-i18next";

import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import {
  CircularProgress,
  IconButton,
  MenuItem,
  MenuProps,
  Select,
  SelectChangeEvent,
  SelectVariants,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

interface SelectBoxProps {
  value: any | undefined;
  options: any[];
  onChange: (val: any) => void;
  size?: "small" | "medium" | undefined;
  showIcon?: boolean;
  sx?: SxProps;
  prefixSx?: SxProps;
  disablePortal?: boolean;
  useClear?: boolean;
  placeholder?: string;
  MenuProps?: Partial<MenuProps>;
  fieldLabel?: string;
  fieldValue?: string;
  isLoading?: boolean; // if option is loading from api,
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: SelectVariants;
  closeOnSelect?: boolean; // used in DateFitler
}

const SelectBox = (props: SelectBoxProps) => {
  const {
    value,
    onChange,
    options,
    size,
    sx,
    prefixSx,
    showIcon = false,
    disablePortal = false,
    useClear = false,
    placeholder = "whisper_select",
    fieldLabel = "label",
    fieldValue = "value",
    MenuProps = {},
    isLoading = false,
    disabled = false,
    fullWidth = true,
    variant = "outlined",
    closeOnSelect = false,
  } = props;

  const { t } = useTranslation("common");
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (value) {
      setSelectedValue(value?.[fieldValue]);
    } else {
      setSelectedValue("");
    }
  }, [value]);

  // value change
  const handleValueChange = (newValue: string) => {
    setSelectedValue(newValue);
    // callback
    const foundItem = options.find((v) => v?.[fieldValue] === newValue);
    onChange && onChange(foundItem);
    closeOnSelect && setIsOpen(false);
  };

  const onClearValue = (e: any) => {
    e?.stopPropagation();
    setSelectedValue("");
    onChange && onChange(null);
  };

  return (
    <Select
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      displayEmpty
      inputProps={{ "aria-label": "select" }}
      size={size}
      value={selectedValue}
      open={isOpen}
      onOpen={() => {
        setIsOpen(true);
      }}
      onClose={() => {
        setIsOpen(false);
      }}
      MenuProps={{
        disablePortal: disablePortal, // If you use ClickAwayListener and don't have this option(true), It will run event of onClickAway
        PaperProps: {
          style: {
            maxHeight: "30vh",
          },
        },
        ...MenuProps,
      }}
      sx={{
        "&.MuiInputBase-root": {
          pr: 0.75,
          "& .MuiSelect-select": {
            pr: 2,
          },
        },
        "&.MuiList-root .MuiMenu-list": {
          py: 0,
        },
        ...sx,
        "& .MuiSelect-iconOutlined": {
          display: (useClear && selectedValue) || isLoading ? "none" : "",
        },
        "& .MuiSelect-icon": { display: "none" },
        "&.Mui-focused .MuiIconButton-root": { color: "primary.main" },
      }}
      renderValue={(value: any) => {
        const option = options.find((v) => v?.[fieldValue] === value);
        return !!value || value === 0 ? (
          <Box
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}
          >
            {showIcon &&
              option?.icon &&
              (typeof option?.icon === "function" ||
                typeof option?.icon === "object") && (
                <option.icon {...option?.iconProps} />
              )}

            <Typography
              sx={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {option?.[fieldLabel]}
            </Typography>

            {showIcon &&
              option?.endIcon &&
              (typeof option?.endIcon === "function" ||
                typeof option?.endIcon === "object") && (
                <option.endIcon {...option?.endIconProps} />
              )}
          </Box>
        ) : (
          <Typography
            color="text.secondary"
            variant="h5"
            fontWeight={theme.typography.fontWeightRegular}
          >
            {t(placeholder)}
          </Typography>
        );
      }} // render languageKey on view
      endAdornment={
        isLoading ? (
          <CircularProgress size={18} sx={{ mr: 0.5 }} />
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            onClick={disabled ? undefined : () => setIsOpen((prev) => !prev)}
            sx={{ cursor: disabled ? undefined : "pointer" }}
          >
            {useClear && selectedValue && (
              <IconButton
                size="small"
                sx={{
                  visibility: selectedValue ? "visible" : "hidden",
                  color: theme.palette.grey.main,
                }}
                onClick={onClearValue}
                variant="light"
                color="secondary"
              >
                <X />
              </IconButton>
            )}

            {isOpen ? (
              <ArrowDropUp sx={{ color: theme.palette.grey.main }} />
            ) : (
              <ArrowDropDown sx={{ color: theme.palette.grey.main }} />
            )}
          </Stack>
        )
      }
      onChange={(e: SelectChangeEvent<string>) => {
        const selected = e.target.value;
        handleValueChange(selected);
      }}
    >
      {options
        ?.filter(
          (_option) => _option?.isShow || !_option?.hasOwnProperty("isShow"),
        )
        .map((_option: any, _index: number) => {
          const Icon = _option?.icon;
          const EndIcon = _option?.endIcon;

          return (
            <MenuItem
              disabled={_option?.disabled || false}
              key={_index}
              value={_option?.[fieldValue]}
              sx={{ display: "flex", alignItems: "center" }}
            >
              {showIcon &&
                Icon &&
                (typeof Icon === "function" || typeof Icon === "object") && (
                  <Icon {..._option?.iconProps} />
                )}

              <Typography>{_option?.[fieldLabel]}</Typography>

              {showIcon &&
                EndIcon &&
                (typeof EndIcon === "function" ||
                  typeof EndIcon === "object") && (
                  <EndIcon {..._option?.endIconProps} />
                )}
            </MenuItem>
          );
        })}
    </Select>
  );
};

export default SelectBox;
