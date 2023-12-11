import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import "./breadcrumbs.scss";

/**
 * Rendering variants of this component
 */
export const BreadcrumbsCva = cva("Breadcrumbs", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IBreadcrumbs
  extends VariantProps<typeof BreadcrumbsCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

/**
 * TODO: Write the component description for documentation here
 */
export const Breadcrumbs = observer(
  React.forwardRef<HTMLDivElement, IBreadcrumbs>(
    (props: IBreadcrumbs, _ref) => {
      const { className, containerProps, mode } = props;

      return (
        <div
          className={classnames(BreadcrumbsCva.variants({ mode }), className)}
          {...containerProps}
        ></div>
      );
    }
  )
);
