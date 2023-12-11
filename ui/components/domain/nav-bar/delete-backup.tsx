import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { INavLink, NavLink } from "../../primitive/nav-link/nav-link";
import { Logo } from "../../primitive/logo/logo";
import { observer } from "mobx-react";
import { useLifecycle } from "../../../../util/hooks/useLifecycle";
import "./nav-bar.scss";

/**
 * Rendering variants of this component
 */
export const NavBarCva = cva("NavBar", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
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

export const NavBarBorder: React.FC<{ active: boolean }> = ({ active }) => (
  <span
    className={`NavBar__Border${active ? " NavBar__Border--active" : ""}`}
  />
);

/**
 * TODO: Write the component description for documentation here
 */
export const NavBar = observer(
  React.forwardRef<HTMLDivElement, INavBar>((props: INavBar, ref) => {
    const buttonsRef = React.useRef<HTMLDivElement | null>(null);
    const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);
    const [indicatorsPosition, setIndicatorsPosition] = React.useState<{
      target: DOMRect | null;
      bottom: number;
      left: number;
      width: number;
    } | null>(null);

    // Use useEffect to handle resize after the component has mounted and after any state changes
    React.useEffect(() => {
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

      // Attach the resize event listener after mounting
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [activeButtonIndex, buttonsRef, indicatorsPosition]);

    useLifecycle({
      willMount: () => true,
      didMount: () => {
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

    const handleToggle = (buttonIndex: number) => {
      setActiveButtonIndex(buttonIndex);
    };

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

    return (
      <div
        className={classnames(
          NavBarCva.variants({ mode: props.mode }),
          props.className
        )}
        {...props.containerProps}
        ref={ref}
      >
        <div className="NavBar__Logo">
          <Logo size="small" base64Image={props.logo} />
        </div>
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
