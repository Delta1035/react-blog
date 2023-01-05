import { createBrowserRouter, Navigate } from "react-router-dom";
import ArticleManage from "./blog/cms/article-manage/article-manage.page";
import Article from "./blog/cms/article-manage/article/article";
import Draft from "./blog/cms/article-manage/draft/draft.page";
import Edit from "./blog/cms/article-manage/edit/edit.page";
import Category from "./blog/cms/category/category.page";
import CMS from "./blog/cms/cms.page";
import Tags from "./blog/cms/tag/tag.page";
import Three from "./blog/cms/three/three.page";
import Home from "./blog/home/home.page";
import About from "./components/about";
import ErrorPage from "./components/error.page";
import Login from "./components/login";
import Register from "./components/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/home"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cms",
    element: <CMS />,
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
    element: <Home />,
  },
]);

export default router;
