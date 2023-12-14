import React from "react";
import { StoryFn } from "@storybook/react";

import Pill from "../../../components/primitive/pill/pill";
import { cvaOptionsToStorybook } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { ListView } from "../../../components/primitive/list-view/list.view";
import { logo } from "../../../assets/user-photos/logo/logo";
import { NavBar, Users, UsersCva } from "../../../components";
import { NavLinkCount } from "../../../components/primitive/nav-link-count/nav-link-count";
import { UserRow, UserRowsPanel } from "../../../components";
import { UserRowProps } from "../../data/domain/user-row-props";
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
    <UserRowsPanel {...args} />
    <Pill
      children="Guide"
      icon={<Icon provider={Icons} shape={IconShape.HELP} />}
    />
  </Users>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = UsersProps();
