import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import { ExperiencePanel, ExperiencePanelCva } from "../../../components";
import { ExperiencePanelProps } from "../../data/domain-panel/experience-panel-props";

export default {
  title: "Cataboom/DomainPanel/ExperiencePanel",
  component: ExperiencePanel,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(ExperiencePanelCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <ExperiencePanel {...args}>
    {children}
  </ExperiencePanel>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = ExperiencePanelProps();
