import React from "react";
import "./DiscussionNotification.scss";
import Comment from "./Comment";

const DiscussionNotification = ({ name, message, replyName, replyMessage, originalUserAvatarImage, replyAvatarImage }) => {
  return (
    <div>
      <div className="discussion-notification-original">
        <Comment name={name} message={message} avatarImage={originalUserAvatarImage}/>
      </div>
      <div className="discussion-notification-reply">
        <Comment name={replyName} message={replyMessage} avatarImage={replyAvatarImage} />
      </div>
    </div>
  );
};

export default DiscussionNotification;
