import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  ProfileDropdown,
  ProfileDropdownCva,
} from "../../../components/primitive/profile-dropdown/profile-dropdown";
import { ProfileDropdownProps } from "../../data/primitive/profile-dropdown-props";

export default {
  title: "Cataboom/Primitive/ProfileDropdown",
  component: ProfileDropdown,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(ProfileDropdownCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <ProfileDropdown {...args}>{children}</ProfileDropdown>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = ProfileDropdownProps();
