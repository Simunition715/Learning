import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { ExperienceCard } from "../experience-card/experience-card";
import "./experience-panel.scss";

/**
 * Rendering variants of this component
 */
export const ExperiencePanelCva = cva("ExperiencePanel", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IExperiencePanel
  extends VariantProps<typeof ExperiencePanelCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

/**
 * TODO: Write the component description for documentation here
 */
export const ExperiencePanel = observer(
  React.forwardRef<HTMLDivElement, IExperiencePanel>(
    (props: IExperiencePanel, _ref) => {
      const { className, containerProps, mode } = props;

      return (
        <div
          className={classnames(
            ExperiencePanelCva.variants({ mode }),
            className
          )}
          {...containerProps}
        >
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard mode={"add"} />
        </div>
      );
    }
  )
);
