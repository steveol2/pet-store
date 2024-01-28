import React from "react";

const MessageBox = ({ variant, children }) => {
  return (
    <div
      className={`p-4 border ${
        variant === "error"
          ? "border-red-500 bg-red-100"
          : "border-blue-500 bg-blue-100"
      }`}
    >
      {children}
    </div>
  );
};

export default MessageBox;
