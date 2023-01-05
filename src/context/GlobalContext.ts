import Keycloak, { KeycloakInstance } from "keycloak-js";
import React from "react";

export const GlobalContext = React.createContext({
  keycloak: new Keycloak({
    url: "https://124.221.95.189:8443/auth",
    realm: "delta",
    clientId: "react-blog",
  }),
});

export interface GlobalContextValue {
  keycloak: KeycloakInstance;
}
