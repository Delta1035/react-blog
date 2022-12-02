import {
  AppstoreOutlined,
  CopyOutlined,
  DesktopOutlined,
  EditOutlined,
  FileOutlined,
  NumberOutlined,
  PieChartOutlined,
  TagsOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "../home/home.page";
import "./cms.page.css";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem(
    <Link to="article-manage">文档管理</Link>,
    "article-manage",
    <AppstoreOutlined />,
    [
      getItem(
        <Link to="article-manage/edit">编辑</Link>,
        "edit",
        <EditOutlined />
      ),
      getItem(
        <Link to="article-manage/draft">草稿</Link>,
        "draft",
        <CopyOutlined />
      ),
      getItem(
        <Link to="article-manage/article">所有文章</Link>,
        "article",
        <DesktopOutlined />
      ),
    ]
  ),
  getItem(<Link to="category">分类</Link>, "category", <NumberOutlined />),
  getItem(<Link to="tags">标签</Link>, "tag", <TagsOutlined />),
  getItem(<Link to="three">three.js demo</Link>, "three", <TagsOutlined />),
];
export default function CMS() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 0px", overflowY: "scroll" }}>
            <div
              className="cms-content"
              style={{ padding: 24, minHeight: 350 }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            DCMS ©2022 Created by <a href="https://github.com/Delta1035" target="_black">
              Delta
            </a>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
