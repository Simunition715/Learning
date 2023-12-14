import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  NavLinkCount,
  NavLinkCountCva,
} from "../../../components/primitive/nav-link-count/nav-link-count";
import { NavLinkCountProps } from "../../data/primitive/nav-link-count-props";

export default {
  title: "Cataboom/Primitive/NavLinkCount",
  component: NavLinkCount,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(NavLinkCountCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <NavLinkCount {...args}>{children}</NavLinkCount>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = {
  ...NavLinkCountProps(),
  count: 17,
};
