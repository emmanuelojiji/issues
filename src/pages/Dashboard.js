import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import IssueCard from "../components/IssueCard";
import DashboardPanel from "../components/DashboardPanel";
import ToDoItem from "../components/ToDoItem";
import { Issues, ToDos } from "../Data";
import "./IssuePage.scss";
import "./Dashboard.scss";
import SystemNotification from "../components/Notification";
import { Notifications } from "../Notifications";
import ToDoList from "../components/ToDoList";
import DiscussionNotification from "../components/DiscussionNotification";
import { Users } from "../Users";

const Dashboard = () => {
  const [hoveredFilter, setHoveredFilter] = useState("");

  const [filteredIssues, setFilteredIssues] = useState([]);

  const [issues, setIssues] = useState([]);

  const filteredIssueObjects = filteredIssues.map((id) => Issues.find((issue) => issue.id === id));

  const issuesToDisplay = filteredIssues.length > 0 ? filteredIssueObjects : Issues;



  return (
    <main className="row-container">
      <DashboardPanel
        setHoveredFilter={setHoveredFilter}
        setFilteredIssues={setFilteredIssues}
        filteredIssues={filteredIssues}
      />
      <div className="app-right">
        <div className="issues-card-container container">
          <div className="dashboard-header">
            <h2 className="heading">All Issues</h2>
            <button>Create new Issue</button>
          </div>
          <div className="card-container">
            {issuesToDisplay.map((issue) => (
              <IssueCard
                id={issue.id}
                title={issue.title}
                status={issue.status}
                color={
                  issue.status === "unresolved"
                    ? "#c54b4b"
                    : issue.status === "resolved"
                    ? "#60a350"
                    : "#808080"
                }
                opacity={hoveredFilter && issue.id != hoveredFilter && "0.5"}
              />
            ))}
          </div>
        </div>

        <ToDoList />

        <div className="notification-container container">
          <div className="discussion-header">
            <h3 className="heading">Notifications</h3>
          </div>

          {Notifications.map((notification) => {
            return (
              <>
                {notification.type != "discussion" && (
                  <SystemNotification
                    message={notification.message}
                    type={notification.type}
                  />
                )}

                {notification.type === "discussion" &&
                  notification.discussions.map((discussion) => {
                    const originalUser = Users.find(
                      (user) => user.id === discussion.id
                    );
                    const replyUser = Users.find(
                      (user) => user.id === discussion.replies[0].id
                    );
                    return (
                      <DiscussionNotification
                        message={discussion.message}
                        name={discussion.name}
                        replyName={discussion.replies[0].name}
                        replyMessage={discussion.replies[0].message}
                        originalUserAvatarImage={originalUser.avatar}
                        replyAvatarImage={replyUser.avatar}
                        issueId={discussion.issueId}
                        commentId={discussion.commentId}
                      />
                    );
                  })}
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
