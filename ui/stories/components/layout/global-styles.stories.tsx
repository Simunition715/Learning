import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  GlobalStyles,
  GlobalStylesCva,
  NavBar,
  SettingsInformation,
} from "../../../components";
import { GlobalStylesProps } from "../../data/layout/global-styles-props";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { logo } from "../../../assets/user-photos/logo/logo";
import { NavLinkCount } from "../../../components/primitive/nav-link-count/nav-link-count";
import { SideNavBar } from "../../../components";

export default {
  title: "Cataboom/Layout/GlobalStyles",
  component: GlobalStyles,
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
    sideButtons: [
      {
        icon: <Icon provider={Icons} shape={IconShape.PALETTE} width={14} />,
        text: "global Styles",
      },
      {
        icon: <Icon provider={Icons} shape={IconShape.FOLDER} width={14} />,
        text: "Assets",
      },
      {
        icon: (
          <Icon provider={Icons} shape={IconShape.CREDIT_CARD} width={14} />
        ),
        text: "billing",
      },
    ],
    text: "Global settings set below will be used as the defaults accross all your experiences. You can choose to override these settings while styling a single experience.",
  },
  argTypes: {
    ...cvaOptionsToStorybook(GlobalStylesCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <GlobalStyles {...args}>
    {children}
    <NavBar logo={logo} {...args} />
    <SideNavBar buttons={args.sideButtons} />
    <SettingsInformation {...args}>{args.text}</SettingsInformation>
  </GlobalStyles>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = GlobalStylesProps();
