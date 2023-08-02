import React from "react";
import "./Avatar.scss";

const Avatar = ({
  size,
  avatarImage,
  opacity,
  setUserModalVisible,
  setSelectedUser,
  userId,
  avatarDisplay
}) => {
  return (
    <img
      src={avatarImage}
      className="avatar"
      onClick={() => {
        setUserModalVisible(true);
        setSelectedUser(userId);
      }}
      style={{
        width: size,
        height: size,
        opacity: opacity,
        display: avatarDisplay,
      }}
    ></img>
  );
};

export default Avatar;
