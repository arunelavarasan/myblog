import articles from "./Article-content";
import ArticleList from "../components/ArticleList";

const ArticleListPages = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articles}/>
    </>
  );
};

export default ArticleListPages;
