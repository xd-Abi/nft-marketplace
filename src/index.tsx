import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as GlobalStoreProvider } from "react-redux";
import GlobalStore from "./data/global";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GlobalStoreProvider store={GlobalStore}>
    <App />
  </GlobalStoreProvider>
);
