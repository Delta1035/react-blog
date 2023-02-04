/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2022-12-23 13:12:41
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-04 22:51:56
 * @FilePath: \react-blog\src\router.tsx
 * @Description:
 *
 */
import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import About from "./components/about";
import ArticleList from "./components/articleList";
import ErrorPage from "./components/error.page";
import Login from "./components/login";
import Register from "./components/register";
import ArticleManage from "./pages/cms/article-manage/article-manage.page";
import Article from "./pages/cms/article-manage/article/article";
import Draft from "./pages/cms/article-manage/draft/draft.page";
import Edit from "./pages/cms/article-manage/edit/edit.page";
import Category from "./pages/cms/category/category.page";
import CMS from "./pages/cms/cms.page";
import Tags from "./pages/cms/tag/tag.page";
import Three from "./pages/cms/three/three.page";
import ArticleText from "./pages/home/articleText";
import Home from "./pages/home/home.page";
const CMSComponent = React.lazy(() => import("./pages/cms/cms.page"));
const HOMEComponent = React.lazy(()=>import('./pages/home/home.page'));
const ArticleListComponent = React.lazy(()=>import('./components/articleList'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/home"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cms",
    element: <CMSComponent />,
    // element: <CMS></CMS>,
    children: [
      {
        path: "",
        element: <Navigate to={"article-manage"} />,
      },
      {
        path: "article-manage",
        element: <ArticleManage />,
        children: [
          {
            path: "edit",
            element: <Edit />,
            index: true,
          },
          {
            path: "draft",
            element: <Draft />,
          },
          {
            path: "article",
            element: <Article />,
          },
        ],
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "tags",
        element: <Tags />,
      },
      {
        path: "three",
        element: <Three />,
      },
    ],
  },
  {
    path: "/home",
    element: <HOMEComponent />,
    children: [
      {
        path: "",
        element: <Navigate to={"article-list"}></Navigate>,
      },
      {
        path: "article-list",
        element: <ArticleListComponent></ArticleListComponent>,
      },
      {
        path: "article-text",
        element: <ArticleText></ArticleText>,
        children: [
          {
            path: ":id",
            element: <div></div>,
          },
        ],
      },
    ],
  },
]);

export default router;
