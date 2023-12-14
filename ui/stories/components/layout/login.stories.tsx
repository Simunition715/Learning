import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import { Login, LoginCva } from "../../../components";
import { LoginProps } from "../../data/layout/login-props";

export default {
  title: "Cataboom/Layout/Login",
  component: Login,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(LoginCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <Login {...args}>
    {children}
  </Login>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = LoginProps();
