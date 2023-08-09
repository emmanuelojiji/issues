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
  commentId,
  selectedIssue,
}) => {
  return (
    <div className="comments-container main-container">
      {selectedIssue.discussions.map((comment) => {
        const user = Users.find((u) => u.id === comment.id);

        return (
          <div key={comment.commentId} className="comment-comment-reply-container">
            <Comment
              setUserModalVisible={setUserModalVisible}
              setSelectedUser={setSelectedUser}
              selecteduser={selectedUser}
              changeUser={user.id}
              name={comment.name}
              role={user.role}
              message={comment.message}
              avatarImage={user.avatar}
              userId={user.id}
              amountOfReplies={comment.replies.length}
              hasReplies={comment.replies}
              replyToName={comment.name}
              replyToMessage={comment.message}
              commentId={comment.commentId}
              commentChildren={
                comment.replies &&
                comment.replies.map((reply) => {
                  const userReply = Users.find((user) => user.id === reply.id);
                  return (
                    <div className="replies-container" key={reply.commentId}>
                      <Comment
                        setUserModalVisible={setUserModalVisible}
                        setSelectedUser={setSelectedUser}
                        selecteduser={selectedUser}
                        changeUser={userReply.id}
                        name={reply.name}
                        role={userReply.role}
                        message={reply.message}
                        avatarImage={userReply.avatar}
                        userId={userReply.id}
                        replyToName={reply.name}
                        replyToMessage={reply.message}
                        
                      />
                    </div>
                  );
                })
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default Discussion;
