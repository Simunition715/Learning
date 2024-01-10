import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import {
  ISideNavLink,
  SideNavLink,
} from "../../primitive/side-nav-link/side-nav-link";
import { observer } from "mobx-react";
import { relativeClientRect } from "../../../../util/relative-client-rect";
import { useLifecycle } from "../../../../util/hooks/useLifecycle";
import "./side-nav-bar.scss"; // Import the utility

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
  /** The index of the button that should be active */
  isActive?: boolean;
  /** Function to call when the active button is toggled */
  onToggleActive?: (isActive: boolean) => void;
}

/**
 * TODO: Write the component description for documentation here
 */
export const SideNavBar = observer(
  React.forwardRef<HTMLDivElement, ISideNavBar>((props: ISideNavBar, ref) => {
    const { mode } = props;
    // Ref for NavBar buttons
    const buttonsRef = React.useRef<HTMLDivElement | null>(null);

    const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);
    const [indicatorsPosition, setIndicatorsPosition] = React.useState<{
      target: HTMLElement | null;
      top: number;
      left: number;
      x: number;
      y: number;
    } | null>(null);

    // Lifecycle hook is used for lifecycle management, specifically for initialization (didMount) of the component.
    useLifecycle({
      willMount: () => true,
      didMount: () => {
        // Attach resize event listener after mounting
        window.addEventListener("resize", handleResize);

        // Get the target and button rectangles
        handleResize();

        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      },
    });

    // Function to handle button toggle
    const handleToggle = (buttonIndex: number) => {
      setActiveButtonIndex(buttonIndex);
      if (props.onToggleActive) {
        props.onToggleActive(true);
      }
    };

    // Function to handle button click
    const handleButtonClick = (buttonIndex: number, e: React.MouseEvent) => {
      const element = e.currentTarget.children[buttonIndex];
      const buttonRect = e.currentTarget.getBoundingClientRect();
      const targetRect = buttonsRef?.current?.getBoundingClientRect();
      console.log("e.currentTarget", buttonRect);
      console.log("targetRect", targetRect);

      let indicatorsPositionUpdate: {
        target: HTMLElement;
        top: number;
        left: number;
        x: number;
        y: number;
      } | null;

      if (targetRect) {
        const relativeRect = relativeClientRect(buttonRect, targetRect);
        indicatorsPositionUpdate = {
          target: element,
          top: relativeRect.top,
          left: relativeRect.left,
          x: relativeRect.x,
          y: relativeRect.y,
        };
      } else {
        indicatorsPositionUpdate = null;
      }

      setIndicatorsPosition(indicatorsPositionUpdate);

      // Set the activeButtonIndex when a button is clicked
      setActiveButtonIndex(buttonIndex);
    };

    // Function to handle resize
    const handleResize = () => {
      const element = buttonsRef?.current?.children[activeButtonIndex];
      const targetRect =
        buttonsRef?.current?.children[
          activeButtonIndex
        ].getBoundingClientRect() || ({} as DOMRect);
      const buttonRect =
        (
          indicatorsPosition?.target ||
          buttonsRef.current?.children[activeButtonIndex]
        )?.getBoundingClientRect() || ({} as DOMRect);

      let indicatorsPositionUpdate: {
        target: HTMLElement;
        top: number;
        left: number;
        x: number;
        y: number;
      } | null;

      if (targetRect) {
        const relativeRect = relativeClientRect(buttonRect, targetRect);
        indicatorsPositionUpdate = {
          target: element,
          top: relativeRect.top,
          left: relativeRect.width,
          x: relativeRect.x,
          y: relativeRect.y + 14,
        };
      } else {
        indicatorsPositionUpdate = null;
      }

      setIndicatorsPosition(indicatorsPositionUpdate);
    };

    return (
      <div
        className={classnames(
          SideNavBarCva.variants({ mode }),
          props.className
        )}
        {...props.containerProps}
        ref={ref}
      >
        <div ref={buttonsRef} className="SideNavBar__Buttons">
          {props.buttons?.map((button, buttonIndex) => (
            <SideNavLink
              key={buttonIndex}
              isActive={buttonIndex === activeButtonIndex}
              onToggleActive={() => handleToggle(buttonIndex)}
              icon={button.icon}
              text={button.text}
              onClick={(e) => handleButtonClick(buttonIndex, e)}
            />
          ))}
        </div>
        <div
          className="SideNavBar__Indicator"
          style={{
            transform: `translateY(${indicatorsPosition?.y}px)`,
          }}
        />
      </div>
    );
  })
);
