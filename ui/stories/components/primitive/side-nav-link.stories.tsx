import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  SideNavLink,
  SideNavLinkCva,
} from "../../../components/primitive/side-nav-link/side-nav-link";
import { SideNavLinkProps } from "../../data/primitive/side-nav-link-props";

export default {
  title: "Cataboom/Primitive/SideNavLink",
  component: SideNavLink,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(SideNavLinkCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <SideNavLink {...args}>{children}</SideNavLink>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = SideNavLinkProps().global();
