import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { groupReactChildren } from "../../../../util/group-react-children";
import { NavBar } from "../../../components/domain/nav-bar/nav-bar";
import { SettingsInformation } from "../../../components/domain/settings-information/settings-information";
import { SideNavBar } from "../../../components/domain/side-nav-bar/side-nav-bar";
import "./global-styles.scss";

/**
 * Rendering variants of this component
 */
export const GlobalStylesCva = cva("GlobalStyles", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IGlobalStyles
  extends VariantProps<typeof GlobalStylesCva.variants> {
  children(children: any): unknown;
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

/**
 * TODO: Write the component description for documentation here
 */
export const GlobalStyles = observer(
  React.forwardRef<HTMLDivElement, IGlobalStyles>(
    (props: IGlobalStyles, _ref) => {
      const { className, containerProps, mode } = props;
      const groups = groupReactChildren(props.children);
      const navBar = groups.get(NavBar);
      const sideNavBar = groups.get(SideNavBar);
      const settingsInformation = groups.get(SettingsInformation);

      return (
        <div
          className={classnames(GlobalStylesCva.variants({ mode }), className)}
          {...containerProps}
        >
          <div className="GlobalStyles__NavBar">{navBar}</div>
          <div className="GlobalStyles__Container">
            <div className="GlobalStyles__SideNav">{sideNavBar}</div>
            <div className="GlobalStyles__MainContent">
              <div className="GlobalStyles__SettingsInformation">
                {settingsInformation}
              </div>
              test
            </div>
          </div>
        </div>
      );
    }
  )
);
