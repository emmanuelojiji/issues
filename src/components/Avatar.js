import React from "react";
import "./Avatar.scss";

const Avatar = ({
  onClick,
  size,
  avatarImage,
  opacity,
  setUserModalVisible,
  setSelectedUser,
  userId,
}) => {
  return (
    <div
      className="avatar"
      onClick={() => {
        setUserModalVisible(true);
        setSelectedUser(userId);
      }}
      style={{
        width: size,
        height: size,
        background: `url(${avatarImage}`,
        opacity: opacity,
      }}
    ></div>
  );
};

export default Avatar;
