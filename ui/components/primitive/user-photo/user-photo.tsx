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
    imageSize: {
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
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /**  A string that should contain the image data encoded in base64 format. */
  base64Image?: string | undefined;
}

/**
 * UserPhoto Component
 *
 * A React component for displaying user profile photos with support for variants and customization.
 *
 */
export const UserPhoto = observer(
  React.forwardRef<HTMLImageElement, IUserPhoto>((props: IUserPhoto, ref) => {
    const { className, containerProps, mode, base64Image, imageSize } = props;
    const imageSizeClass = imageSize ? `UserPhoto__Photo--${imageSize}` : "";

    // Define the style with background image
    const backgroundImageStyle = {
      backgroundImage: `url(${base64Image})`,
    };

    return (
      <div
        {...containerProps}
        className={classnames(UserPhotoCva.variants({ mode }), className)}
      >
        <div
          ref={ref}
          className={classnames("UserPhoto__Photo", imageSizeClass)}
          style={{ ...containerProps?.style, ...backgroundImageStyle }}
        ></div>
      </div>
    );
  })
);
