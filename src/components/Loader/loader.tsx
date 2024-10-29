import React from "react";
import { ClipLoader } from "react-spinners";

export const Loader: React.FC = () => {
  return (
    <div>
      <ClipLoader color="#ffffff" size={100} />
    </div>
  );
};
