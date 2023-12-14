import React from "react";
import { cvaOptionsToStorybook } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { Meta, Story } from "@storybook/react";
import {
  NavLink,
  NavLinkCva,
} from "../../../components/primitive/nav-link/nav-link";
import { NavLinkCount } from "../../../components/primitive/nav-link-count/nav-link-count";
import { NavLinkProps } from "../../data/primitive/nav-link-props";

export default {
  title: "Cataboom/Primitive/NavLink",
  component: NavLink,
  args: {},
  argTypes: {
    ...cvaOptionsToStorybook(NavLinkCva),
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    containerProps: { table: { disable: true } },
  },
} as Meta;

const Template: Story<NavLinkProps> = (args) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleToggle = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <NavLink {...args} isActive={isActive} onToggleActive={handleToggle} />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  ...NavLinkProps(),
  icon: (
    <Icon
      color="#b6b6b6"
      provider={Icons}
      shape={IconShape.PERSON}
      width={14}
    />
  ),
  text: "Users",
  count: <NavLinkCount size={10} count={17} />,
};
