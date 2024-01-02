import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import {
  SocialPanel,
  SocialPanelCva,
} from "../../../components/primitive/social-panel/social-panel";
import { SocialPanelProps } from "../../data/primitive/social-panel-props";

export default {
  title: "Cataboom/Primitive/SocialPanel",
  component: SocialPanel,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(SocialPanelCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <SocialPanel {...args}>{children}</SocialPanel>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = {
  ...SocialPanelProps(),
  name: "John Smith",
  refresh: "Refresh",
  share: "Share",
};
