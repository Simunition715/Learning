import React from "react";
import { observer } from "mobx-react";

import { Breadcrumbs } from "../../primitive/breadcrumbs/breadcrumbs";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { EditUserPanel } from "../edit-user-panel/edit-user-panel";
import { FormInput } from "../../primitive/form-input/form-input";
import { Icon, Icons, IconShape } from "../../primitive/icon";
import { NavBar } from "../../domain/nav-bar/nav-bar";
import "./user-profile.scss";

/**
 * Rendering variants of this component
 */
export const UserProfileCva = cva("UserProfile", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IUserProfile
  extends VariantProps<typeof UserProfileCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

/**
 * TODO: Write the component description for documentation here
 */
export const UserProfile = observer(
  React.forwardRef<HTMLDivElement, IUserProfile>(
    (props: IUserProfile, _ref) => {
      const { className, containerProps, mode } = props;

      return (
        <div
          className={classnames(UserProfileCva.variants({ mode }), className)}
          {...containerProps}
        >
          <div className="UserProfile__Header">
            <NavBar logo={undefined} {...props} />
            <Breadcrumbs
              icon={
                <Icon
                  provider={Icons}
                  shape={IconShape.KEYBOARD_ARROW_LEFT}
                  width={5}
                />
              }
              label="All Users"
              user={"Brooklyn Simmons"}
              {...props}
            />
          </div>
          <div className="UserProfile__ContainerTop">
            <div className="UserProfile__TopRight">
              <EditUserPanel {...props} />
            </div>
          </div>
        </div>
      );
    }
  )
);
