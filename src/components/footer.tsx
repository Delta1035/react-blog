import React from "react";
import styled from "styled-components";
const HomeFooter = styled.div`
    border-top: 1px solid gray;
    text-align: center;
    padding: 10px;
`;

export default function footer() {
  return (
    <HomeFooter>
      DCMS ©2022 Created by 
      <a href="https://github.com/Delta1035" target="_black">
      &nbsp;Delta
      </a>
    </HomeFooter>
  );
}
