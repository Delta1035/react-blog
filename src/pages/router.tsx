import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import About from "src/pages/about/about";
import ArticleManage from "src/pages/cms/article-manage/article-manage.page";
import Article from "src/pages/cms/article-manage/article/article";
import Draft from "src/pages/cms/article-manage/draft/draft.page";
import Edit from "src/pages/cms/article-manage/edit/edit.page";
import Category from "src/pages/cms/category/category.page";
import CMS from "src/pages/cms/cms.page";
import Tags from "src/pages/cms/tag/tag.page";
import Three from "src/pages/cms/three/three.page";
import ErrorPage from "src/pages/error.page";
import Home from "src/pages/home/home.page";
import Login from "src/pages/login/login";
import Register from "src/pages/register/register";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
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
    path: "home",
    element: <Home />,
  },
]);

export default router;