import React, { Children } from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import {
  ISideNavLink,
  SideNavLink,
} from "../../primitive/side-nav-link/side-nav-link";
import { observer } from "mobx-react";
import "./side-nav-bar.scss";

/**
 * Rendering variants of this component
 */
export const SideNavBarCva = cva("SideNavBar", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface ISideNavBar
  extends VariantProps<typeof SideNavBarCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** The buttons to display in the nav bar */
  buttons?: ISideNavLink[];
  isActive?: boolean;
  onToggleActive?: (isActive: boolean) => void;
}

/**
 * TODO: Write the component description for documentation here
 */
export const SideNavBar = observer(
  React.forwardRef<HTMLDivElement, ISideNavBar>((props: ISideNavBar, _ref) => {
    const { className, containerProps, mode } = props;

    const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);
    const [buttonIndex, setButtonIndex] = React.useState(0);

    // Function to handle button toggle
    const handleToggle = (buttonIndex: number) => {
      setActiveButtonIndex(buttonIndex);
    };

    return (
      <div
        className={classnames(SideNavBarCva.variants({ mode }), className)}
        {...containerProps}
      >
        <div className="SideNavBar__Buttons">
          {props.buttons?.map((button, index) => (
            <SideNavLink
              mode={mode}
              isActive={buttonIndex === activeButtonIndex}
              onToggleActive={() => handleToggle(buttonIndex)}
              onClick={button.onClick}
              key={index}
              icon={button.icon}
              text={button.text}
            />
          ))}
        </div>
        <div className="SideNavBar__Indicator" style={{}} />
      </div>
    );
  })
);
