import React from "react";
import { observer } from "mobx-react";

import Pill from "../../primitive/pill/pill";
import { Button } from "../../primitive/button/button";
import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { ExperienceInformationAlert } from "../../domain/experience-information-alert/experience-information-alert";
import { ExperiencePanel } from "../../domain-panel/experience-panel/experience-panel";
import { FormInput } from "../../primitive/form-input/form-input";
import { groupReactChildren } from "../../../../util/group-react-children";
import { Icon, Icons, IconShape } from "../../primitive/icon";
import { InformationLabel } from "../../primitive/information-label/information-label";
import { logo } from "../../../assets/user-photos/logo/logo";
import { NavBar } from "../../domain/nav-bar/nav-bar";
import "./experiences.scss";

/**
 * Rendering variants of this component
 */
export const ExperiencesCva = cva("Experiences", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IExperiences
  extends VariantProps<typeof ExperiencesCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** The children of this component */
  children?: React.ReactNode;
}

/**
 * TODO: Write the component description for documentation here
 */
export const Experiences = observer(
  React.forwardRef<HTMLDivElement, IExperiences>(
    (props: IExperiences, _ref) => {
      const { className, containerProps, mode } = props;
      const groups = groupReactChildren(props.children);
      const experiencePanel = groups.get(ExperiencePanel);
      const experienceInformationAlert = groups.get(ExperienceInformationAlert);
      const pill = groups.get(Pill);
      const navBar = groups.get(NavBar);

      return (
        <div
          className={classnames(ExperiencesCva.variants({ mode }), className)}
          {...containerProps}
        >
          <NavBar
            logo={logo}
            buttons={[
              {
                icon: <Icon size={14} provider={Icons} shape={IconShape.ADD} />,
                isActive: true,
                onToggleActive: () => {},
                text: "Experiences",
                onClick: () => {},
              },
              {
                icon: (
                  <Icon size={14} provider={Icons} shape={IconShape.SETTINGS} />
                ),
                isActive: false,
                onToggleActive: () => {},
                text: "Settings",
                onClick: () => {},
              },
              {
                icon: (
                  <Icon size={14} provider={Icons} shape={IconShape.HELP} />
                ),
                isActive: false,
                onToggleActive: () => {},
                text: "Help",
                onClick: () => {},
              },
            ]}
          />
          <div className="Experiences__Header">
            <FormInput
              inputType="text"
              label="Quick search"
              icon={<Icon provider={Icons} shape={IconShape.SEARCH} />}
              placeholder="Quick search"
            />
            <Button>New Experience</Button>
          </div>
          <InformationLabel label="Experiences" />
          <ExperiencePanel />
          <ExperienceInformationAlert text="You don’t have any archived experiences yet. Once you have experiences that are archived, you can review their configuration, duplicate them as a new experience or permanently delete them." />
          <div className="Experiences__Footer">
            <Pill
              icon={<Icon provider={Icons} shape={IconShape.HELP} />}
              children="Guide"
            />
          </div>
        </div>
      );
    }
  )
);
