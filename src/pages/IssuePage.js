import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Comment from "../components/Comment";
import NewDiscussion from "../components/NewDiscussion";
import IssuePagePanel from "../components/IssuePagePanel";
import "./IssuePage.scss";
import UserModal from "../components/UserModal";
import { Issues } from "../Data";
import { Users } from "../Users";
import ReplyTo from "../components/ReplyTo";
import Discussion from "../components/Discussion";

const IssuePage = ({ selectedUser, setSelectedUser }) => {
  const { id } = useParams();

  const [newDiscussionVisible, setNewDiscussionVisible] = useState();

  const [userModalVisible, setUserModalVisible] = useState(false);

  const selectedIssue = Issues.find((issue) => issue.id === id);

  const selectedIssueDiscussions = selectedIssue.discussions;

  const userId = selectedIssueDiscussions.map((comment) => comment.id);

  const [issueResolved, setIssueResolved] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href;

    const splitUrl = currentUrl.split("#");
    console.log(splitUrl);
    const commentId = splitUrl.pop();
    console.log(commentId);

    const targetComment = document.getElementById(commentId);

    if (targetComment) {
      setTimeout(() => {
        targetComment.scrollIntoView({
          behaviour: "smooth",
        });
      }, 100);
    }
  });

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
          issueResolved={issueResolved}
        />
        <div className="app-right">
          <div className="issue-page-header">
            <div className="nav-container">
              <Link to="/" className="text-button">Back</Link>
              <div className="nav-container-right">
                <p className="text-button">Previous Issue</p>
                <p className="text-button">Next Issue</p>
              </div>
            </div>
            <div className="mark-as-complete-container">
              <h3>
                {issueResolved
                  ? "This issue has been resolved."
                  : "Mark as resolved"}
              </h3>
              {!issueResolved && (
                <div
                  className="mark-as-complete-circle"
                  onClick={() => setIssueResolved(true)}
                ></div>
              )}
            </div>
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

            <div className="additional-info main-container">
              <h3 className="sub-heading">Additional Info</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget dolor lacus. Integer vitae rhoncus odio, vel ultricies
                eros. Proin libero eros, pretium at volutpat pretium, iaculis ut
                lectus. Mauris elit ipsum, convallis id lectus id, fringilla
                euismod augue.
              </p>
            </div>

            <div className="attachments">
              <h3 className="sub-heading">Attachments</h3>
              {selectedIssue.attachments.map((image) => (
                <img src={image} />
              ))}
            </div>
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
              <Discussion
                discussion={discussion}
                setUserModalVisible={setUserModalVisible}
                setSelectedUser={setSelectedUser}
                selectedUser={selectedUser}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default IssuePage;
