import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* Importar CSS */
import "./index.css";
import "./App.css";

/* Importar App */
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
