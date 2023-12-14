import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  ExperienceActiveStatus,
  ExperienceActiveStatusCva,
} from "../../../components/primitive/experience-active-status/experience-active-status";
import { ExperienceActiveStatusProps } from "../../data/primitive/experience-active-status-props";

const currentDate = new Date();
const dateString = currentDate.toLocaleDateString();

export default {
  title: "Cataboom/Primitive/ExperienceActiveStatus",
  component: ExperienceActiveStatus,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(ExperienceActiveStatusCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template: StoryFn = (args) => <ExperienceActiveStatus {...args} />;

export const Basic: StoryFn = Template.bind({});
Basic.args = {
  ...ExperienceActiveStatusProps(),
  date: dateString,
  activeNotice: "Experience Active Since",
};
