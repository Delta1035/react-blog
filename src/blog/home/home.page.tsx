import { FullContainer } from "@src/components/full-container.component";
import React, { Children } from "react";

const Home: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return <FullContainer>{Children}</FullContainer>;
};

export default Home;
