import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import NewDiscussion from "../components/NewDiscussion";
import Panel from "../components/DashboardPanel";
import "./IssuePage.scss";

const IssuePage = () => {
  const { id } = useParams();

  const [newCommentVisible, setNewCommentVisible] = useState(false);

  const [userModalVisible, setUserModalVisible] = useState(false);

  return (
    <main className="row-container">
      <Panel
        userModalVisible={userModalVisible}
        setUserModalVisible={setUserModalVisible}
      />
      <div className="app-right">
        <div className="app-right-header">
          <div className="nav-container">
            <p>Previous Issue</p>
            <p>Next Issue</p>
          </div>
          <h3>Mark as complete</h3>
        </div>

        <div className="report-container main-container container">
          <h3>Report</h3>
          <h3>THE ID IS {id}</h3>

          <div className="part-container"></div>

          <div className="additional-info">
            <h3>Additional Info</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              dolor lacus. Integer vitae rhoncus odio, vel ultricies eros. Proin
              libero eros, pretium at volutpat pretium, iaculis ut lectus.
              Mauris elit ipsum, convallis id lectus id, fringilla euismod
              augue.
            </p>
          </div>

          <div className="attachments"></div>
        </div>

        <div className="discussion-container container">
          <div className="discussion-header">
            <h3>Discussion</h3>
            <button>Create new discussion</button>
          </div>

          <NewDiscussion />

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

export default IssuePage;
