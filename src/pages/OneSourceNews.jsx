import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import { API_KEY } from "../constants/api";
import { articles } from "../constants/mockNews";

// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0add832cae774a60a4c47ea0b519bf87

const OneSourceNews = () => {
  const { sources } = useParams();
  const [news, setNews] = useState(articles);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div>
      <h2>{news[0].author}</h2>
      <ul>
        {news.map((item, index) => {
          return (
            <Link to={item.url}>
              <Li key={index}>
                <img src={item.urlToImage} alt={item.author} style={{ width: "200px" }} />
                {/* <Span><b>source:</b> <span>{item.source.name}</span></Span>
                <Span><b>author:</b> {item.author}</Span> */}
                <div style={{ marginLeft: "30px" }}>
                  <P>
                    <h2 style={{ color: "#295589", marginTop: "0px" }}>{item.title}</h2>
                  </P>
                  <P>{item.description}</P>
                </div>
              </Li>
            </Link>
          );
        })}
      </ul>
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
`;

const Li = styled.li`
  display: flex;
  align-items: flex-start;
  list-style: none;
  margin-bottom: 40px;
`;
