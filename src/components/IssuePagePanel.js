import React from "react";
import IssueInfo from "./IssueInfo";
import AssignedTo from "./AssignedTo";
import Calendar from "./Calendar";
import "./DashboardPanel.scss";
import "./IssuePagePanel.scss";

const IssuePagePanel = ({
  userModalVisible,
  setUserModalVisible,
  selectedUser,
  setSelectedUser,
  issueId,
  issueResolved,
  showReportInSidebar,
}) => {
  return (
    <aside className="panel">
      <h2>Issues Board</h2>
      <h2 className="job-number">SG-J23937</h2>
      <div className={`side-report ${showReportInSidebar ? "expanded" : ""}`}>
        <h1>Report</h1>
        <p>Wrong condition</p>
        <h2>Additional info</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          dolor lacus. Integer vitae rhoncus odio, vel ultricies eros. Proin
          libero eros, pretium at volutpat pretium, iaculis ut lectus. Mauris
          elit ipsum, convallis id lectus id, fringilla euismod augue.
        </p>
      </div>
      <IssueInfo issueId={issueId} issueResolved={issueResolved} />
      <AssignedTo
        userModalVisible={userModalVisible}
        setUserModalVisible={setUserModalVisible}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <Calendar
        issueId={issueId}
        setUserModalVisible={setUserModalVisible}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </aside>
  );
};

export default IssuePagePanel;
