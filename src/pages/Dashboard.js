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

        <ToDoList/>

        <div className="notification-container container">
          <div className="discussion-header">
            <h3 className="heading">Notifications</h3>
          </div>

          {Notifications.map((notification) => (
            <SystemNotification message={notification.message} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
