import React, { useState } from "react";
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
  const [moreShown, setMoreShown] = useState(false);

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
      <div className={`side-report ${showReportInSidebar ? "expanded" : ""}`}>
        <h1>Report</h1>
        <h2>Wrong condition</h2>
        <h2>Additional info</h2>
        <div className={`text-container ${moreShown ? "text-expanded" : ""}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            dolor lacus. Integer vitae rhoncus odio, vel ultricies eros. Proin
            libero eros, pretium at volutpat pretium, iaculis ut lectus. Mauris
            elit ipsum, convallis id lectus id, fringilla euismod augue.
          </p>{" "}
        </div>
        <span className="see-more" onClick={() => setMoreShown(true)}>
          See more
        </span>
      </div>
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
