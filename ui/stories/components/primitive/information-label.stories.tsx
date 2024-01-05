import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  InformationLabel,
  InformationLabelCva,
} from "../../../components/primitive/information-label/information-label";
import { InformationLabelProps } from "../../data/primitive/information-label-props";

export default {
  title: "Cataboom/Primitive/InformationLabel",
  component: InformationLabel,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(InformationLabelCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <InformationLabel {...args}>{children}</InformationLabel>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = { ...InformationLabelProps(), label: "Archived Experiences" };
