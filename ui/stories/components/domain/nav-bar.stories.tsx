import React, { useState } from "react";
import { cvaOptionsToStorybook } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { logo } from "../../../../ui/assets/user-photos/logo/logo";
import { Meta, Story } from "@storybook/react";
import {
  NavBar,
  NavBarCva,
} from "../../../../ui/components/domain/nav-bar/nav-bar";
import { NavBarProps } from "../../data/domain/nav-bar-props";
import { NavLink } from "../../../components/primitive/nav-link/nav-link";
import { NavLinkCount } from "../../../components/primitive/nav-link-count/nav-link-count";

export default {
  title: "Cataboom/Domain/NavBar",
  component: NavBar,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(NavBarCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
} as Meta;

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
    text: "Users",
    count: <NavLinkCount size={10} count={17} />,
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
    text: "Experiences",
    count: <NavLinkCount size={10} count={10} />,
  },
  {
    icon: (
      <Icon
        color="#b6b6b6"
        provider={Icons}
        shape={IconShape.CONTENT_COPY}
        width={14}
      />
    ),
    text: "Data",
    count: <NavLinkCount size={10} count={196} />,
  },
];

const Template: Story<typeof NavBarProps> = (args) => {
  const [activeTabs, setActiveTabs] = useState(
    Array.from({ length: tabs.length }, () => false)
  );

  const handleToggleActive = (index: number) => {
    setActiveTabs((prevActiveTabs) =>
      prevActiveTabs.map((value, i) => (i === index ? !value : value))
    );
  };

  return (
    <NavBar logo={logo} {...args}>
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          icon={tab.icon}
          text={tab.text}
          count={tab.count}
          isActive={activeTabs[index]}
          onToggleActive={() => handleToggleActive(index)}
        />
      ))}
    </NavBar>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  ...NavBarProps(),
  logo: logo,
  buttons: tabs,
};
