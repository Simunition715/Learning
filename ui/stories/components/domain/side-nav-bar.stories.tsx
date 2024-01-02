import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { SideNavBar, SideNavBarCva } from "../../../components";
import { SideNavBarProps } from "../../data/domain/side-nav-bar-props";
import { SideNavLink } from "../../../components/primitive/side-nav-link/side-nav-link";

export default {
  title: "Cataboom/Domain/SideNavBar",
  component: SideNavBar,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(SideNavBarCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const tabs = [
  {
    icon: (
      <Icon
        color="#b6b6b6"
        provider={Icons}
        shape={IconShape.PALETTE}
        width={14}
      />
    ),
    text: "Global Styling",
  },
  {
    icon: (
      <Icon
        color="#b6b6b6"
        provider={Icons}
        shape={IconShape.FOLDER}
        width={14}
      />
    ),
    text: "Assets",
  },
  {
    icon: (
      <Icon
        color="#b6b6b6"
        provider={Icons}
        shape={IconShape.CREDIT_CARD}
        width={14}
      />
    ),
    text: "Billing",
  },
];

const Template = () => (args: any) => (
  <SideNavBar {...args}>
    {tabs.map((tab, index) => (
      <SideNavLink key={index} text={tab.text} icon={tab.icon} />
    ))}
  </SideNavBar>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = {
  ...SideNavBarProps(),
  buttons: tabs,
};
