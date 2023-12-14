import React from "react";
import { cvaOptionsToStorybook } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { logo } from "../../../../ui/assets/user-photos/logo/logo";
import { NavLinkCount } from "../../../components/primitive/nav-link-count/nav-link-count";
import { StoryFn } from "@storybook/react";
import { UserProfile, UserProfileCva } from "../../../components";
import { UserProfileProps } from "../../data/domain-panel/user-profile-props";

const tabs = [
  {
    icon: (
      <Icon
        color="#b6b6b6"
        provider={Icons}
        shape={IconShape.PERSON}
        width={14}
      />
    ),
    text: "Experiences",
    count: <NavLinkCount size={10} count={10} />,
  },
  {
    icon: (
      <Icon
        color="#b6b6b6"
        provider={Icons}
        shape={IconShape.PERSON}
        width={14}
      />
    ),
    text: "Users",
    count: <NavLinkCount size={10} count={17} />,
  },
  {
    icon: (
      <Icon
        color="#b6b6b6"
        provider={Icons}
        shape={IconShape.SETTINGS}
        width={14}
      />
    ),
    text: "Settings",
  },
];

export default {
  title: "Cataboom/DomainPanel/UserProfile",
  component: UserProfile,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(UserProfileCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <UserProfile {...args}>{children}</UserProfile>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = {
  ...UserProfileProps(),
  logo: logo,
  buttons: tabs,
};
