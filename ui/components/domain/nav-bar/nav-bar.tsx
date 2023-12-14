import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { INavLink, NavLink } from "../../primitive/nav-link/nav-link";
import { Logo } from "../../primitive/logo/logo";
import { observer } from "mobx-react";
import { relativeClientRect } from "../../../../util/relative-client-rect";
import { useLifecycle } from "../../../../util/hooks/useLifecycle"; // Import the utility
import "./nav-bar.scss";

// Rendering variants of the NavBar component using cva utility
export const NavBarCva = cva("NavBar", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

// Props available for the NavBar component
export interface INavBar extends VariantProps<typeof NavBarCva.variants> {
  logo: string | undefined;
  className?: string;
  containerProps?: React.HTMLProps<HTMLDivElement>;
  children?: React.ReactNode;
  isActive?: boolean;
  onToggleActive?: (isActive: boolean) => void;
  base64Image?: string;
  buttons?: INavLink[];
}

// Border component for NavBar
export const NavBarBorder: React.FC<{ active: boolean }> = ({ active }) => (
  // Render a span with dynamic classNames based on the 'active' prop
  <span
    className={`NavBar__Border${active ? " NavBar__Border--active" : ""}`}
  />
);

/**
 * NavBar Component:
 * A navigation bar component with a logo, buttons, and indicators.
 * - Utilizes the cva utility for rendering variants based on the `mode` prop.
 * - Manages the lifecycle using the useLifecycle hook for initialization.
 * - Each button in the NavBar can trigger a state change and update the active button and indicators.
 */
export const NavBar = observer(
  React.forwardRef<HTMLDivElement, INavBar>((props: INavBar, ref) => {
    // Ref for NavBar buttons
    const buttonsRef = React.useRef<HTMLDivElement | null>(null);

    // State for active button index and indicators position
    const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);
    const [indicatorsPosition, setIndicatorsPosition] = React.useState<{
      target: HTMLElement | null;
      left: number;
      width: number;
    } | null>(null);

    // Lifecycle hook is used for lifecycle management, specifically for initialization (didMount) of the component.
    useLifecycle({
      willMount: () => true,
      didMount: () => {
        // Get the target and button rectangles
        handleResize();

        // Attach resize event listener after mounting
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      },
    });

    // Function to handle button toggle
    const handleToggle = (buttonIndex: number) => {
      setActiveButtonIndex(buttonIndex);
    };

    // Function to handle button click
    const handleButtonClick = (buttonIndex: number, e: React.MouseEvent) => {
      const element = e.currentTarget.children[buttonIndex];
      const buttonRect = e.currentTarget.getBoundingClientRect();
      const targetRect = buttonsRef?.current?.getBoundingClientRect();

      let indicatorsPositionUpdate: {
        target: HTMLElement;
        left: number;
        width: number;
      } | null;

      if (targetRect) {
        const relativeRect = relativeClientRect(buttonRect, targetRect);
        indicatorsPositionUpdate = {
          target: element,
          left: relativeRect.left,
          width: relativeRect.width,
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
      console.log("activeButtonIndex: ", activeButtonIndex);
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
        left: number;
        width: number;
      } | null;

      if (targetRect) {
        const relativeRect = relativeClientRect(buttonRect, targetRect);
        indicatorsPositionUpdate = {
          target: element,
          left: relativeRect.left,
          width: relativeRect.width,
        };
      } else {
        indicatorsPositionUpdate = null;
      }

      setIndicatorsPosition(indicatorsPositionUpdate);
    };

    // Render the NavBar component
    return (
      <div
        // Apply classNames using the classnames utility and props
        className={classnames(
          NavBarCva.variants({ mode: props.mode }),
          props.className
        )}
        {...props.containerProps}
        ref={ref}
      >
        {/* Render the Logo component with small size and logo image */}
        <div className="NavBar__Logo">
          <Logo size="small" base64Image={props.logo} />
        </div>
        {/* Render NavBar buttons using NavLink component */}
        <div ref={buttonsRef} className="NavBar__Buttons">
          {props.buttons?.map((button, buttonIndex) => (
            <NavLink
              key={buttonIndex}
              isActive={buttonIndex === activeButtonIndex}
              onToggleActive={() => handleToggle(buttonIndex)}
              icon={button.icon}
              text={button.text}
              count={button.count}
              children={undefined}
              onClick={(e) => handleButtonClick(buttonIndex, e)}
            />
          ))}
          <div
            className="NavBar__Indicator"
            style={{
              left: indicatorsPosition?.left,
              width: indicatorsPosition?.width,
            }}
          />
        </div>
      </div>
    );
  })
);
