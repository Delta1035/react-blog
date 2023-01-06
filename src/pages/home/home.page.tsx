import ArticleList from "@src/components/articleList";
import Footer from "@src/components/footer";
import React, { Suspense } from "react";
import "./home.css";
const ArticleListLazyLoadComponent = React.lazy(() => import("../../components/articleList"));
const Home: React.FC = ({}) => {
  return (
    <div className="home">
      <header>
        {/* <h1>Delta</h1> */}
        <nav></nav>
      </header>
      <div className="content">
        <aside></aside>
        <article>
          <Suspense fallback={<div>Loading...</div>}>
            <ArticleListLazyLoadComponent></ArticleListLazyLoadComponent>
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
