/*
 * @Author: delta 528491526@qq.com
 * @Date: 2023-02-04 23:49:32
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-04 23:50:59
 * @FilePath: \react-blog\src\components\centerSpin.tsx
 * @Description:
 *
 */
import { Spin } from "antd";
import React from "react";
import styled from "styled-components";
const CenterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function centerSpin() {
  return (
    <CenterWrapper>
      <Spin></Spin>
    </CenterWrapper>
  );
}
