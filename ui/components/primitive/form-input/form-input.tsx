import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { observer } from "mobx-react";
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
  /**Icon to display */
  icon?: React.JSX.Element | undefined;
  /** Placeholder value */
  placeholder?: string | undefined;
  /**The label from the placeholder when focused */
  label?: string;
}

/**
 * FormInput Component:
 *
 * This component provides a customizable input field with dynamic styling based on its focus state.
 * It is designed to be used with the FormInputCva utility for rendering variants, allowing easy
 * customization of appearance in focused and unfocused states. The component supports the inclusion
 * of an optional icon and placeholder text for enhanced user experience.
 *
 *
 **/
export const FormInput = observer(
  React.forwardRef<HTMLDivElement, IFormInput>((props: IFormInput, _ref) => {
    const { className, containerProps, mode, placeholder, icon, label } = props;

    const [focusState, setFocusState] = React.useState(false);

    const handleFocus = () => {
      setFocusState(true);
    };
    const handleBlur = () => {
      setFocusState(false);
    };

    if (!focusState) {
      return (
        <div
          className={classnames(FormInputCva.variants({ mode }), className)}
          {...containerProps}
          {...props.inputProps}
        >
          {icon}
          <input
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      );
    } else {
      return (
        <div
          className={classnames(FormInputCva.variants({ mode }), className)}
          {...containerProps}
          {...props.inputProps}
        >
          <label className="FormInput__Label">{label}</label>
          {icon}
          <input onFocus={handleFocus} onBlur={handleBlur} />
        </div>
      );
    }
  })
);
