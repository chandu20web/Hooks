import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { UserContextProvider } from "./Components/Context/userContext";
import store from "./Redux/store";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </Provider>
);
