import React from "react";
import { observer } from "mobx-react";

import { ChangePassword } from "../../domain-panel";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { EditUserPanel } from "../../domain-panel/edit-user-panel/edit-user-panel";
import { groupReactChildren } from "../../../../util/group-react-children";
import { NavLayout } from "../../domain-panel";
import "./profile.scss";

/**
 * Rendering variants of this component
 */
export const ProfileCva = cva("Profile", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IProfile extends VariantProps<typeof ProfileCva.variants> {
  /** The children of this component */
  children?: React.ReactNode;
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

/**
 * TODO: Write the component description for documentation here
 */
export const Profile = observer(
  React.forwardRef<HTMLDivElement, IProfile>((props: IProfile, _ref) => {
    const { className, containerProps, mode } = props;
    const groups = groupReactChildren(props.children);
    const navLayout = groups.get(NavLayout);
    const editUserPanel = groups.get(EditUserPanel);
    const passwordPanel = groups.get(ChangePassword);

    return (
      <div
        className={classnames(ProfileCva.variants({ mode }), className)}
        {...containerProps}
      >
        <div className="Profile__Header">{navLayout}</div>
        <div className="Profile__Content">
          <div className="Profile__TopContent">{editUserPanel}</div>
          <div className="Profile__BottomContent">{passwordPanel}</div>
        </div>
      </div>
    );
  })
);
