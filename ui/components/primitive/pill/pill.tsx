import React from "react";
import "./pill.scss";

const Pill = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) => {
  return (
    <div className="Pill">
      <span className="Pill__Icon">{icon}</span>
      <span className="Pill__Text">{children}</span>
    </div>
  );
};

export default Pill;
