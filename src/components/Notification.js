import React from "react";
import "./Notification.scss";
import icon_closed from "../media/icon-closed.svg";
import icon_email from "../media/icon-email.svg";
import icon_heart from "../media/icon-heart.svg";
import icon_split from "../media/icon-split.svg";
import icon_tick from "../media/icon-tick.svg";
import DiscussionNotification from "./DiscussionNotification";

const Notification = ({
  notification_type,
  system_type,
  message,
  name,
  replyName,
  replyMessage,
  originalUserAvatarImage,
  replyAvatarImage,
  issueId,
  commentId,
}) => {
  let icon;

  if (system_type === "issue_closed") {
    icon = icon_closed;
  } else if (system_type === "split_job") {
    icon = icon_split;
  } else if (system_type === "tracking_email_sent") {
    icon = icon_email;
  } else if (system_type === "issue_resolved") {
    icon = icon_tick;
  }

  return notification_type === "system" ? (
    <div className="notification">
      <div className="icon">
        <img src={icon} alt="Notification Icon" />
      </div>
      {message}
    </div>
  ) : (
    <DiscussionNotification
      name={name}
      message={message}
      replyName={replyName}
      replyMessage={replyMessage}
      originalUserAvatarImage={originalUserAvatarImage}
      replyAvatarImage={replyAvatarImage}
      issueId={issueId}
      commentId={commentId}
    />
  );
};

export default Notification;
