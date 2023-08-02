import React from "react";
import "./Comment.scss";
import Avatar from "./Avatar";
import Reaction from "./Reaction";

const Comment = ({
  name,
  message,
  avatarImage,
  setUserModalVisible,
  setSelectedUser,
  userId,
  replyOnClick,
  commentId,
  replyContainerDisplay
}) => {
  return (
    <div className="comment-container" id={commentId}>
      <Avatar
        size="30px"
        avatarImage={avatarImage}
        setUserModalVisible={setUserModalVisible}
        setSelectedUser={setSelectedUser}
        userId={userId}
      />

      <div className="right">
        <h4>{name}</h4>
        <p>{message}</p>
        <div className="reply-container" style={{display: replyContainerDisplay}}>
          <h5 className="reply" onClick={replyOnClick}>Reply</h5>
          <Reaction />
        </div>
      </div>
    </div>
  );
};

export default Comment;
