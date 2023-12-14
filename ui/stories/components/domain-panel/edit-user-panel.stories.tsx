import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  EditUserPanel,
  EditUserPanelCva,
} from "../../../components/domain-panel/edit-user-panel/edit-user-panel";
import { EditUserPanelProps } from "../../data/domain-panel/edit-user-panel-props";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";

export default {
  title: "Cataboom/DomainPanel/EditUserPanel",
  component: EditUserPanel,
  args: {
    provider: Icons,
    size: 30,
    label: "Email Address",
  },
  argTypes: {
    ...cvaOptionsToStorybook(EditUserPanelCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <EditUserPanel {...args}>{children}</EditUserPanel>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = EditUserPanelProps();
