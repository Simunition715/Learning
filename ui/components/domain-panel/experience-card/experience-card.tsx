import React from "react";
import { observer } from "mobx-react";

import { ActiveExperienceTab } from "../../primitive/active-experience-tab/active-experience-tab";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { ExperienceActiveStatus } from "../../primitive/experience-active-status/experience-active-status";
import { ExperienceCardLabel } from "../../primitive/experience-card-label/experience-card-label";
import { laptop } from "../../../../ui/assets/user-photos/experience-photos/laptop";
import { SocialPanel } from "../../primitive/social-panel/social-panel";
import "./experience-card.scss";

/**
 * Rendering variants of this component
 */
export const ExperienceCardCva = cva("ExperienceCard", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IExperienceCard
  extends VariantProps<typeof ExperienceCardCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  status?: string;
}

/**
 * TODO: Write the component description for documentation here
 */
export const ExperienceCard = observer(
  React.forwardRef<HTMLDivElement, IExperienceCard>(
    (props: IExperienceCard, _ref) => {
      const { className, containerProps, mode } = props;

      return (
        <div
          className={classnames(
            ExperienceCardCva.variants({ mode }),
            className
          )}
          {...containerProps}
        >
          <div className="ExperienceCard__ActiveStatus">
            <ActiveExperienceTab status="Active" />
          </div>
          <div className="ExperienceCard__Label">
            <ExperienceCardLabel children="Laptop Giveaway" />
          </div>
          <div className="ExperienceCard__Image">
            <img src={laptop} />
          </div>
          <div className="ExperienceCard__Status">
            <ExperienceActiveStatus activeNotice="Active" date="2 days ago" />
          </div>
          <div className="ExperienceCard__Social">
            <SocialPanel name="John Smith" refresh="30,456" share="782" />
          </div>
        </div>
      );
    }
  )
);
