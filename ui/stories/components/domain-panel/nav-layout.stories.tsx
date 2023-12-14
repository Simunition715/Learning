import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  Icon,
  Icons,
  IconShape,
} from "../../../../ui/components/primitive/icon";
import { NavLayout, NavLayoutCva } from "../../../components";
import { NavLayoutProps } from "../../data/domain-panel/nav-layout-props";
import { NavLinkCount } from "../../../components/primitive/nav-link-count/nav-link-count";

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
        shape={IconShape.SETTINGS}
        width={14}
      />
    ),
    text: "Settings",
  },
];

export default {
  title: "Cataboom/DomainPanel/NavLayout",
  component: NavLayout,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(NavLayoutCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <NavLayout {...args}>{children}</NavLayout>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = {
  ...NavLayoutProps(),
  buttons: tabs,
};
