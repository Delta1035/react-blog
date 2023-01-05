import ArticleList from "@src/components/articleList";
import Footer from "@src/components/footer";
import React from "react";
import "./home.css";
const Home: React.FC = ({}) => {
  return (
    <div className="home">
      <header>
        <nav></nav>
      </header>
      <div className="content">
        <aside></aside>
        <article>
          <ArticleList></ArticleList>
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
