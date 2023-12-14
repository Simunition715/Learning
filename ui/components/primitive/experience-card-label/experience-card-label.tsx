import React from "react";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { observer } from "mobx-react";
import "./experience-card-label.scss";

/**
 * Rendering variants of this component
 */
export const ExperienceCardLabelCva = cva("ExperienceCardLabel", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IExperienceCardLabel
  extends VariantProps<typeof ExperienceCardLabelCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** Text content to be rendered inside the label */
  children?: React.ReactNode;
}

/**
 * TODO: Write the component description for documentation here
 */
export const ExperienceCardLabel = observer(
  React.forwardRef<HTMLDivElement, IExperienceCardLabel>(
    (props: IExperienceCardLabel, _ref) => {
      const { className, containerProps, mode, children } = props;

      return (
        <div
          className={classnames(
            ExperienceCardLabelCva.variants({ mode }),
            className
          )}
          {...containerProps}
        >
          {children}
        </div>
      );
    }
  )
);
