import React from "react";
import { observer } from "mobx-react";

import Pill from "../../primitive/pill/pill";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { groupReactChildren } from "../../../../util/group-react-children";
import { NavBar } from "../../domain";
import { UserRowsPanel } from "../../domain-panel";
import "./users.scss";

/**
 * Rendering variants of this component
 */
export const UsersCva = cva("Users", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IUsers extends VariantProps<typeof UsersCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  children?: React.ReactNode;
}

/**
 * TODO: Write the component description for documentation here
 */
export const Users = observer(
  React.forwardRef<HTMLDivElement, IUsers>((props: IUsers, _ref) => {
    const { className, containerProps, mode } = props;
    const groups = groupReactChildren(props.children);
    const navBar = groups.get(NavBar);
    const userRows = groups.get(UserRowsPanel);
    const pill = groups.get(Pill);

    return (
      <div
        className={classnames(UsersCva.variants({ mode }), className)}
        {...containerProps}
      >
        <div className="Users__Container">
          {navBar}
          {userRows}
        </div>
        <div className="Users__Pill">{pill}</div>
      </div>
    );
  })
);
