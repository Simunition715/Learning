import Input from "../../../components/primitive/input/input";
import React from "react";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { InputProps } from "../../../components/primitive/input/input";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Primitive/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text here",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: "Search",
  icon: <Icon provider={Icons} shape={IconShape.HELP} />,
};
