import React from "react";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/primitive/Icon",
  component: Icon,
  decorators: [
    (Story: React.JSX.IntrinsicAttributes) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    provider: Icons,
    size: 30,
    color: "rgba(0, 0, 0, 1)",
    hoverColor: "blue",
  },
  argTypes: {
    shape: {
      type: "selection",
      options: Object.keys(IconShape),
    },
    provider: { table: { disable: true } },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
};

const Template = (children?: any) => (args: any) => (
  <Icon {...args} shape={IconShape[args.shape as keyof typeof IconShape]}>
    {children}
  </Icon>
);

export const Example: StoryFn = Template().bind({});
Example.args = {
  shape: "ADD",
};

const TemplateAll = (_children?: any) => (args: any) => (
  <div
    style={{
      flex: "1 1 auto",
      width: "100%",
      overflow: "auto",
      padding: 32,
      boxSizing: "border-box",
    }}
  >
    {Object.keys(IconShape).map((key, i) =>
      (key as any) === "displayName" ||
      (key as any) === "__docgenInfo" ? null : (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "white",
          }}
        >
          <Icon
            {...args}
            shape={IconShape[key as keyof typeof IconShape]}
            color="currentColor"
          />
          <span style={{ margin: "0px 24px" }}>{key as any}</span>
        </div>
      )
    )}
  </div>
);
export const AllIcons: StoryFn = TemplateAll().bind({});
AllIcons.args = {};
