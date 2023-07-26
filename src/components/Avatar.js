import React from "react";
import "./Avatar.scss";

const Avatar = ({ onClick, size }) => {
  return (
    <div
      className="avatar"
      onClick={onClick}
      style={{ width: size, height: size }}
    ></div>
  );
};

export default Avatar;
