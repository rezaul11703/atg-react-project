import React from "react";
import { Col, Row } from "react-bootstrap";
import ArticleFirst from "./ArticleFirst";
import ArticleSecond from "./ArticleSecond";

const Article = () => {
  return (
    <div className="header-nav">
      <Row>
        <Col sm={9}>
          <ArticleFirst></ArticleFirst>
        </Col>
        <Col sm={3}>
          <ArticleSecond></ArticleSecond>
        </Col>
      </Row>
    </div>
  );
};

export default Article;
