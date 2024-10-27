import React from "react";
import AcctionButton from "../comments/AcctionButton";
import { on } from "events";

const Input = ({ placeholder, onChange, name }: any) => {
  return (
    <>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full p-4 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
    </>
  );
};

export default Input;
