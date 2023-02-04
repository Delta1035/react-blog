/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2022-12-23 13:12:41
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-04 23:08:15
 * @FilePath: \react-blog\src\pages\home\home.page.tsx
 * @Description:
 *
 */
import Footer from "@src/components/footer";
import React, { Suspense } from "react";
import "./home.css";
// import delta from "@public/assets/images/Delta_header_transparent.png";
import delta_logo from "@public/assets/images/delta_logo.png";
import { Outlet } from "react-router-dom";
import { Spin } from "antd";

const Home: React.FC = ({}) => {
  return (
    <div className="home">
      <header>
        <img src={delta_logo} alt="delta"></img>
        <h3>学习记录踩坑备份博客</h3>
      </header>
      <div className="content">
        <aside></aside>
        <article>
          <Suspense fallback={<Spin />}>
            <Outlet />
          </Suspense>
        </article>
        <aside></aside>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
