import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/general.css";
import "./styles/animations.css";

const container = document.getElementById("root");
const root = createRoot(container);
<React.StrictMode>{root.render(<App />)}</React.StrictMode>;
