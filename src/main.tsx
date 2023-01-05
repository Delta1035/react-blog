import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { GlobalContext } from "./context/GlobalContext";
import Keycloak from "keycloak-js";
import App from "./App";
window.addEventListener("error", (error) => {
  console.log("window", error);
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <GlobalContext.Provider
    value={{
      keycloak: new Keycloak({
        url: "https://124.221.95.189:8443/auth",
        realm: "delta",
        clientId: "react-blog",
      }),
    }}
  >
    <App>
      <RouterProvider router={router} />
    </App>
  </GlobalContext.Provider>
  // </React.StrictMode>
);
