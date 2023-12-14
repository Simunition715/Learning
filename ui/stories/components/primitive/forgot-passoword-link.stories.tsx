import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  ForgotPassowordLink,
  ForgotPassowordLinkCva,
} from "../../../components";
import { ForgotPassowordLinkProps } from "../../data/primitive/forgot-passoword-link-props";

export default {
  title: "Cataboom/Primitive/ForgotPassowordLink",
  component: ForgotPassowordLink,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(ForgotPassowordLinkCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <ForgotPassowordLink {...args}>{children}</ForgotPassowordLink>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = ForgotPassowordLinkProps();
