import React from "react";
import { observer, Provider } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import "./side-nav-link.scss";

/**
 * Rendering variants of this component
 */
export const SideNavLinkCva = cva("SideNavLink", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface ISideNavLink
  extends VariantProps<typeof SideNavLinkCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** The icon to display in the link */
  icon?: React.ReactNode;
  /** The text to display in the link */
  text?: string;
  /** The count to display in the link */
  isActive: boolean;
  /** Callback function to update the active state in the parent */
  onToggleActive: (isActive: boolean) => void;
  /** Event handler for button click */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * TODO: Write the component description for documentation here
 */
export const SideNavLink = observer(
  React.forwardRef<HTMLDivElement, ISideNavLink>(
    (props: ISideNavLink, _ref) => {
      const { className, containerProps, mode, isActive } = props;

      const buttonClassName = classnames(
        "SideNavLink__Button",
        SideNavLinkCva.variants({ mode }),
        { "SideNavLink__Button--active": isActive }
      );

      const iconClassName = classnames("SideNavLink__Icon", {
        "SideNavLink__Icon--active": isActive,
      });

      const textClassName = classnames("SideNavLink__Text", {
        "SideNavLink__Text--active": isActive,
      });

      const handleClick = (e: React.MouseEvent) => {
        if (props.onToggleActive) {
          props.onToggleActive(!props.isActive);
        }
        if (props.onClick) {
          props.onClick(e);
        }
      };

      return (
        <div
          className={classnames(SideNavLinkCva.variants({ mode }), className)}
          {...containerProps}
        >
          <button
            onClick={handleClick}
            type="button"
            className={buttonClassName}
          >
            <span className={iconClassName}>{props.icon}</span>
            <span className={textClassName}>{props.text}</span>
          </button>
        </div>
      );
    }
  )
);
