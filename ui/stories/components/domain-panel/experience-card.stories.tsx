import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import { ExperienceCard, ExperienceCardCva } from "../../../components";
import { ExperienceCardProps } from "../../data/domain-panel/experience-card-props";

export default {
  title: "Cataboom/DomainPanel/ExperienceCard",
  component: ExperienceCard,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(ExperienceCardCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <ExperienceCard {...args}>
    {children}
  </ExperienceCard>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = ExperienceCardProps();
