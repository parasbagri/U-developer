import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      {/* Wrap your application with UserProvider */}
      {/* Provide user data and functions to your components */}
      {/* Example: <ComponentThatNeedsUser /> */}
      <App />
    </UserProvider>
  </BrowserRouter>
);
