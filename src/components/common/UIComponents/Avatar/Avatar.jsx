import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Avatar = ({ height, width, imageSource, className }) => {
  return (
    <>
      {imageSource ? (
        <img
          src={imageSource}
          alt=""
          style={{
            height: `${height}px`,
            width: `${width}px`,
          }}
          className={`rounded-full object-cover ${className}`}
        />
      ) : (
        <UserCircleIcon className="h-4 w-4 inline" />
      )}
    </>
  );
};

export default Avatar;
