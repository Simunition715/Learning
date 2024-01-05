import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import { Experiences, ExperiencesCva } from "../../../components";
import { ExperiencesProps } from "../../data/layout/experiences-props";

export default {
  title: "Cataboom/Layout/Experiences",
  component: Experiences,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(ExperiencesCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <Experiences {...args}>{children}</Experiences>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = ExperiencesProps();
