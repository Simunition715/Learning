import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { InputProps } from "../../../stories/data/primitive/input-props";
import { observer } from "mobx-react";
import { when } from "../../../../util/when";
import "./form-input.scss";

/**
 * Rendering variants of this component
 */
export const FormInputCva = cva("FormInput", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IFormInput extends VariantProps<typeof FormInputCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** Props to apply directly to the input element of this component */
  inputProps?: React.HTMLProps<HTMLInputElement>;
  /** Icon to display */
  icon?: React.JSX.Element | undefined;
  /** Placeholder value */
  placeholder?: string | undefined;
  /** The label from the placeholder when focused */
  label?: string;
  /** Flag indicating whether the input is for a password */
  isPassword?: boolean;
  /** Input type */
  inputType?: "email" | "password" | "text" | "number";
}

/**
 * FormInput Component:
 *
 * This component provides a customizable input field with dynamic styling based on its focus state.
 * It is designed to be used with the FormInputCva utility for rendering variants, allowing easy
 * customization of appearance in focused and unfocused states. The component supports the inclusion
 * of an optional icon and placeholder text for enhanced user experience.
 *
 **/
export const FormInput = observer(
  React.forwardRef<HTMLDivElement, IFormInput>((props: IFormInput, _ref) => {
    const {
      className,
      containerProps,
      mode,
      placeholder,
      icon,
      label,
      isPassword,
    } = props;

    const [focusState, setFocusState] = React.useState(false);
    const [filledState, setFilledState] = React.useState("");

    const handleFocus = () => {
      setFocusState(true);
    };

    const handleBlur = () => {
      setFocusState(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilledState(e.target.value);
    };

    return (
      <div
        className={classnames(FormInputCva.variants({ mode }), className)}
        {...containerProps}
        {...props.inputProps}
      >
        <label
          className={classnames(
            "FormInput__Label",
            when(focusState || filledState, "active")
          )}
        >
          {label}
        </label>
        {icon && React.cloneElement(icon, { className: "FormInput__Icon" })}
        <input
          type={isPassword ? "password" : "text"}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...InputProps}
        />
      </div>
    );
  })
);
