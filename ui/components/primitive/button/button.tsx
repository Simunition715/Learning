import React from "react";
import { Icon, Icons, IconShape } from "../../primitive/icon";
import "./button.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    const { children, onClick } = this.props;
    return (
      <button className="ButtonComponent" onClick={onClick}>
        <Icon width={14} color="white" provider={Icons} shape={IconShape.ADD} />
        {children}
      </button>
    );
  }
}

export default Button;
