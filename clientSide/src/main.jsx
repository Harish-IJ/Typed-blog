import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["light", "dark"]}
        >
          <App />
        </ThemeProvider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
