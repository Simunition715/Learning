import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import "./experience-active-status.scss";

/**
 * Rendering variants of this component
 */
export const ExperienceActiveStatusCva = cva("ExperienceActiveStatus", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IExperienceActiveStatus
  extends VariantProps<typeof ExperienceActiveStatusCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** The label to display */
  activeNotice?: string;
  /** the date to display */
  date?: string;
}

/**
 * ExperienceActiveStatus Component
 *
 * This component represents the active status of an experience, showing an optional
 * notice and the date since the experience has been active. It is designed to be
 * flexible with customizable styles through variants
 */
export const ExperienceActiveStatus = observer(
  React.forwardRef<HTMLDivElement, IExperienceActiveStatus>(
    (props: IExperienceActiveStatus, _ref) => {
      const { className, containerProps, mode, activeNotice, date } = props;

      return (
        <div
          className={classnames(
            ExperienceActiveStatusCva.variants({ mode }),
            className
          )}
          {...containerProps}
        >
          <span className={"ExperienceActiveStatus__Active"}>
            {activeNotice}
          </span>
          <span className={"ExperienceActiveStatus__Date"}>{date}</span>
        </div>
      );
    }
  )
);
