import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather App </h1>
    <div className="App">
      <p>
        <Search />
      </p>
    </div>
  </StrictMode>
);
