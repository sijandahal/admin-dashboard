import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-7xl w-full m-auto px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
