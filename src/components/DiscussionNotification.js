import React from "react";
import "./DiscussionNotification.scss";
import Comment from "./Comment";
import { Link } from "react-router-dom";

const DiscussionNotification = ({
  name,
  message,
  replyName,
  replyMessage,
  originalUserAvatarImage,
  replyAvatarImage,
  issueId,
  commentId,
}) => {

  return (
    <Link to={`issue/${issueId}/#${commentId}`}>
      <div className="discussion-notification-original">
        <Comment
          name={name}
          message={message}
          avatarImage={originalUserAvatarImage}
        />
      </div>
      <div className="discussion-notification-reply">
        <Comment
          name={replyName}
          message={replyMessage}
          avatarImage={replyAvatarImage}
        />
      </div>
    </Link>
  );
};

export default DiscussionNotification;
