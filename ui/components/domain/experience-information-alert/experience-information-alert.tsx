import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../../primitive/icon";
import "./experience-information-alert.scss";

/**
 * Rendering variants of this component
 */
export const ExperienceInformationAlertCva = cva("ExperienceInformationAlert", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IExperienceInformationAlert
  extends VariantProps<typeof ExperienceInformationAlertCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** Text to display in the alert */
  text: string;
}

/**
 * TODO: Write the component description for documentation here
 */
export const ExperienceInformationAlert = observer(
  React.forwardRef<HTMLDivElement, IExperienceInformationAlert>(
    (props: IExperienceInformationAlert, _ref) => {
      const { className, containerProps, mode } = props;

      return (
        <div
          className={classnames(
            ExperienceInformationAlertCva.variants({ mode }),
            className
          )}
          {...containerProps}
        >
          <span className="ExperienceInformationAlert__icon">
            <Icon
              width={24}
              color="#2C3D55"
              provider={Icons}
              shape={IconShape.INFO}
            />
          </span>
          <span className="ExperienceInformationAlert__text">{props.text}</span>
        </div>
      );
    }
  )
);
