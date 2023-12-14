import React from "react";
import { observer } from "mobx-react";

import { classnames } from "../../../../util/classnames";
import { cva, VariantProps } from "../../../../util/cva";
import { IRowProps, ListView } from "../../primitive/list-view/list.view";
import { UserRow } from "../../domain/user-row/user-row";
import { UserRowsPanelProps } from "../../../stories/data/domain-panel/user-rows-panel-props";
import "./user-rows-panel.scss";

/**
 * Rendering variants of this component
 */
export const UserRowsPanelCva = cva("UserRowsPanel", {
  variants: {
    mode: {},
  },
  defaultVariants: { mode: undefined },
});

/**
 * Props available to this component
 */
export interface IUserRowsPanel
  extends VariantProps<typeof UserRowsPanelCva.variants> {
  /** Provides a custom class name to the container of this component */
  className?: string;
  /** Props to apply directly to the container div of this component */
  containerProps?: React.HTMLProps<HTMLDivElement>;
  /** The children of this component */
  children?: React.ReactNode;
}

/**
 * UserRowsPanel Component
 *
 * A component that renders a list of UserRows within a ListView. It includes a header
 * with columns for Name, Email Address, and Role.
 */
export const UserRowsPanel = observer(
  React.forwardRef<HTMLDivElement, IUserRowsPanel>(
    (props: IUserRowsPanel, _ref) => {
      const { className, containerProps, mode } = props;

      return (
        <div
          className={classnames(UserRowsPanelCva.variants({ mode }), className)}
          {...containerProps}
        >
          <div className="UserRowsPanel__Header">
            <span className="UserRowsPanel__Name">Name</span>
            <span className="UserRowsPanel__Email">Email Address</span>
            <span className="UserRowsPanel__Role">Role</span>
          </div>
          <ListView rowSize={80} total={30} className="UserRowsPanel__List">
            {(props: IRowProps) => (
              <UserRow key={props.index} {...UserRowsPanelProps()} />
            )}
          </ListView>
        </div>
      );
    }
  )
);
