import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { observer } from "mobx-react";
import "./nav-link.scss";

/**
 * Rendering variants of this component
 */
export const NavLinkCva = cva("NavLink", {
  variants: {
    mode: {},
    active: {},
  },
  defaultVariants: { mode: undefined, active: undefined },
});

/**
 * Props available to this component
 */
export interface INavLink extends VariantProps<typeof NavLinkCva.variants> {
  /** Children of this component */
  children?: React.ReactNode;

  /** Provides a custom class name to the container of this component */
  className?: string;

  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;

  /** Icon to display in this component */
  icon?: React.ReactNode;

  /** Count to display in this component */
  count?: React.ReactNode;

  /** Text to display in this component */
  text?: React.ReactNode;

  /** Controlled active state from the parent */
  isActive: boolean;

  /** Callback function to update the active state in the parent */
  onToggleActive: (isActive: boolean) => void;

  /** Event handler for button click */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * NavLink Component:
 * A component that represents a navigation link with an icon, text, and count.
 * - Accepts various visual modes through the `mode` prop.
 * - Toggles an "active" state when the button is clicked.
 */
export const NavLink = observer(
  React.forwardRef<HTMLDivElement, INavLink>((props: INavLink, _ref) => {
    const { className, containerProps, mode, isActive, onToggleActive } = props;

    const buttonClassName = classnames(
      "NavLink__Button",
      NavLinkCva.variants({ mode }),
      { "NavLink__Button--active": isActive }
    );

    const iconClassName = classnames("NavLink__Icon", {
      "NavLink__Icon--active": isActive,
    });

    const textClassName = classnames("NavLink__Text", {
      "NavLink__Text--active": isActive,
    });

    const countClassName = classnames("NavLink__Count", {
      "NavLink__Count--active": isActive,
    });

    return (
      <div
        className={classnames(NavLinkCva.variants({ mode }), className)}
        {...containerProps}
      >
        <button
          onClick={() => onToggleActive(!isActive)}
          type="button"
          className={buttonClassName}
        >
          <span className={iconClassName}>{props.icon}</span>
          <span className={textClassName}>{props.text}</span>
          <span className={countClassName}>{props.count}</span>
        </button>
      </div>
    );
  })
);
