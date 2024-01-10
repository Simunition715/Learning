import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../../../components/primitive/icon";
import "./settings-information.scss";

/**
 * Rendering variants of this component
 */
export const SettingsInformationCva = cva("SettingsInformation", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface ISettingsInformation
  extends VariantProps<typeof SettingsInformationCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** The icon to display */
  icon?: React.ReactNode;
  /** The text to display */
  text?: string;
}

/**
 * TODO: Write the component description for documentation here
 */
export const SettingsInformation = observer(
  React.forwardRef<HTMLDivElement, ISettingsInformation>(
    (props: ISettingsInformation, _ref) => {
      const { className, containerProps, mode } = props;

      return (
        <div
          className={classnames(
            SettingsInformationCva.variants({ mode }),
            className
          )}
          {...containerProps}
        >
          <Icon provider={Icons} shape={IconShape.HELP} color="#039BFF" />
          {props.text}
        </div>
      );
    }
  )
);
