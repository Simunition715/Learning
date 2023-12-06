import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { observer } from "mobx-react";
import "./logo.scss";

/**
 * Rendering variants of this component
 */
export const LogoCva = cva("Logo", {
  variants: {
    mode: {},
    size: {
      small: "Logo--small",
      medium: "Logo--medium",
      large: "Logo--large",
    },
  },
  defaultVariants: { mode: undefined },
});

/**
 * Logo Component:
 * A component that displays an image logo with various size options.
 */
export interface ILogo extends VariantProps<typeof LogoCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /**  A string that should contain the image data encoded in base64 format. */
  base64Image?: string | undefined;
  /** The size of the photo. */
  size?: "small" | "medium" | "large" | undefined;
  /** The mode of the photo. */
  mode?: null | undefined | string;
}

/**
 * TODO: Write the component description for documentation here
 */
export const Logo = observer(
  React.forwardRef<HTMLDivElement, ILogo>((props: ILogo, _ref) => {
    const { className, containerProps, size, base64Image } = props;
    const logoSizeClass = size ? `Logo--${size}` : "";

    // Define the style with logo image
    const logoImageStyle = {
      backgroundImage: `url(${base64Image})`,
    };

    return (
      <div
        className={classnames(
          LogoCva.variants({ size }),
          logoSizeClass,
          className
        )}
        style={{ ...containerProps?.style, ...logoImageStyle }}
        ref={_ref}
        {...containerProps}
      ></div>
    );
  })
);
