import ActiveExperienceTab from "../../../components/primitive/active-experience-tab/active-experience-tab";
import React from "react";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Primitive/ActiveExperienceTab",
  component: ActiveExperienceTab,
} as Meta;

const Template: Story = (args) => (
  <ActiveExperienceTab {...args}>Active</ActiveExperienceTab>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Active",
};
