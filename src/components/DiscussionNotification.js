import React from "react";
import "./DiscussionNotification.scss";
import Comment from "./Comment";

const DiscussionNotification = ({ name, message, replyName, replyMessage }) => {
  return (
    <div>
      <div className="discussion-notification-original">
        <Comment name={name} message={message} />
      </div>
      <div className="discussion-notification-reply">
        <Comment name={replyName} message={replyMessage} />
      </div>
    </div>
  );
};

export default DiscussionNotification;
