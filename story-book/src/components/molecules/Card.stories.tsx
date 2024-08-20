import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";
import Button from "../atoms/Button";

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageFocused: Story = {
  args: {
    focus: "Image",
    imageLocation: "End",
    children: <Button scheme="Primary" shape="Pill" label="Review" />,
  },
};
export const HeadingFocused: Story = {
  args: {
    ...ImageFocused.args,
    focus: "Heading",
    imageLocation: "Start",
  },
};
export const TextFocused: Story = {
  args: {
    ...ImageFocused.args,
    focus: "Text",
    imageLocation: "Start",
  },
};
