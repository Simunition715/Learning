import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { FormInput } from "../../primitive/form-input/form-input";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { observer } from "mobx-react";
import { userImg } from "../../../assets/user-photos/user-photo";
import { UserPhoto } from "../../primitive/user-photo/user-photo";
import "./edit-user-panel.scss";

/**
 * Rendering variants of this component
 */
export const EditUserPanelCva = cva("EditUserPanel", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IEditUserPanel
  extends VariantProps<typeof EditUserPanelCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

/**
 * EditUserPanel Component:
 *
 * This component represents a user profile editing panel with a user photo and input fields
 * for first name, last name, email address, and phone number. It uses the EditUserPanelCva
 * utility for rendering variants, allowing customization of its appearance.
 *
 */
export const EditUserPanel = observer(
  React.forwardRef<HTMLDivElement, IEditUserPanel>(
    (props: IEditUserPanel, _ref) => {
      const { className, containerProps, mode } = props;

      return (
        <div
          className={classnames(EditUserPanelCva.variants({ mode }), className)}
          {...containerProps}
        >
          <div className="EditUserPanel__UserPhoto">
            <UserPhoto size="large" base64Image={userImg}></UserPhoto>
          </div>
          <div className="EditUserPanel__InputsTop">
            <FormInput
              icon={
                <Icon
                  color="rgba(0, 0, 0, 0.55)"
                  shape={IconShape.PERSON}
                  provider={Icons}
                />
              }
              className="EditUserPanel__Input"
              label="First name"
              placeholder="First Name"
            />
            <FormInput
              icon={
                <Icon
                  color="rgba(0, 0, 0, 0.55)"
                  shape={IconShape.PERSON}
                  provider={Icons}
                />
              }
              className="EditUserPanel__Input"
              label="Last name"
              placeholder="Last Name"
            />
          </div>
          <div className="EditUserPanel__InputsBottom">
            <FormInput
              icon={
                <Icon
                  color="rgba(0, 0, 0, 0.55)"
                  shape={IconShape.EMAIL}
                  provider={Icons}
                />
              }
              className="EditUserPanel__Input"
              label="Email Address"
              placeholder="Email Address"
            />
            <FormInput
              icon={
                <Icon
                  color="rgba(0, 0, 0, 0.55)"
                  shape={IconShape.PHONE}
                  provider={Icons}
                />
              }
              className="EditUserPanel__Input"
              label="Phone Number"
              placeholder="Phone Number"
            />
          </div>
        </div>
      );
    }
  )
);
