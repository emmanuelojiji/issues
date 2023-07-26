import React from "react";
import "./Comment.scss";
import Avatar from "./Avatar";
import Reaction from "./Reaction";

const Comment = () => {
  return (
    <div className="comment-container">
      <Avatar />

      <div className="right">
        <h4>Ali Alnaimi</h4>
        <p>
          Hello, we have received this part from pos B-01 without a cover.
          Please check the pictures attached in the report.
        </p>
        <div className="reply-container">
          <h5>Reply</h5>
          <Reaction />
        </div>
      </div>
    </div>
  );
};

export default Comment;
