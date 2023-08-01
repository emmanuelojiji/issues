import React from "react";
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

const Dashboard = () => {
  return (
    <main className="row-container">
      <DashboardPanel />
      <div className="app-right">
        <div className="issues-card-container container">
          <div className="dashboard-header">
            <h2 className="heading">All Issues</h2>
            <button>Create new Issue</button>
          </div>
          <div className="card-container">
            {Issues.map((issue) => (
              <IssueCard
                id={issue.id}
                title={issue.title}
                status={issue.status}
              />
            ))}
          </div>
        </div>

        <ToDoList />

        <div className="notification-container container">
          <div className="discussion-header">
            <h3 className="heading">Notifications</h3>
          </div>

          {Notifications.map((notification) => (
            <>
              {notification.type === "system" && (
                <SystemNotification message={notification.message} />
              )}

              {notification.type === "discussion" &&
                notification.discussions.map((discussion) => (
                  <DiscussionNotification
                    message={discussion.message}
                    name={discussion.name}
                    replyName={discussion.replies[0].name}
                    replyMessage={discussion.replies[0].message}
                  />
                ))}
            </>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
