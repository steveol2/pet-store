import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingBox = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <FaSpinner className="text-4xl text-blue-500 animate-spin" />
        <p className="mt-2">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingBox;
