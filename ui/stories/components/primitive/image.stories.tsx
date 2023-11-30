import experienceCardImage from "../../assets/experience-card-image.png";
import React from "react";
import { cvaOptionsToStorybook } from "../../../../util/cva";
import { Image } from "../../../components/primitive/image";
import { ImageCva } from "../../../components/primitive/image/image";
import { ImageProps } from "../../data/primitive/image-props";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Primitive/Image",
  component: Image,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(ImageCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <Image {...args}>{children}</Image>
);

export const Basic: StoryFn = Template().bind({});
Basic.args = {
  ...ImageProps(),
  src: experienceCardImage,
};
