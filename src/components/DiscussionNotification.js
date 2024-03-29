import React from "react";
import "./DiscussionNotification.scss";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import icon_comment from "../media/icon-comment.svg";

const DiscussionNotification = ({
  name,
  message,
  replyName,
  replyMessage,
  originalUserAvatarImage,
  replyAvatarImage,
  issueId,
  commentId,
  replyUserRole,
  originalUserRole,
}) => {
  return (
    <Link
      to={`issue/${issueId}/#${commentId}`}
      className="discussion-notification"
    >
      <div className="discussion-notification-original">
        <img src={icon_comment} className="icon" />
        <Comment
          name={name}
          message={message}
          avatarImage={originalUserAvatarImage}
          replyContainerDisplay="none"
          role={originalUserRole}
        />
      </div>
      <div className="discussion-notification-reply">
        <Comment
          name={replyName}
          message={replyMessage}
          avatarImage={replyAvatarImage}
          replyContainerDisplay="none"
          role={replyUserRole}
        />
      </div>
    </Link>
  );
};

export default DiscussionNotification;
