import React from "react";
import { StoryFn } from "@storybook/react";

import Pill from "../../../components/primitive/pill/pill";
import { Button } from "../../../components/primitive/button/button";
import { cvaOptionsToStorybook } from "../../../../util/cva";
import { FormInput } from "../../../../ui/components/primitive/form-input/form-input";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { logo } from "../../../assets/user-photos/logo/logo";
import { NavBar, Users, UsersCva } from "../../../components";
import { NavLinkCount } from "../../../components/primitive/nav-link-count/nav-link-count";
import { UserRowsPanel } from "../../../components";
import { UsersProps } from "../../data/layout/users-props";

export default {
  title: "Cataboom/Layout/Users",
  component: Users,
  args: {
    buttons: [
      {
        icon: <Icon provider={Icons} shape={IconShape.PERSON} width={14} />,
        text: "Users",
        count: <NavLinkCount size={10} count={17} />,
      },
      {
        icon: <Icon provider={Icons} shape={IconShape.PERSON} width={14} />,
        text: "Experiences",
        count: <NavLinkCount size={10} count={10} />,
      },
      {
        icon: <Icon provider={Icons} shape={IconShape.SETTINGS} width={14} />,
        text: "Settings",
      },
    ],
    logo: logo,
    icon: (
      <Icon provider={Icons} shape={IconShape.KEYBOARD_ARROW_LEFT} width={5} />
    ),
  },
  argTypes: {
    ...cvaOptionsToStorybook(UsersCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = () => (args: any) => (
  <Users {...args}>
    <NavBar logo={logo} {...args} />
    <FormInput
      icon={<Icon provider={Icons} shape={IconShape.SEARCH} />}
      label="Quick Search"
      placeholder="Quick Search"
    />
    <Button {...args} children="New User"></Button>
    <UserRowsPanel {...args} />
    <Pill
      children="Guide"
      icon={<Icon width={14} provider={Icons} shape={IconShape.HELP} />}
    />
  </Users>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = UsersProps();
