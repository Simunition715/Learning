import React from "react";
import { StoryFn } from "@storybook/react";

import { Breadcrumbs } from "../../../components/primitive/breadcrumbs/breadcrumbs";
import {
  ChangePassword,
  EditUserPanel,
  NavBar,
  NavLayout,
  Profile,
  ProfileCva,
} from "../../../components";
import { cvaOptionsToStorybook } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { InformationPanel } from "../../../components/primitive/information-panel/information-panel";
import { logo } from "../../../assets/user-photos/logo/logo";
import { NavLinkCount } from "../../../components/primitive/nav-link-count/nav-link-count";
import { ProfileProps } from "../../data/layout/profile-props";

export default {
  title: "Cataboom/Layout/Profile",
  component: Profile,
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
    label: "All Users",
    user: "Brooklyn Simmons",
    title: "Profile",
    description:
      "This information will be used to contact you, log your activity in the system, and let us look at your beautiful face whenever we want.",
  },
  argTypes: {
    ...cvaOptionsToStorybook(ProfileCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = () => (args: any) => (
  <Profile>
    <NavLayout logo={logo} {...args}>
      <NavBar buttons={args.buttons} {...args} />
      <Breadcrumbs {...args} />
    </NavLayout>
    <InformationPanel {...args} />
    <EditUserPanel {...args} />
    <ChangePassword />
  </Profile>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = ProfileProps();
