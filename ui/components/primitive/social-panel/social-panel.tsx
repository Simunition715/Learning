import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { Icon, Icons, IconShape } from "../icon";

import "./social-panel.scss";

/**
 * Rendering variants of this component
 */
export const SocialPanelCva = cva("SocialPanel", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface ISocialPanel
  extends VariantProps<typeof SocialPanelCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  name?: string;
  refresh?: string;
  share?: string;
  icon?: React.ReactNode;
}

/**
 * TODO: Write the component description for documentation here
 */
export const SocialPanel = observer(
  React.forwardRef<HTMLDivElement, ISocialPanel>(
    (props: ISocialPanel, _ref) => {
      const { className, containerProps, mode } = props;

      return (
        <div
          className={classnames(SocialPanelCva.variants({ mode }), className)}
          {...containerProps}
        >
          <div className="SocialPanel__Name">
            <span className="SocialPanel__Label">Created by</span> {props.name}
          </div>
          <div className="SocialPanel__Actions">
            <div className="SocialPanel__Refresh">
              <Icon provider={Icons} shape={IconShape.REPLAY} size={14} />
              {props.refresh}
            </div>
            <div className="SocialPanel__Share">
              <Icon provider={Icons} shape={IconShape.SHARE} size={14} />
              {props.share}
            </div>
          </div>
        </div>
      );
    }
  )
);
