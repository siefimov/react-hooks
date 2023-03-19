import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { URL, API_KEY, everything, topHeadlines, sources } from "../constants/api";
import { mockSources } from "../constants/mockSources";
import { DivSources, Ul, Li, Loader } from "../components/Styles";

// https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY
// const response = await fetch(URL + everything + "?q=bitcoin" + "&apiKey=" + API_KEY);

const Home = () => {
  const [newsSources, setNewsSources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <DivSources>
      <Ul>
        {mockSources.map((source, index) => (
          <Li key={`${source.id}${index}`}>
            <Link
              to={`/news/${source.id}`}
              style={{ textDecoration: "none", color: "#1976d2", fontSize: "23px" }}
            >
              {source.name}
            </Link>
          </Li>
        ))}
      </Ul>
      {isLoading && <Loader />}
    </DivSources>
  );
};

export default Home;

// const getNews = async () => {
//   const response = await fetch("https://newsapi.org/v2/top-headlines/sources?apiKey=" + API_KEY);
//   const data = await response.json();
//   const results = await data.sources;
//   setNewsSources(results);
//   console.log(results);
// };
// useEffect(() => {
//   getNews();
// }, []);
