import React from "react";

const CommonButton = ({ children }) => {
  return (
    <button className="bg-primary rounded-full px-7 py-2">
      <a className="text-white text-sm font-semibold">{children}</a>
    </button>
  );
};

export default CommonButton;
