import React from "react";
import { observer } from "mobx-react";

import { ActiveExperienceTab } from "../../primitive/active-experience-tab/active-experience-tab";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { ExperienceActiveStatus } from "../../primitive/experience-active-status/experience-active-status";
import { ExperienceCardLabel } from "../../primitive/experience-card-label/experience-card-label";
import { Icon, Icons, IconShape } from "../../primitive/icon";
import { laptop } from "../../../../ui/assets/user-photos/experience-photos/laptop";
import { SocialPanel } from "../../primitive/social-panel/social-panel";
import "./experience-card.scss";

/**
 * Rendering variants of this component
 */
export const ExperienceCardCva = cva("ExperienceCard", {
  variants: {
    mode: {
      add: {},
    },
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

      // Check if the current mode is "blank"
      const isBlank = mode === "add";

      const handleClick = () => {
        console.log("Add");
      };

      return (
        <div
          className={classnames(
            ExperienceCardCva.variants({ mode }),
            className
          )}
          {...containerProps}
        >
          {/* Render different content based on the variant */}
          {isBlank ? (
            <div onClick={handleClick} className="ExperienceCard__Add">
              <Icon
                provider={Icons}
                shape={IconShape.ADD}
                size={95}
                color="#B6B6B6"
              />
            </div>
          ) : (
            <>
              {/* Your regular content */}
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
                <ExperienceActiveStatus
                  activeNotice="Experience active since"
                  date="8/17/2023"
                />
              </div>
              <div className="ExperienceCard__Social">
                <SocialPanel name="John Smith" refresh="30,456" share="782" />
              </div>
            </>
          )}
        </div>
      );
    }
  )
);
