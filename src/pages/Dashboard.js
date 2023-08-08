import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import IssueCard from "../components/IssueCard";
import DashboardPanel from "../components/DashboardPanel";
import ToDoItem from "../components/ToDoItem";
import { Issues, ToDos } from "../Data";
import "./IssuePage.scss";
import "./Dashboard.scss";
import Notification from "../components/Notification";
import { Notifications } from "../Notifications";
import ToDoList from "../components/ToDoList";
import DiscussionNotification from "../components/DiscussionNotification";
import { Users } from "../Users";

const Dashboard = () => {
  const [hoveredFilter, setHoveredFilter] = useState("");

  const [filteredIssues, setFilteredIssues] = useState([]);

  const filteredIssueObjects = filteredIssues.map((id) =>
    Issues.find((issue) => issue.id === id)
  );

  const issuesToDisplay =
    filteredIssues.length > 0 ? filteredIssueObjects : Issues;

  const sortedNotifications = Notifications.slice().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const groupedNotifications = {};

  sortedNotifications.forEach((notification) => {
    const date = notification.date;
    if (!groupedNotifications[date]) {
      groupedNotifications[date] = [];
    }
    groupedNotifications[date].push(notification);
  });

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

          <div className="notifications-container">
            {Object.keys(groupedNotifications).map((date) => (
              <div key={date}>
                <h2>{date}</h2>
                {groupedNotifications[date].map((notification, index) => (
                  <div key={index}>
                    {notification.type === "discussion" ? (
                      notification.discussions.map(
                        (discussion, discussionIndex) => {
                          const firstMessageId = discussion.id;
                          const firstReply = discussion.replies[0];

                          const originalUser = Users.find(
                            (user) => user.id === firstMessageId
                          );

                          const replyUser = Users.find(
                            (user) =>
                              user.id === (firstReply ? firstReply.id : null)
                          );

                          return (
                            <div key={discussionIndex}>
                              <DiscussionNotification
                                name={discussion.name}
                                message={discussion.message}
                                replyName={firstReply ? firstReply.name : null}
                                replyMessage={
                                  firstReply ? firstReply.message : null
                                }
                                issueId={discussion.issueId}
                                commentId={discussion.commentId}
                                originalUserAvatarImage={originalUser.avatar}
                                replyAvatarImage={replyUser.avatar}
                                originalUserRole={originalUser.role}
                                replyUserRole={replyUser.role}
                              />
                            </div>
                          );
                        }
                      )
                    ) : (
                      <Notification
                        notification_type={notification.type}
                        system_type={notification.system_type}
                        message={notification.message}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
