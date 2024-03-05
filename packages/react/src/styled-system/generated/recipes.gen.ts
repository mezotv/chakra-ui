import type { SystemRecipeFn, SystemSlotRecipeFn } from "../recipe.types"

export interface BadgeVariantProps {
  colorScheme?: "gray"
  variant?: "solid" | "subtle" | "outline"
}

export interface ButtonVariantProps {
  shape?: "square" | "rounded" | "rounded-start" | "rounded-end" | "pill"
  size?: "lg" | "md" | "sm" | "xs"
  variant?: "solid" | "subtle" | "outline" | "ghost"
}

export interface CodeVariantProps {
  colorScheme?: "gray"
  variant?: "solid" | "subtle" | "outline"
}

export interface ContainerVariantProps {}

export interface CloseButtonVariantProps {
  size?: "lg" | "md" | "sm"
}

export interface DividerVariantProps {
  variant?: "solid" | "dashed"
}

export interface FieldLabelVariantProps {}

export interface HeadingVariantProps {
  size?: "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs"
}

export interface InputVariantProps {
  size?: "lg" | "md" | "sm" | "xs"
  variant?: "outline" | "field" | "flushed"
}

export interface KbdVariantProps {}

export interface LinkVariantProps {}

export interface MarkVariantProps {}

export interface PinInputVariantProps {
  size?: "lg" | "md" | "sm" | "xs"
  variant?: "outline" | "field" | "flushed"
}

export interface SkeletonVariantProps {}

export interface SkipLinkVariantProps {}

export interface SpinnerVariantProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

export interface SwitchVariantProps {
  size?: "sm" | "md" | "lg"
}

export interface TooltipVariantProps {}

export interface TextareaVariantProps {
  size?: "lg" | "md" | "sm" | "xs"
  variant?: "outline" | "field" | "flushed"
}

export interface IconVariantProps {}

export interface SystemRecipes {
  Badge: SystemRecipeFn<BadgeVariantProps>
  Button: SystemRecipeFn<ButtonVariantProps>
  Code: SystemRecipeFn<CodeVariantProps>
  Container: SystemRecipeFn<ContainerVariantProps>
  CloseButton: SystemRecipeFn<CloseButtonVariantProps>
  Divider: SystemRecipeFn<DividerVariantProps>
  FieldLabel: SystemRecipeFn<FieldLabelVariantProps>
  Heading: SystemRecipeFn<HeadingVariantProps>
  Input: SystemRecipeFn<InputVariantProps>
  Kbd: SystemRecipeFn<KbdVariantProps>
  Link: SystemRecipeFn<LinkVariantProps>
  Mark: SystemRecipeFn<MarkVariantProps>
  PinInput: SystemRecipeFn<PinInputVariantProps>
  Skeleton: SystemRecipeFn<SkeletonVariantProps>
  SkipLink: SystemRecipeFn<SkipLinkVariantProps>
  Spinner: SystemRecipeFn<SpinnerVariantProps>
  Switch: SystemRecipeFn<SwitchVariantProps>
  Tooltip: SystemRecipeFn<TooltipVariantProps>
  Textarea: SystemRecipeFn<TextareaVariantProps>
  Icon: SystemRecipeFn<IconVariantProps>
}

// Accordion

export type AccordionSlot = "root" | "item" | "trigger" | "content" | "icon"

export interface AccordionVariantProps {}

// Alert

export type AlertSlot = "title" | "description" | "root" | "icon" | "spinner"

export interface AlertVariantProps {
  status?: "info" | "warning" | "success" | "error"
  variant?: "subtle" | "left-accent" | "top-accent" | "solid"
}

// Avatar

export type AvatarSlot = "root" | "image" | "fallback" | "badge"

export interface AvatarVariantProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  shape?: "square" | "rounded" | "full"
}

// Breadcrumb

export type BreadcrumbSlot = "link" | "item" | "root" | "separator"

export interface BreadcrumbVariantProps {
  current?: boolean
}

// Blockquote

export type BlockquoteSlot = "root" | "content" | "caption"

export interface BlockquoteVariantProps {}

// Card

export type CardSlot = "root" | "header" | "body" | "footer"

export interface CardVariantProps {
  size?: "sm" | "md" | "lg"
  variant?: "elevated" | "outline" | "filled"
}

// Checkbox

export type CheckboxSlot = "control" | "icon" | "root" | "label"

export interface CheckboxVariantProps {
  isChecked?: boolean
  isIndeterminate?: boolean
  size?: "sm" | "md" | "lg"
}

// Dialog

export type DialogSlot =
  | "overlay"
  | "positioner"
  | "content"
  | "header"
  | "closeTrigger"
  | "body"
  | "footer"

export interface DialogVariantProps {
  isCentered?: boolean
  scrollBehavior?: "inside" | "outside"
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "full"
}

// Drawer

export type DrawerSlot =
  | "overlay"
  | "positioner"
  | "content"
  | "header"
  | "closeTrigger"
  | "body"
  | "footer"

export interface DrawerVariantProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full"
  isFullHeight?: boolean
}

// Editable

export type EditableSlot = "root" | "preview" | "input" | "textarea"

export interface EditableVariantProps {}

// Field

export type FieldSlot = "root" | "label" | "requiredIndicator" | "helpText"

export interface FieldVariantProps {}

// FieldError

export type FieldErrorSlot = "text" | "icon"

export interface FieldErrorVariantProps {}

// List

export type ListSlot = "root" | "item" | "icon"

export interface ListVariantProps {}

// Menu

export type MenuSlot =
  | "trigger"
  | "content"
  | "item"
  | "groupTitle"
  | "icon"
  | "command"
  | "divider"

