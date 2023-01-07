import ArticleList from "@src/components/articleList";
import Footer from "@src/components/footer";
import React, { Suspense } from "react";
import "./home.css";
import delta from "@public/assets/images/Delta_header_transparent.png";
const ArticleListLazyLoadComponent = React.lazy(
  () => import("../../components/articleList")
);
const Home: React.FC = ({}) => {
  return (
    <div className="home">
      <header>
        <img src={delta} alt="delta"></img>
        <h3>踩坑备份博客</h3>
      </header>
      <div className="content">
        <aside></aside>
        <article>
          <ArticleList></ArticleList>
            {/* <ArticleListLazyLoadComponent></ArticleListLazyLoadComponent> */}
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
