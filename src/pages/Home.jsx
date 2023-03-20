import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination, Alert } from "@mui/material";
import styled from "styled-components";
// import Alert from "@mui/material/Alert";

import { URL, API_KEY, everything, topHeadlines, sources } from "../constants/api";
import { mockSources } from "../constants/mockSources";
import { DivSources, Ul, Li, Loader } from "../components/Styles";

// https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY
// const response = await fetch(URL + everything + "?q=bitcoin" + "&apiKey=" + API_KEY);

const Home = () => {
  const [newsSources, setNewsSources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNews = async () => {
    /***** launch Loading *****/
    setLoading(true);
    // setNewsSources([]);

    const response = await fetch("https://newsapi.org/v2/top-headlines/sources?apiKey=" + API_KEY);
    console.log(response);
    
    // if answer is NOT success
    if (!response.ok) {
      setLoading(false);
      setNewsSources([]);
      setError("unfortunately it was impossible to load requested data");
      return;
    }

    // if answer is success
    const data = await response.json();
    setLoading(false);
    setNewsSources(data.sources);

    const handleClick = (e) => {
      console.log(e.target.innerText);
    };
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <DivSources>
      <Ul>
        {newsSources.map((source, index) => (
          <Li key={`${source.id}${index}`}>
            <SourceLink to={`/news/${source.id}`}>{source.name}</SourceLink>
          </Li>
        ))}
      </Ul>
      {loading && (
        <>
          <Loader /> Loading ...
        </>
      )}
      {error && <Alert severity="error">{error}</Alert>}
      <Pagination count={10} />
    </DivSources>
  );
};

export default Home;

const Error = styled(Alert)``;

const SourceLink = styled(Link)`
  text-decoration: none;
  color: #1976d2;
  font-size: 23px;
`;
