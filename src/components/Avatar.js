import React from "react";
import "./Avatar.scss";

const Avatar = ({
  onClick,
  size,
  avatarImage,
  setUserModalVisible,
  selectUser,
}) => {
  return (
    <div
      className="avatar"
      onClick={onClick}
      style={{ width: size, height: size, background: `url(${avatarImage}` }}
    ></div>
  );
};

export default Avatar;
