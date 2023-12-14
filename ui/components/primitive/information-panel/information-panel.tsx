import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import "./information-panel.scss";

/**
 * Rendering variants of this component
 */
export const InformationPanelCva = cva("InformationPanel", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IInformationPanel
  extends VariantProps<typeof InformationPanelCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** The information title text property */
  title?: string;
  /** The information description text property */
  description?: string;
}

/**
 * TODO: Write the component description for documentation here
 */
export const InformationPanel = observer(
  React.forwardRef<HTMLDivElement, IInformationPanel>(
    (props: IInformationPanel, _ref) => {
      const { className, containerProps, mode } = props;

      return (
        <div
          className={classnames(
            InformationPanelCva.variants({ mode }),
            className
          )}
          {...containerProps}
        >
          <div className="InformationPanel__Title">{props.title}</div>
          <div className="InformationPanel__Description">
            {props.description}
          </div>
        </div>
      );
    }
  )
);
