import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { userImg } from "../../../assets/user-photos/user-photo";
import { UserPhoto } from "../user-photo/user-photo";
import "./profile-dropdown.scss";

/**
 * Rendering variants of this component
 */
export const ProfileDropdownCva = cva("ProfileDropdown", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IProfileDropdown
  extends VariantProps<typeof ProfileDropdownCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

/**
 * TODO: Write the component description for documentation here
 */
export const ProfileDropdown = observer(
  React.forwardRef<HTMLDivElement, IProfileDropdown>(
    (props: IProfileDropdown, _ref) => {
      const { className, containerProps, mode } = props;
      const [dropdownStatus, setDropdownStatus] = React.useState(false);

      return (
        <div
          className={classnames(
            ProfileDropdownCva.variants({ mode }),
            className
          )}
          onClick={() => {
            setDropdownStatus(!dropdownStatus);
          }}
          {...containerProps}
        >
          <div className="ProfileDropdown__Avatar">
            <UserPhoto size="small" base64Image={userImg as string} />
          </div>
          <div className="ProfileDropdown__Icon">
            <Icon
              color="#b6b6b6"
              shape={IconShape.KEYBOARD_ARROW_DOWN}
              provider={Icons}
              size={8}
            />
          </div>
          {dropdownStatus && (
            <div className="ProfileDropdown__Dropdown">
              <div
                className="ProfileDropdown__DropdownItem"
                onClick={() => {
                  alert("Profile");
                }}
              >
                <Icon provider={Icons} shape={IconShape.PERSON} width={14} />
                Profile
              </div>
              <div
                className="ProfileDropdown__DropdownItem"
                onClick={() => {
                  alert("Sign Out");
                }}
              >
                <Icon provider={Icons} shape={IconShape.LOGOUT} width={14} />
                Sign Out
              </div>
            </div>
          )}
        </div>
      );
    }
  )
);
