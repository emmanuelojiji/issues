import React from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import IssueCard from "../components/IssueCard";
import Panel from "../components/Panel";
import ToDoItem from "../components/ToDoItem";
import { Issues } from "../Issues";
import "./IssuePage.scss";
import "./Dashboard.scss"

const Dashboard = () => {
  return (
    <main className="row-container">
      <Panel />
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
          <h3 className="heading">To do list</h3>
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
        </div>

        <div className="discussion-container container">
          <div className="discussion-header">
            <h3 className="heading">Discussion</h3>
            <button>Create new discussion</button>
          </div>

          <div className="comments-container main-container container">
            <Comment />
            <Comment />
            <Comment />
          </div>

          <div className="comments-container main-container container">
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
