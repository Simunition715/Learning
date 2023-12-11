import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import { Breadcrumbs, BreadcrumbsCva } from "../../../components";
import { BreadcrumbsProps } from "../../data/primitive/breadcrumbs-props";

export default {
  title: "Cataboom/Primitive/Breadcrumbs",
  component: Breadcrumbs,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(BreadcrumbsCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <Breadcrumbs {...args}>
    {children}
  </Breadcrumbs>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = BreadcrumbsProps();
