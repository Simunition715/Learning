import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import "./forgot-passoword-link.scss";

/**
 * Rendering variants of this component
 */
export const ForgotPassowordLinkCva = cva("ForgotPassowordLink", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IForgotPassowordLink
  extends VariantProps<typeof ForgotPassowordLinkCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

/**
 * TODO: Write the component description for documentation here
 */
export const ForgotPassowordLink = observer(
  React.forwardRef<HTMLDivElement, IForgotPassowordLink>(
    (props: IForgotPassowordLink, _ref) => {
      const { className, containerProps, mode } = props;

      return (
        <div
          className={classnames(
            ForgotPassowordLinkCva.variants({ mode }),
            className
          )}
          {...containerProps}
        >
          <span className="ForgotPassowordLink__Text">
            Forgot your password?
          </span>
          <span className="ForgotPassowordLink__Link">
            Request a password reset.
          </span>
        </div>
      );
    }
  )
);
