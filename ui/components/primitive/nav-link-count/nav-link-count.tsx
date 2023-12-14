import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import "./nav-link-count.scss";

/**
 * Rendering variants of this component
 */
export const NavLinkCountCva = cva("NavLinkCount", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface INavLinkCount
  extends VariantProps<typeof NavLinkCountCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** The count to display */
  count?: number;
  /** The size of the count */
  size?: number;
}

/**
 * TODO: Write the component description for documentation here
 */
export const NavLinkCount = observer(
  React.forwardRef<HTMLDivElement, INavLinkCount>(
    (props: INavLinkCount, _ref) => {
      const { className, containerProps, mode, count, size } = props;

      return (
        <div
          className={classnames(NavLinkCountCva.variants({ mode }), className)}
          {...containerProps}
        >
          <span style={size ? { height: 10, width: 10 } : undefined}>
            {count}
          </span>
        </div>
      );
    }
  )
);
