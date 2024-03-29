import React, { useState } from "react";
import "./Comment.scss";
import Avatar from "./Avatar";
import Reaction from "./Reaction";
import ReplyTo from "./ReplyTo";

const Comment = ({
  name,
  message,
  avatarImage,
  setUserModalVisible,
  setSelectedUser,
  userId,
  replyOnClick,
  commentId,
  replyContainerDisplay,
  role,
  commentChildren,
  hasReplies,
  amountOfReplies,
  replyToName,
  replyToMessage,
}) => {
  const [showReplies, setShowReplies] = useState(false);

  const [replyToVisible, setReplyToVisible] = useState(false);

  return (
    <>
      <div className="comment-container" id={commentId}>
        <div className="avatar-right-wrap">
          <Avatar
            size="30px"
            avatarImage={avatarImage}
            setUserModalVisible={setUserModalVisible}
            setSelectedUser={setSelectedUser}
            userId={userId}
          />

          <div className="right">
            <div className="name-job-role-wrap">
              <h4>{name}</h4>
              <div className="job-role">{role}</div>
            </div>
            <p>{message}</p>
            <div
              className="reply-container"
              style={{ display: replyContainerDisplay }}
            >
              {hasReplies && (
                <h5
                  class="show-hide-replies"
                  onClick={() => setShowReplies(!showReplies)}
                >
                  {showReplies
                    ? "Hide replies"
                    : `Show ${amountOfReplies} replies`}
                </h5>
              )}
              <h5 className="reply" onClick={() => setReplyToVisible(true)}>
                Reply
              </h5>
              <Reaction />
            </div>

            {replyToVisible && (
              <ReplyTo
                replyToName={replyToName}
                replyToMessage={replyToMessage}
              />
            )}
          </div>
        </div>
        <p>Mon Aug 07 2023</p>
      </div>

      <div className="replies-container">{showReplies && commentChildren}</div>
    </>
  );
};

export default Comment;
