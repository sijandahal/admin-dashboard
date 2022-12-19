import React from "react";
import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

const Image = ({ imageSource, className }) => {
  const [imageLoading, setimageLoading] = useState(true);
  return (
    <img
      src={!imageLoading ? `${imageSource}` : <PhotoIcon />}
      alt=""
      className={`object-cover ${className}`}
      onLoad={() => setimageLoading(false)}
    />
  );
};

export default Image;
