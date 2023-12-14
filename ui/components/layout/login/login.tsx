import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { ForgotPassowordLink } from "../../primitive/forgot-passoword-link/forgot-passoword-link";
import { LoginPanel } from "../../domain-panel";
import { logo } from "../../../assets/user-photos/logo/logo";
import { Logo } from "../../../../ui/components/primitive/logo/logo";
import { observer } from "mobx-react";
import "./login.scss";

/**
 * Rendering variants of this component
 */
export const LoginCva = cva("Login", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface ILogin extends VariantProps<typeof LoginCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

/**
 * TODO: Write the component description for documentation here
 */
export const Login = observer(
  React.forwardRef<HTMLDivElement, ILogin>((props: ILogin, _ref) => {
    const { className, containerProps, mode } = props;

    return (
      <div
        className={classnames(LoginCva.variants({ mode }), className)}
        {...containerProps}
      >
        <div className="Login__Logo">
          <Logo base64Image={logo} size="large" />
        </div>
        <LoginPanel />
        <ForgotPassowordLink />
      </div>
    );
  })
);
