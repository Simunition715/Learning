import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import { LoginPanel, LoginPanelCva } from "../../../components";
import { LoginPanelProps } from "../../data/domain-panel/login-panel-props";

export default {
  title: "Cataboom/DomainPanel/LoginPanel",
  component: LoginPanel,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(LoginPanelCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <LoginPanel {...args}>{children}</LoginPanel>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = LoginPanelProps();
