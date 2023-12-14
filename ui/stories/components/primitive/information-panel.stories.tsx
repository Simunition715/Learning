import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  InformationPanel,
  InformationPanelCva,
} from "../../../../ui/components/primitive/information-panel/information-panel";
import { InformationPanelProps } from "../../data/primitive/information-panel-props";

export default {
  title: "Cataboom/Primitive/InformationPanel",
  component: InformationPanel,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(InformationPanelCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <InformationPanel {...args}>{children}</InformationPanel>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = {
  ...InformationPanelProps(),
  title: "Security",
  description:
    "For now this is just your password, but maybe we'll add retina scans if we get around to it.",
};
