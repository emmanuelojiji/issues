import React, { useState } from "react";
import IssueInfo from "./IssueInfo";
import AssignedTo from "./AssignedTo";
import Calendar from "./Calendar";
import "./DashboardPanel.scss";
import "./IssuePagePanel.scss";
import { Issues } from "../Data";

const IssuePagePanel = ({
  userModalVisible,
  setUserModalVisible,
  selectedUser,
  setSelectedUser,
  issueId,
  issueResolved,
  showReportInSidebar,
}) => {
  const [moreShown, setMoreShown] = useState(false);

  const selectedIssue = Issues.find((issue) => issue.id === issueId);

  return (
    <aside className="panel">
      <h2>Issues Board</h2>
      <h2 className="job-number">SG-J23937</h2>

      <IssueInfo issueId={issueId} issueResolved={issueResolved} />
      <AssignedTo
        userModalVisible={userModalVisible}
        setUserModalVisible={setUserModalVisible}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <div
        className={`side-report ${showReportInSidebar ? "expanded" : ""} ${
          showReportInSidebar ? "marginTransition" : ""
        }`}
      >
        <h3 className="side-report-heading">Report</h3>
      
      
        <div className={`text-container ${moreShown ? "text-expanded" : ""}`}>
        <div className="side-report-field">
        <h3 className="side-report-sub-heading">Additional info</h3>
          <p className="additional-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            dolor lacus. Integer vitae rhoncus odio, vel ultricies eros. Proin
            libero eros, pretium at volutpat pretium, iaculis ut lectus. Mauris
            elit ipsum, convallis id lectus id, fringilla euismod augue.
          </p></div>
          {selectedIssue.fields.map((field) => (
            <div className="side-report-field">
              <h3 className="side-report-sub-heading">{field.heading}</h3>
              <p style={{ color: issueResolved ? "#60a350" : "#E3144B" }}>
                {field.content}
              </p>
            </div>
          ))}
        </div>

        <span className="see-more" onClick={() => setMoreShown(!moreShown)}>
          {moreShown ? "See less" : "See more"}
        </span>
      </div>
      <Calendar
        issueId={issueId}
        setUserModalVisible={setUserModalVisible}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        showReportInSidebar={showReportInSidebar}
      />
    </aside>
  );
};

export default IssuePagePanel;
