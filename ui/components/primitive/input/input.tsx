import React from "react";

export interface InputProps {
  icon?: any;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ icon, placeholder, ...rest }) => {
  const Icon = icon;
  return (
    <div>
      {Icon && <Icon />}
      <input type="text" placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Input;
