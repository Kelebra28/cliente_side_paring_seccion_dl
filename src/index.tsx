import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <div className="min-h-screen bg-gradient-to-t from-gray-600 via-gray-700 to-gray-800 flex justify-center items-center flex-col">
    <App />
  </div>
);
