import React from "react";
import { observer } from "mobx-react";

import { Button } from "../../../components/primitive/button/button";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { FormInput } from "../../primitive/form-input/form-input";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import { Logo } from "../../../components/primitive/logo/logo";
import { logo } from "../../../../ui/assets/user-photos/logo/logo";
import "./login-panel.scss";

/**
 * Rendering variants of this component
 */
export const LoginPanelCva = cva("LoginPanel", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface ILoginPanel
  extends VariantProps<typeof LoginPanelCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

/**
 * TODO: Write the component description for documentation here
 */
export const LoginPanel = observer(
  React.forwardRef<HTMLDivElement, ILoginPanel>((props: ILoginPanel, _ref) => {
    const { className, containerProps, mode } = props;

    return (
      <div
        className={classnames(LoginPanelCva.variants({ mode }), className)}
        {...containerProps}
      >
        <div className="LoginPanel__Content">
          <div className="LoginPanel__InformationPanel">
            <span className="LoginPanel__Title">Welcome Back</span>
            <span className="LoginPanel__Description">
              Enter your email address and password to access your account
            </span>
          </div>
          <div className="LoginPanel__Inputs">
            <FormInput
              icon={
                <Icon
                  color="rgba(0, 0, 0, 0.55)"
                  provider={Icons}
                  shape={IconShape.EMAIL}
                  width={14}
                />
              }
              label="Email address"
              className="LoginPanel__Input"
              placeholder="Email address"
              inputType="email"
            />
            <FormInput
              icon={
                <Icon
                  color="rgba(0, 0, 0, 0.55)"
                  provider={Icons}
                  shape={IconShape.LOCK}
                  width={14}
                />
              }
              label="Password"
              className="LoginPanel__Input"
              placeholder="Password"
              inputType="password"
            />
          </div>
          <div className="LoginPanel__Button">
            <Button>Sign In</Button>
          </div>
        </div>
      </div>
    );
  })
);
