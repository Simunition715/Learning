import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { FormInput } from "../../../../ui/components/primitive/form-input/form-input";
import {
  Icon,
  Icons,
  IconShape,
} from "../../../../ui/components/primitive/icon";
import { InformationPanel } from "../../../components/primitive/information-panel/information-panel";
import { observer } from "mobx-react";
import "./change-password.scss";

/**
 * Rendering variants of this component
 */
export const ChangePasswordCva = cva("ChangePassword", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IChangePassword
  extends VariantProps<typeof ChangePasswordCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

/**
 * TODO: Write the component description for documentation here
 */
export const ChangePassword = observer(
  React.forwardRef<HTMLDivElement, IChangePassword>(
    (props: IChangePassword, _ref) => {
      const { className, containerProps, mode } = props;

      return (
        <div
          className={classnames(
            ChangePasswordCva.variants({ mode }),
            className
          )}
          {...containerProps}
        >
          <div className="ChangePassword__InformationPanel">
            <InformationPanel
              title="Change Password"
              description="Change your password"
            />
          </div>
          <div className="ChangePassword__RightPanel">
            <div className="ChangePassword__TopInput">
              <FormInput
                className="ChangePassword__Input"
                icon={
                  <Icon
                    color="rgba(0, 0, 0, 0.55)"
                    provider={Icons}
                    shape={IconShape.LOCK}
                    width={14}
                  />
                }
                label="New Password"
                placeholder="New Password"
              />
            </div>
            <div className="ChangePassword__BottomInput">
              <FormInput
                className="ChangePassword__Input"
                icon={
                  <Icon
                    color="rgba(0, 0, 0, 0.55)"
                    provider={Icons}
                    shape={IconShape.LOCK}
                    width={14}
                  />
                }
                label="Confirm New Password"
                placeholder="Confirm New Password"
              />
            </div>
          </div>
        </div>
      );
    }
  )
);
