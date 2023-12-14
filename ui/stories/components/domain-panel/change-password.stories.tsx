import React from "react";
import { ChangePassword, ChangePasswordCva } from "../../../components";
import { ChangePasswordProps } from "../../data/domain-panel/change-password-props";
import { cvaOptionsToStorybook } from "../../../../util/cva";
import { FormInput } from "../../../components/primitive/form-input/form-input";
import { InformationPanel } from "../../../components/primitive/information-panel/information-panel";
import { StoryFn } from "@storybook/react";

export default {
  title: "Cataboom/DomainPanel/ChangePassword",
  component: ChangePassword,
  args: {
    title: "Change Password",
    description:
      "Please enter your current password, then enter a new password for your account.",
  },
  argTypes: {
    ...cvaOptionsToStorybook(ChangePasswordCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = () => (args: any) => (
  <ChangePassword {...args}>
    <InformationPanel {...args} />
    <FormInput {...args} />
    <FormInput {...args} />
  </ChangePassword>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = ChangePasswordProps();
