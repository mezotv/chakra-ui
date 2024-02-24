import { menuAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from "../../../components/src/styled-system"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $bg = cssVar("menu-bg")
const $shadow = cssVar("menu-shadow")

const baseStyleContent = defineStyle({
  outline: 0,
  [$bg.variable]: "#fff",
  [$shadow.variable]: "shadows.sm",
  _dark: {
    [$bg.variable]: "colors.gray.700",
    [$shadow.variable]: "shadows.dark-lg",
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: "dropdown",
  borderRadius: "md",
  borderWidth: "1px",
  bg: $bg.reference,
  boxShadow: $shadow.reference,
})

const baseStyleItem = defineStyle({
  textDecoration: "none",
  color: "inherit",
  userSelect: "none",
  display: "flex",
  width: "100%",
  alignItems: "center",
  textAlign: "start",
  flex: "0 0 auto",
  outline: 0,
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [$bg.variable]: "colors.gray.100",
    _dark: {
      [$bg.variable]: "colors.whiteAlpha.100",
    },
  },
  _active: {
    [$bg.variable]: "colors.gray.200",
    _dark: {
      [$bg.variable]: "colors.whiteAlpha.200",
    },
  },
  _expanded: {
    [$bg.variable]: "colors.gray.100",
    _dark: {
      [$bg.variable]: "colors.whiteAlpha.100",
    },
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  bg: $bg.reference,
})

const baseStyleGroupTitle = defineStyle({
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm",
})

const baseStyleIcon = defineStyle({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
})

const baseStyleCommand = defineStyle({
  opacity: 0.6,
})

const baseStyleDivider = defineStyle({
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6,
})

const baseStyleTrigger = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal",
  display: "inline-flex",
  appearance: "none",
  alignItems: "center",
  outline: 0,
})

const baseStyle = definePartsStyle({
  trigger: baseStyleTrigger,
  content: baseStyleContent,
  item: baseStyleItem,
  groupTitle: baseStyleGroupTitle,
  icon: baseStyleIcon,
  command: baseStyleCommand,
  divider: baseStyleDivider,
})

export const menuTheme = defineMultiStyleConfig({
  baseStyle,
})
