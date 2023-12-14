import Button from "../../../components/primitive/button/button";
import React from "react";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Primitive/Button",
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args}>Sign In</Button>;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
};
