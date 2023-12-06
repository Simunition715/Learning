import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { INavLink, NavLink } from "../../primitive/nav-link/nav-link";
import { Logo } from "../../primitive/logo/logo";
import { observer } from "mobx-react";
import "./nav-bar.scss";

const buttonsRef = React.createRef<HTMLDivElement>();

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
    const { className, containerProps, mode, buttons = [] } = props;

    const [activeButtonIndex, setActiveButtonIndex] = React.useState<
      number | null
    >(null);

    const [indicatorsPosition, setIndicatorsPosition] = React.useState<{
      left: number;
      width: number;
    } | null>(null);

    const handleToggle = (buttonIndex: number) => {
      setActiveButtonIndex(buttonIndex);
    };

    const handleButtonClick = (e: React.MouseEvent) => {
      console.warn(buttonsRef);
      const buttonRect = e.currentTarget.getBoundingClientRect();
      setIndicatorsPosition({
        left: buttonRect.left,
        width: buttonRect.width,
      });
    };

    return (
      <div
        className={classnames(NavBarCva.variants({ mode }), className)}
        {...containerProps}
        ref={ref}
      >
        <div className="NavBar__Logo">
          <Logo size="small" base64Image={props.logo} />
        </div>
        <div className="NavBar__Buttons">
          {buttons.map((button, buttonIndex) => (
            <div onClick={handleButtonClick} key={buttonIndex}>
              <NavLink
                isActive={activeButtonIndex === buttonIndex}
                onToggleActive={() => handleToggle(buttonIndex)}
                icon={button.icon}
                text={button.text}
                count={button.count}
                children={undefined}
                onClick={handleButtonClick}
              />
            </div>
          ))}
        </div>
        <div
          className="NavBar__Indicator"
          style={{
            left: indicatorsPosition?.left,
            width: indicatorsPosition?.width,
          }}
        />
      </div>
    );
  })
);
