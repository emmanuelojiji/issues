import React from "react";
import "./ReplyTo.scss";

const ReplyTo = ({replyToName, replyToMessage}) => {
  return (
    <div>
      <p className="replying-to-text">Replying to {replyToName}: {replyToMessage}</p>
      <div className="reply-to-input-container">
        <input type="text" placeholder="Start reply.."></input>
        <button>Send reply</button>
      </div>
    </div>
  );
};

export default ReplyTo;