export interface MenuVariantProps {}

// NativeSelect

export type NativeSelectSlot = "root" | "field" | "icon"

export interface NativeSelectVariantProps {
  variant?: "outline" | "field" | "flushed"
  size?: "lg" | "md" | "sm" | "xs"
}

// NumberInput

export type NumberInputSlot = "root" | "field" | "stepperGroup" | "stepper"

export interface NumberInputVariantProps {
  size?: "xs" | "sm" | "md" | "lg"
  variant?: "outline" | "field" | "flushed"
}

// Popover

export type PopoverSlot =
  | "content"
  | "header"
  | "body"
  | "footer"
  | "positioner"
  | "arrow"
  | "closeTrigger"

export interface PopoverVariantProps {}

// Progress

export type ProgressSlot =
  | "root"
  | "label"
  | "filledTrack"
  | "track"
  | "valueText"

export interface ProgressVariantProps {
  isIndeterminate?: boolean
  hasStripe?: boolean
  isAnimated?: boolean
  size?: "xs" | "sm" | "md" | "lg"
}

// Radio

export type RadioSlot = "root" | "control" | "label"

export interface RadioVariantProps {
  isChecked?: boolean
  size?: "sm" | "md" | "lg"
}

// Slider

export type SliderSlot = "root" | "track" | "thumb" | "filledTrack" | "mark"

export interface SliderVariantProps {
  size?: "sm" | "md" | "lg"
  orientation?: "vertical" | "horizontal"
}

// Stat

export type StatSlot = "root" | "label" | "helpText" | "number" | "icon"

export interface StatVariantProps {
  size?: "md"
}

// Stepper

export type StepperSlot =
  | "stepper"
  | "step"
  | "title"
  | "description"
  | "indicator"
  | "separator"
  | "icon"
  | "number"

export interface StepperVariantProps {
  orientation?: "vertical" | "horizontal"
  status?: "active" | "complete" | "incomplete"
  size?: "xs" | "sm" | "md" | "lg"
}

// Table

export type TableSlot =
  | "root"
  | "header"
  | "body"
  | "row"
  | "columnHeader"
  | "cell"
  | "footer"
  | "caption"

export interface TableVariantProps {
  numeric?: boolean
  variant?: "simple" | "stripe"
  size?: "sm" | "md" | "lg"
}

// Tabs

export type TabsSlot =
  | "root"
  | "trigger"
  | "list"
  | "content"
  | "contentGroup"
  | "indicator"

export interface TabsVariantProps {
  orientation?: "vertical" | "horizontal"
  isFitted?: boolean
  align?: "start" | "center" | "end"
  size?: "sm" | "md" | "lg"
  variant?:
    | "line"
    | "enclosed"
    | "enclosed-colored"
    | "soft-rounded"
    | "solid-rounded"
}

// Tag

export type TagSlot = "root" | "label" | "closeTrigger"

export interface TagVariantProps {
  size?: "sm" | "md" | "lg"
  variant?: "subtle" | "solid" | "outline"
}

export interface SystemSlotRecipes {
  Accordion: SystemSlotRecipeFn<AccordionSlot, AccordionVariantProps>
  Alert: SystemSlotRecipeFn<AlertSlot, AlertVariantProps>
  Avatar: SystemSlotRecipeFn<AvatarSlot, AvatarVariantProps>
  Breadcrumb: SystemSlotRecipeFn<BreadcrumbSlot, BreadcrumbVariantProps>
  Blockquote: SystemSlotRecipeFn<BlockquoteSlot, BlockquoteVariantProps>
  Card: SystemSlotRecipeFn<CardSlot, CardVariantProps>
  Checkbox: SystemSlotRecipeFn<CheckboxSlot, CheckboxVariantProps>
  Dialog: SystemSlotRecipeFn<DialogSlot, DialogVariantProps>
  Drawer: SystemSlotRecipeFn<DrawerSlot, DrawerVariantProps>
  Editable: SystemSlotRecipeFn<EditableSlot, EditableVariantProps>
  Field: SystemSlotRecipeFn<FieldSlot, FieldVariantProps>
  FieldError: SystemSlotRecipeFn<FieldErrorSlot, FieldErrorVariantProps>
  List: SystemSlotRecipeFn<ListSlot, ListVariantProps>
  Menu: SystemSlotRecipeFn<MenuSlot, MenuVariantProps>
  NativeSelect: SystemSlotRecipeFn<NativeSelectSlot, NativeSelectVariantProps>
  NumberInput: SystemSlotRecipeFn<NumberInputSlot, NumberInputVariantProps>
  Popover: SystemSlotRecipeFn<PopoverSlot, PopoverVariantProps>
  Progress: SystemSlotRecipeFn<ProgressSlot, ProgressVariantProps>
  Radio: SystemSlotRecipeFn<RadioSlot, RadioVariantProps>
  Slider: SystemSlotRecipeFn<SliderSlot, SliderVariantProps>
  Stat: SystemSlotRecipeFn<StatSlot, StatVariantProps>
  Stepper: SystemSlotRecipeFn<StepperSlot, StepperVariantProps>
  Table: SystemSlotRecipeFn<TableSlot, TableVariantProps>
  Tabs: SystemSlotRecipeFn<TabsSlot, TabsVariantProps>
  Tag: SystemSlotRecipeFn<TagSlot, TagVariantProps>
}

export type SystemRecipeProps<T> = T extends keyof SystemRecipes
  ? SystemRecipes[T]["__type"]
  : T extends keyof SystemSlotRecipes
  ? SystemSlotRecipes[T]["__type"]
  : {}
