import React from "react";
import ArticleFirst from "./ArticleFirst";
import ArticleSecond from "./ArticleSecond";

const Article = () => {
  return (
    <div className="header-nav d-flex">
      <ArticleFirst></ArticleFirst>
      <ArticleSecond></ArticleSecond>
    </div>
  );
};

export default Article;
