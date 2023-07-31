import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import NewDiscussion from "../components/NewDiscussion";
import IssuePagePanel from "../components/IssuePagePanel";
import "./IssuePage.scss";
import UserModal from "../components/UserModal";
import { Issues } from "../Issues";

const IssuePage = ({ selectedUser, setSelectedUser }) => {
  const { id } = useParams();

  const [newDiscussionVisible, setNewDiscussionVisible] = useState();

  const [userModalVisible, setUserModalVisible] = useState(false);

  const selectedIssue = Issues.find((issue) => issue.id === id);

  return (
    <>
      {userModalVisible && (
        <UserModal
          setUserModalVisible={setUserModalVisible}
          selectedUser={selectedUser}
        />
      )}
      <main className="row-container">
        <IssuePagePanel
          userModalVisible={userModalVisible}
          setUserModalVisible={setUserModalVisible}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          issueId={id}
        />
        <div className="app-right">
          <div className="app-right-header">
            <div className="nav-container">
              <p className="text-button">Previous Issue</p>
              <p className="text-button">Next Issue</p>
            </div>
            <h3>Mark as complete</h3>
          </div>

          <div className="report-container main-container container">
            <h3 className="heading">Report</h3>

            <div className="part-container">
              {selectedIssue.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="row">
                  <h2>{field.heading}</h2>
                  <p>{field.content}</p>
                </div>
              ))}
            </div>

            <div className="additional-info">
              <h3 className="sub-heading">Additional Info</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget dolor lacus. Integer vitae rhoncus odio, vel ultricies
                eros. Proin libero eros, pretium at volutpat pretium, iaculis ut
                lectus. Mauris elit ipsum, convallis id lectus id, fringilla
                euismod augue.
              </p>
            </div>

            <div className="attachments sub-heading"></div>
          </div>

          <div className="discussion-container container">
            <div className="discussion-header">
              <h3 className="heading">Discussion</h3>
              <button onClick={() => setNewDiscussionVisible(true)}>
                Create new discussion
              </button>
            </div>

            {newDiscussionVisible && <NewDiscussion />}

            {selectedIssue.discussions.map((discussion) => (
              <div className="comments-container main-container container">
                {discussion.map((comment) => (
                  <Comment name={comment.name} message={comment.message} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default IssuePage;
