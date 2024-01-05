import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import "./information-label.scss";

/**
 * Rendering variants of this component
 */
export const InformationLabelCva = cva("InformationLabel", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IInformationLabel
  extends VariantProps<typeof InformationLabelCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** The label to display */
  label: string;
}

/**
 * TODO: Write the component description for documentation here
 */
export const InformationLabel = observer(
  React.forwardRef<HTMLDivElement, IInformationLabel>(
    (props: IInformationLabel, _ref) => {
      const { className, containerProps, mode } = props;

      return (
        <div
          className={classnames(
            InformationLabelCva.variants({ mode }),
            className
          )}
          {...containerProps}
        >
          <div className="InformationLabel__Label">{props.label}</div>
          <div className="InformationLabel__Border"></div>
        </div>
      );
    }
  )
);
