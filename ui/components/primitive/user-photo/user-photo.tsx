import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { observer } from "mobx-react";
import "./user-photo.scss";

/**
 * Rendering variants of this component
 */
export const UserPhotoCva = cva("UserPhoto", {
  variants: {
    mode: {},
    size: {
      small: "Photo--small",
      medium: "Photo--medium",
      large: "Photo--large",
    },
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IUserPhoto extends VariantProps<typeof UserPhotoCva.variants> {
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /**  A string that should contain the image data encoded in base64 format. */
  base64Image?: string | undefined;
  /** The size of the photo. */
  size?: "small" | "medium" | "large" | undefined;
  /** The mode of the photo. */
  mode?: string | undefined;
}

/**
 * UserPhoto Component
 *
 * A React component for displaying user profile photos with support for variants and customization.
 *
 */
export const UserPhoto = observer(
  React.forwardRef<HTMLImageElement, IUserPhoto>((props: IUserPhoto, ref) => {
    const { containerProps, base64Image, size } = props;
    const imageSizeClass = size ? `UserPhoto--${size}` : "";

    // Define the style with background image
    const backgroundImageStyle = {
      backgroundImage: `url(${base64Image})`,
    };

    return (
      <div
        ref={ref}
        className={classnames(UserPhotoCva.variants({ size }), imageSizeClass)}
        style={{ ...containerProps?.style, ...backgroundImageStyle }}
      ></div>
    );
  })
);
