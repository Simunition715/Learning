import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import { UserRow, UserRowCva } from "../../../components";
import { UserRowProps } from "../../data/domain/user-row-props";

export default {
  title: "Cataboom/Domain/UserRow",
  component: UserRow,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(UserRowCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <UserRow {...args}>{children}</UserRow>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = UserRowProps();
