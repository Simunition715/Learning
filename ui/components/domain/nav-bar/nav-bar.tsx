import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { INavLink, NavLink } from "../../primitive/nav-link/nav-link";
import { Logo } from "../../primitive/logo/logo";
import { observer } from "mobx-react";
import { useLifecycle } from "../../../../util/hooks/useLifecycle";
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
 * - Handles window resize events to dynamically update indicators' position using useEffect.
 * - Each button in the NavBar can trigger a state change and update the active button and indicators.
 */
export const NavBar = observer(
  React.forwardRef<HTMLDivElement, INavBar>((props: INavBar, ref) => {
    // Ref for NavBar buttons
    const buttonsRef = React.useRef<HTMLDivElement | null>(null);

    // State for active button index and indicators position
    const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);
    const [indicatorsPosition, setIndicatorsPosition] = React.useState<{
      target: DOMRect | null;
      bottom: number;
      left: number;
      width: number;
    } | null>(null);

    // Effect hook is used in this component to handle the window resize event and update the position of indicators
    React.useEffect(() => {
      // Function to update indicators position
      const handleResize = () => {
        setIndicatorsPosition({
          target: buttonsRef?.current?.getBoundingClientRect() || null,
          bottom:
            buttonsRef.current?.children[
              activeButtonIndex
            ]?.getBoundingClientRect()?.bottom || 0,
          left:
            buttonsRef.current?.children[
              activeButtonIndex
            ]?.getBoundingClientRect()?.left || 0,
          width:
            buttonsRef.current?.children[
              activeButtonIndex
            ]?.getBoundingClientRect()?.width || 0,
        });
      };

      // Attach resize event listener after mounting
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [activeButtonIndex, buttonsRef, indicatorsPosition]);

    // Lifecycle hook is used for lifecycle management, specifically for initialization (didMount) of the component.
    useLifecycle({
      willMount: () => true,
      didMount: () => {
        // Initialize active button index and indicators position
        setActiveButtonIndex(0);
        const buttonRect =
          buttonsRef.current?.children[
            activeButtonIndex
          ].getBoundingClientRect();
        setIndicatorsPosition({
          target: buttonRect || null,
          bottom: buttonRect?.bottom || 0,
          left: buttonRect?.left || 0,
          width: buttonRect?.width || 0,
        });
      },
    });

    // Function to handle button toggle
    const handleToggle = (buttonIndex: number) => {
      setActiveButtonIndex(buttonIndex);
    };

    // Function to handle button click
    const handleButtonClick = (buttonIndex: number, e: React.MouseEvent) => {
      const buttonRect = e.currentTarget.getBoundingClientRect();
      setIndicatorsPosition({
        target: buttonRect,
        bottom: buttonRect.bottom,
        left: buttonRect.left,
        width: buttonRect.width,
      });

      // Set the activeButtonIndex when a button is clicked
      setActiveButtonIndex(buttonIndex);
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
        </div>
        {/* Render the indicator with dynamic style based on indicatorsPosition */}
        <div
          className="NavBar__Indicator"
          style={{
            top: indicatorsPosition?.bottom,
            left: indicatorsPosition?.left,
            width: indicatorsPosition?.width,
          }}
        />
      </div>
    );
  })
);
