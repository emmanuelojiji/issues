import React from "react";
import IssueInfo from "./IssueInfo";
import AssignedTo from "./AssignedTo";
import Calendar from "./Calendar";
import "./DashboardPanel.scss";

const IssuePagePanel = ({ userModalVisible, setUserModalVisible }) => {
  return (
    <aside className="panel">
      <h2>Issues Board</h2>
      <h2 className="job-number">SG-J23937</h2>
      <IssueInfo />
      <AssignedTo
        userModalVisible={userModalVisible}
        setUserModalVisible={setUserModalVisible}
      />
      <Calendar />
      <Calendar />
      <Calendar />
    </aside>
  );
};

export default IssuePagePanel;
