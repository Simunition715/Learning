import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "../../../components/primitive/button/button";

export default {
  title: "Components/Primitive/Button",
  component: Button,
  decorators: [(Story) => <div style={{ display: "flex", justifyContent: "center" }}><Story /></div>],
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
