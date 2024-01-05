import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  ExperienceInformationAlert,
  ExperienceInformationAlertCva,
} from "../../../components";
import { ExperienceInformationAlertProps } from "../../data/domain/experience-information-alert-props";

export default {
  title: "Cataboom/Domain/ExperienceInformationAlert",
  component: ExperienceInformationAlert,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(ExperienceInformationAlertCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <ExperienceInformationAlert {...args}>{children}</ExperienceInformationAlert>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = {
  ...ExperienceInformationAlertProps(),
  text: "You don’t have any archived experiences yet. Once you have experiences that are archived, you can review their configuration, duplicate them as a new experience or permanently delete them.",
};
