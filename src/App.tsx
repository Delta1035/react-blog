import React, { PropsWithChildren } from "react";
import { GlobalContext, GlobalContextValue } from "./context/GlobalContext";
export interface AppProps {
  children?:React.ReactNode
}
const App: React.FC<AppProps> = (props:AppProps) => {
  const initKeycloak = (value: GlobalContextValue) => {
    const { keycloak } = value;
    console.log('keycloak',keycloak);
    
    keycloak
      .init({ onLoad: "login-required" })
      .then(function (authenticated) {
        console.log(authenticated ? "authenticated" : "not authenticated");
      })
      .catch(function () {
        console.log("failed to initialize");
      });

    setTimeout(function(){
      keycloak
      .updateToken(30)
      .then(function (authentication) {
        console.log('authentication :>> ',authentication);
        // loadData();
      })
      .catch(function () {
        console.log("Failed to refresh token");
      });
    },0)
    return <div style={{width:'100%',height:'100%'}}>{props?.children}</div>;
  };
  return (
    <>
      <GlobalContext.Consumer>
        {(value: GlobalContextValue) => {
          return initKeycloak(value);
        }}
      </GlobalContext.Consumer>
    </>
  );
};

export default App;
