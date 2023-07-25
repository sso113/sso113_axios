import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: "제목",
  description: "내용내용",
  url: "https://dongduklikelion11.notion.site/f3cd920ed0234cbcb8b6484f9ffbb128?p=fcaa2d278ec74d1bb9582a8d6cb6f122&pm=s",
  urlToImage:
    "https://i.namu.wiki/i/JPjBj5O9GazeoPx1vXS5nUt7AQLZsE6oAPRvFGqPd0p1FKd9WG70v5Rd22w-0af64ZGplG1Kiq625vqtgyBJ1A.webp",
};

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? " " : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2575e2f734354d45b5393c6bad095069`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};
export default NewsList;
