import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import {
  Icon,
  Icons,
  IconShape,
} from "../../../../ui/components/primitive/icon";
import { UserPhoto } from "../../../../ui/components/primitive/user-photo/user-photo";
import "./user-row.scss";

/**
 * Rendering variants of this component
 */
export const UserRowCva = cva("UserRow", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IUserRow extends VariantProps<typeof UserRowCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** The name of the user */
  name?: string;
  /** The email of the user */
  email?: string;
  /** The role of the user */
  role?: string;
  /** The profile picture of the user */
  profilePicture?: string;
}

/**
 * TODO: Write the component description for documentation here
 */
export const UserRow = observer(
  React.forwardRef<HTMLDivElement, IUserRow>((props: IUserRow, _ref) => {
    const { className, containerProps, mode } = props;

    return (
      <div
        className={classnames(UserRowCva.variants({ mode }), className)}
        {...containerProps}
      >
        <div className="UserRow__User">
          <UserPhoto size="small" base64Image={props.profilePicture} />
          <div className="UserRow__Name">{props.name}</div>
        </div>
        <div className="UserRow__Email">{props.email}</div>
        <div className="UserRow__Role">
          {props.role}
          <div className="UserRow__Chevron">
            <Icon
              color="#b6b6b6"
              provider={Icons}
              shape={IconShape.KEYBOARD_ARROW_RIGHT}
              width={5}
            />
          </div>
        </div>
      </div>
    );
  })
);
