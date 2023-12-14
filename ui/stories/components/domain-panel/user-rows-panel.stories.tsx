import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import { ListView } from "../../../components/primitive/list-view/list.view";
import { UserRow, UserRowsPanel, UserRowsPanelCva } from "../../../components";
import { UserRowsPanelProps } from "../../data/domain-panel/user-rows-panel-props";

export default {
  title: "Cataboom/DomainPanel/UserRowsPanel",
  component: UserRowsPanel,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(UserRowsPanelCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = () => (args: any) => (
  <UserRowsPanel {...args}>
    <ListView {...args}>
      {(index: number) => <UserRow key={index} {...UserRowsPanelProps()} />}
    </ListView>
  </UserRowsPanel>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = {
  ...UserRowsPanelProps(),
};
