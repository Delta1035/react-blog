import { createBrowserRouter, Navigate } from "react-router-dom";
import Register from "./shared/components/register";
import ArticleManage from "./blog/cms/article-manage/article-manage.page";
import Article from "./blog/cms/article-manage/article/article";
import Draft from "./blog/cms/article-manage/draft/draft.page";
import Edit from "./blog/cms/article-manage/edit/edit.page";
import Category from "./blog/cms/category/category.page";
import CMS from "./blog/cms/cms.page";
import Tags from "./blog/cms/tag/tag.page";
import Three from "./blog/cms/three/three.page";
import About from "./shared/components/about";
import Home from "./blog/home/home.page";
import Login from "./shared/components/login";
import ErrorPage from "./shared/components/error.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/cms"} />,
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
        element: <Navigate to={"three"} />,
      },
      {
        path: "article-manage",
        element: <ArticleManage />,
        children: [
          {
            path: "edit",
            element: <Edit />,
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
        index: true,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;