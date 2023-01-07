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
      <div className="github">
        博客代码:
        <p>
          <a href="https://github.com/Delta1035/react-blog" target="_blank">
            前端: react-blog
          </a>
        </p>
        <p>
          <a
            href="https://github.com/Delta1035/express-blog"
            target="_blank"
          >
            后端: express-blog
          </a>
        </p>
      </div>
      <div>
        DCMS ©2022 Created by
        <a href="https://github.com/Delta1035" target="_black">
          &nbsp;Delta
        </a>
      </div>
    </HomeFooter>
  );
}
