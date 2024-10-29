import React from "react";
import ReactDOM from "react-dom";
import { Loader } from "./loader";
export const LoaderModal: React.FC = () => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    </div>,
    document.getElementById("loader-root") as HTMLElement
  );
};
