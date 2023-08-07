import React, { useEffect, useRef, useState } from "react";
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

  const userId = selectedIssueDiscussions?.map((comment) => comment.id);

  const [issueResolved, setIssueResolved] = useState(false);

  const [imagePreviewVisible, setImagePreviewVisible] = useState(false);
  const [imageId, setImageId] = useState();
  const chosenImage = selectedIssue.attachments?.find(
    (image) => image.id === imageId
  );

  const [cursorPosition, setCursorPosition] = useState({ x: 0 });

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
  }, []);

  const handleScroll = () => {
    console.log(app_right_ref.current.scrollTop);
    if (app_right_ref.current.scrollTop > 400) {
      setShowReportInSidebar(true);
    } else {
      setShowReportInSidebar(false);
    }

    if (app_right_ref.current.scrollTop > 50) {
      setShowScrollIndicator(false);
    } else {
      setShowScrollIndicator(true);
    }
  };

  const app_right_ref = useRef();

  const [showReportInSidebar, setShowReportInSidebar] = useState(false);

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  return (
    <>
      <div
        className={`scroll-indicator ${
          showScrollIndicator ? "slide-in" : "slide-out"
        }`}
      >
        Scroll for discussion
      </div>
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
          showReportInSidebar={showReportInSidebar}
        />
        <div
          className="app-right"
          ref={app_right_ref}
          onScroll={() => handleScroll()}
        >
          <div className="issue-page-header">
            <div className="nav-container">
              <Link to="/" className="text-button">
                Back
              </Link>
              <div className="nav-container-right">
                <p className="text-button">Previous Issue</p>
                <p className="text-button">Next Issue</p>
              </div>
            </div>
            <div className="mark-as-complete-container">
              <h3>
                {issueResolved
                  ? "This issue has been resolved"
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
              {selectedIssue.fields?.map((field, fieldIndex) => (
                <div key={fieldIndex} className="row">
                  <h3>{field.heading}</h3>
                  <p style={{ color: issueResolved ? "#60a350" : "#E3144B" }}>
                    {field.content}
                  </p>
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
              {selectedIssue.attachments?.map((image) => (
                <img
                  src={image.src}
                  onMouseOver={() => {
                    setImagePreviewVisible(true);
                    setImageId(image.id);
                  }}
                  style={{
                    left: cursorPosition.x,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="discussion-container container">
            <div className="discussion-header">
              <h3 className="heading">Discussion</h3>
            </div>

            {newDiscussionVisible && <NewDiscussion />}

            <Discussion
              setUserModalVisible={setUserModalVisible}
              setSelectedUser={setSelectedUser}
              selectedUser={selectedUser}
              selectedIssue={selectedIssue}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default IssuePage;
