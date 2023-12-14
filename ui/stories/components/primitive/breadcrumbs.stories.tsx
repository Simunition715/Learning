import React from "react";
import { StoryFn } from "@storybook/react";

import {
  Breadcrumbs,
  BreadcrumbsCva,
} from "../../../../ui/components/primitive/breadcrumbs/breadcrumbs";
import { BreadcrumbsProps } from "../../data/primitive/breadcrumbs-props";
import { cvaOptionsToStorybook } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";

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
  <Breadcrumbs {...args}>{children}</Breadcrumbs>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = {
  ...BreadcrumbsProps(),
  icon: (
    <Icon provider={Icons} shape={IconShape.KEYBOARD_ARROW_LEFT} width={5} />
  ),
  label: "All Users",
  user: "Brooklyn Simmons",
};
