import React from "react";
import "./key-value-container.scss"; // Create a new CSS file for styling

export const KeyValueContainer = ({ children }) => {
  let key:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | null
    | undefined;
  let value:
    | ReactElement<unknown, string | JSXElementConstructor<any>>
    | string;

  React.Children.forEach(children, (child) => {
    if (key && value) return;

    if (!key && React.isValidElement(child)) {
      key = child;
    } else if (!value && React.isValidElement(child)) {
      value = child;
    }
  });

  return (
    <div className="key-value-container">
      <div className="key-container">{key}</div>
      <div className="value-container">{value}</div>
    </div>
  );
};
