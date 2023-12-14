import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  ExperienceCardLabel,
  ExperienceCardLabelCva,
} from "../../../components/primitive/experience-card-label/experience-card-label";
import { ExperienceCardLabelProps } from "../../data/primitive/experience-card-label-props";

export default {
  title: "Cataboom/Primitive/ExperienceCardLabel",
  component: ExperienceCardLabel,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(ExperienceCardLabelCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
    text: "Octane Memory",
  },
};

const Template = (children?: any) => (args: any) => (
  <ExperienceCardLabel {...args}>
    {children}
    <span>Laptop Giveaway</span>
  </ExperienceCardLabel>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = ExperienceCardLabelProps();
