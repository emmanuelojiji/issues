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
  selecteduser,
  changeUser
}) => {
  return (
    <div className="comment-container">
      <Avatar
        size="30px"
        avatarImage={avatarImage}
        onClick={() => {
          setUserModalVisible(true);
          setSelectedUser(changeUser);
        }}
      />

      <div className="right">
        <h4>{name}</h4>
        <p>{message}</p>
        <div className="reply-container">
          <h5>Reply</h5>
          <Reaction />
        </div>
      </div>
    </div>
  );
};

export default Comment;
