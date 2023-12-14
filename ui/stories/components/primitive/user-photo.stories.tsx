import React from "react";
import {
  IUserPhoto,
  UserPhoto,
  UserPhotoCva,
} from "../../../components/primitive/user-photo/user-photo";
import { StoryFn } from "@storybook/react"; // Adjust the import path based on your project structure
import { userImg } from "../../../assets/user-photos/user-photo.js";

export default {
  title: "Components/UserPhoto",
  component: UserPhoto,
  args: {},
  argTypes: {
    size: {
      options: Object.keys(UserPhotoCva.size),
      control: { type: "radio", inline: true },
      defaultValue: "small",
    },
  },
};

const Template: StoryFn = (args: IUserPhoto) => <UserPhoto {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "small",
  base64Image: userImg as string,
};
