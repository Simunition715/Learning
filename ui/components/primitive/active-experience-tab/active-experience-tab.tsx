import React from "react";
import "./active-experience-tab.scss";

interface ActiveExperienceTabProps {
  status: string;
}

export class ActiveExperienceTab extends React.Component<ActiveExperienceTabProps> {
  render() {
    return <div className="ActiveExperienceTab">{this.props.status}</div>;
  }
}

export default ActiveExperienceTab;
