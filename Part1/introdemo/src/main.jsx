import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Interfase from "./Interfase.jsx";
// import App from "./App.jsx";
import AppCounter from "./AppClickHandle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Interfase />
  </StrictMode>
);
