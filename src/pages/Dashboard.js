import React from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import IssueCard from "../components/IssueCard";
import DashboardPanel from "../components/DashboardPanel";
import ToDoItem from "../components/ToDoItem";
import { Issues } from "../Issues";
import "./IssuePage.scss";
import "./Dashboard.scss";
import SystemNotification from "../components/Notification";
import { Notifications } from "../Notifications";

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
              <IssueCard id={issue.id} title={issue.title} />
            ))}
          </div>
        </div>

        <div className="to-do-container container">
          <div className="to-do-header">
            <h3 className="heading">To do list</h3>
            <button>Create to do</button>
          </div>
          <ToDoItem text="Contact supplier for exchange for B-01 part" />
          <ToDoItem text="Chase reply from Save-Tech" />
          <ToDoItem text="To do item" />
        </div>

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
