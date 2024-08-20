import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    scheme: "Primary",
    shape: "Pill",
    label: "Button",
  },
};
export const Secondary: Story = {
  args: {
    ...Primary.args,
    scheme: "Secondary",
  },
};
export const Outline: Story = {
  args: {
    ...Primary.args,
    scheme: "Outline",
  },
};
export const Text: Story = {
  args: {
    ...Primary.args,
    scheme: "Text",
  },
};
