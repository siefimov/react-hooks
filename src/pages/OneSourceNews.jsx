import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import { API_KEY } from "../constants/api";
import { articles } from "../constants/mockNews";

// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0add832cae774a60a4c47ea0b519bf87

const OneSourceNews = () => {
  const { sources } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNews = async () => {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${API_KEY}`
    );

    if (response.status !== "ok") {
      setLoading(false);
      setError("Error happend... :(");
      return;
    }

    setLoading(false);
    const data = await response.json();
    setNews(data.articles);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <h2 stylw={{ textAlign: "center" }}>{news[0].author}</h2>
      <ul>
        {news.map((item, index) => {
          return (
            <Link key={index} to={item.url}>
              <Li>
                <img src={item.urlToImage} alt={item.author} style={{ width: "200px" }} />

                <div style={{ marginLeft: "30px" }}>
                  <P>
                    <h2 style={{ color: "#2976bb", marginTop: "0px" }}>{item.title}</h2>
                  </P>
                  <P>{item.description}</P>
                </div>
              </Li>
            </Link>
          );
        })}
      </ul>
      {loading && "Loading ..."}
    </div>
  );
};

export default OneSourceNews;

// const getNews = async () => {
//   const response = await fetch(
//     `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${API_KEY}`
//   );
//   const data = await response.json();
//   const articles = data.articles;
//   setNews(articles);
// };

// useEffect(() => {
//   getNews();
// }, []);

const P = styled.span`
  display: inline-block;
  color: #141414;
`;

const Li = styled.li`
  display: flex;
  align-items: flex-start;
  list-style: none;
  margin-bottom: 40px;
`;
