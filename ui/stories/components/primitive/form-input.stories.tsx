import React from "react";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  FormInput,
  FormInputCva,
} from "../../../components/primitive/form-input/form-input";
import { FormInputProps } from "../../data/primitive/form-input-props";

export default {
  title: "Cataboom/Primitive/FormInput",
  component: FormInput,
  args: {
    provider: Icons,
    size: 30,
    label: "Email Address",
  },
  argTypes: {
    ...cvaOptionsToStorybook(FormInputCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <FormInput {...args}>{children}</FormInput>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = {
  ...FormInputProps(),
  icon: (
    <Icon
      color={"rgba(0, 0, 0, 0.55)"}
      provider={Icons}
      shape={IconShape.EMAIL}
    />
  ),
  placeholder: "Email Address",
};
