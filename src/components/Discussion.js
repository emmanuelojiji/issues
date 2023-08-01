import React, { useEffect, useState } from "react";
import "./Discussion.scss";
import Comment from "./Comment";
import ReplyTo from "./ReplyTo";
import { Users } from "../Users";

const Discussion = ({
  discussion,
  setUserModalVisible,
  setSelectedUser,
  selectedUser,
}) => {
  const [replyToVisivle, setReplyToVisible] = useState(false);

  const [replyToName, setReplyToName] = useState();
  const [replyToMessage, setReplyToMessage] = useState();

  return (
    <div className="comments-container main-container container">
      {discussion.map((comment) => {
        const user = Users.find((u) => u.id === comment.id);
        return (
          <Comment
            setUserModalVisible={setUserModalVisible}
            setSelectedUser={setSelectedUser}
            selecteduser={selectedUser}
            changeUser={user.id}
            name={comment.name}
            message={comment.message}
            avatarImage={user.avatar}
            userId={user.id}
            setReplyToVisible={setReplyToVisible}
            replyOnClick={() => {
              setReplyToVisible(true);
              setReplyToName(comment.name);
              setReplyToMessage(comment.message);
            }}
          />
        );
      })}

      {replyToVisivle && (
        <ReplyTo replyToName={replyToName} replyToMessage={replyToMessage} />
      )}
    </div>
  );
};

export default Discussion;
