import React from "react";

const Loader = ({ width = "w-full", height = "h-6", rounded = "rounded-xm" }) => {
  return (
    <div className={`bg-gray-300 ${width} ${height} ${rounded} animate-pulse`} />
  );
};

export default Loader;
