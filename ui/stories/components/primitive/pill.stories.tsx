import Pill from "../../../components/primitive/pill/pill";
import React from "react";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { Meta, Story } from "@storybook/react";
export default {
  title: "Components/Primitive/Pill",
  component: Pill,
} as Meta;

const Template: Story = (args) => (
  <Pill children={undefined} icon={undefined} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: <Icon provider={Icons} shape={IconShape.HELP} />,
  children: "Pill Text",
};
