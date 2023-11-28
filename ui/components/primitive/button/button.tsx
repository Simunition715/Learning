import React from "react";
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
        {children}
      </button>
    );
  }
}

export default Button;
