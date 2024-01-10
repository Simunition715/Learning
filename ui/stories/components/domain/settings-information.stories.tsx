import React from "react";
import { StoryFn } from "@storybook/react";

import { cvaOptionsToStorybook } from "../../../../util/cva";
import {
  SettingsInformation,
  SettingsInformationCva,
} from "../../../components";
import { SettingsInformationProps } from "../../data/domain/settings-information-props";

export default {
  title: "Cataboom/Domain/SettingsInformation",
  component: SettingsInformation,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(SettingsInformationCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <SettingsInformation {...args}>{children}</SettingsInformation>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = {
  ...SettingsInformationProps(),
  text: "Settings Information",
};
