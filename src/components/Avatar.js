import React from "react";
import "./Avatar.scss";

const Avatar = ({
  onClick,
  size,
  avatarImage,
  opacity,
  setUserModalVisible,
  selectUser,
}) => {
  return (
    <div
      className="avatar"
      onClick={onClick}
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
