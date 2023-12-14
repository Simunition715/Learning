import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import "./image.scss";

/**
 * Rendering variants of this component
 */
export const ImageCva = cva("Image", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IImage extends VariantProps<typeof ImageCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** Source URL for the image */
  src?: string;
}

/**
 * TODO: Write the component description for documentation here
 */
export const Image = observer(
  React.forwardRef<HTMLDivElement, IImage>((props: IImage, _ref) => {
    const { className, containerProps, mode, src } = props;

    return (
      <div
        className={classnames(ImageCva.variants({ mode }), className)}
        {...containerProps}
      >
        <img src={src} alt="Description of the image" />
      </div>
    );
  })
);
