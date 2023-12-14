import React from "react";
import { observer } from "mobx-react";

import { Breadcrumbs } from "../../primitive/breadcrumbs/breadcrumbs";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../../primitive/icon";
import { logo } from "../../../assets/user-photos/logo/logo";
import { NavBar } from "../../domain/nav-bar/nav-bar";
import "./nav-layout.scss";

/**
 * Rendering variants of this component
 */
export const NavLayoutCva = cva("NavLayout", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface INavLayout extends VariantProps<typeof NavLayoutCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

/**
 * TODO: Write the component description for documentation here
 */
export const NavLayout = observer(
  React.forwardRef<HTMLDivElement, INavLayout>((props: INavLayout, _ref) => {
    const { className, containerProps, mode } = props;

    return (
      <div
        className={classnames(NavLayoutCva.variants({ mode }), className)}
        {...containerProps}
      >
        <NavBar {...props} logo={logo} />
        <Breadcrumbs
          icon={
            <Icon
              provider={Icons}
              shape={IconShape.KEYBOARD_ARROW_LEFT}
              width={5}
            />
          }
          label="All Users"
          user={"Brooklyn Simmons"}
          {...props}
        />
      </div>
    );
  })
);
