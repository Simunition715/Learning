import React from "react";
import { cvaOptionsToStorybook } from "../../../../util/cva";
import { Logo, LogoCva } from "../../../components/primitive/logo/logo";
import { logo } from "../../../../ui/assets/user-photos/logo/logo";
import { StoryFn } from "@storybook/react";

export default {
  title: "Cataboom/Primitive/Logo",
  component: Logo,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(LogoCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
    size: {
      options: Object.keys(LogoCva.size),
      control: { type: "radio", inline: true },
      defaultValue: "small",
    },
  },
};

const Template = (children?: any) => (args: any) => (
  <Logo {...args}>{children}</Logo>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = {
  size: "small",
  base64Image: logo as string,
};
