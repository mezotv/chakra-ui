import { defineRecipe } from "../../styled-system"

export const buttonRecipe = defineRecipe({
  base: {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    outline: "0",
    lineHeight: "1.2",
    isolation: "isolate",
    fontWeight: "medium",
    colorPalette: "gray",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "colorPalette.500",
      outlineOffset: "2px",
    },
    _disabled: {
      opacity: 0.6,
      cursor: "not-allowed",
    },
    "& svg": {
      fontSize: "1.25em",
    },
  },
  variants: {
    size: {
      lg: {
        gap: "3",
        h: "12",
        minW: "12",
        borderRadius: "lg",
        fontSize: "md",
        px: "6",
      },
      md: {
        gap: "2",
        h: "10",
        minW: "10",
        borderRadius: "md",
        fontSize: "sm",
        px: "4",
      },
      sm: {
        gap: "2",
        h: "8",
        minW: "8",
        fontSize: "sm",
        borderRadius: "sm",
        px: "3",
      },
      xs: {
        gap: "1",
        h: "6",
        minW: "6",
        fontSize: "xs",
        borderRadius: "xs",
        px: "2",
      },
    },
    variant: {
      solid: {
        bg: "colorPalette.600",
        color: "white",
        _hover: {
          bg: "colorPalette.700",
        },
        _active: {
          bg: "colorPalette.800",
        },
      },
      subtle: {
        bg: {
          base: "colorPalette.100",
          _dark: "colorPalette.200/20",
        },
        color: { base: "colorPalette.700", _dark: "colorPalette.200" },
        _hover: {
          bg: {
            base: "colorPalette.200",
            _dark: "colorPalette.200/28",
          },
        },
        _active: {
          bg: {
            base: "colorPalette.300",
            _dark: "colorPalette.200/30",
          },
        },
      },
      outline: {
        bg: "bg",
        borderWidth: "1px",
        borderColor: { base: "colorPalette.200", _dark: "colorPalette.200/10" },
        color: { base: "colorPalette.700", _dark: "colorPalette.200" },
        _hover: {
          bg: { base: "colorPalette.50", _dark: "colorPalette.200/20" },
        },
        _active: {
          bg: { base: "colorPalette.100", _dark: "colorPalette.200/40" },
          borderColor: {
            base: "colorPalette.300",
            _dark: "colorPalette.300/10",
          },
        },
      },
      ghost: {
        color: { base: "colorPalette.700", _dark: "colorPalette.200" },
        _hover: {
          bg: { base: "colorPalette.100", _dark: "colorPalette.200/20" },
        },
        _active: {
          bg: { base: "colorPalette.200", _dark: "colorPalette.200/30" },
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      colorPalette: "gray",
      css: {
        bg: {
          base: "colorPalette.800",
          _dark: "colorPalette.200",
        },
        color: { base: "white", _dark: "gray.800" },
        _hover: {
          bg: {
            base: "colorPalette.700",
            _dark: "colorPalette.300",
          },
        },
        _active: {
          bg: {
            base: "colorPalette.600",
            _dark: "colorPalette.400",
          },
        },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "outline",
    colorPalette: "gray",
  },
})
