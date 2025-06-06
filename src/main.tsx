import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <main>
        <App />
      </main>
    </BrowserRouter>
  </StrictMode>
);
