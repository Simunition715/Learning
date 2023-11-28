import React from "react";
import "./active-experience-tab.scss";

interface ActiveExperienceTabProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export class ActiveExperienceTab extends React.Component<ActiveExperienceTabProps> {
  render() {
    const { children } = this.props;
    return <div className="ActiveExperienceTab">{children}</div>;
  }
}

export default ActiveExperienceTab;
