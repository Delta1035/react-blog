import { Tag } from "antd";
import { createBrowserRouter } from "react-router-dom";
import ArticleManage from "src/pages/cms/article-manage/article-manage.page";
import Category from "src/pages/cms/category/category.page";
import CMS from "src/pages/cms/cms.page";
import ErrorPage from "src/pages/error.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CMS />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/cms",
        element: <CMS />,
        children: [
          {
            path: "/cms/article-manage",
            element: <ArticleManage />,
            children: [],
          },
          {
            path: "/cms/category",
            element: <Category />,
          },
          {
            path: "./tag",
            element: <Tag />,
          },
        ],
      },
      {
        path: "",
        element:<CMS />
      },
    ],
  },
]);

export default router;
