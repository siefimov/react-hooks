import React from "react";

import { API_KEY } from "../constants/api";

const News = () => {
  const handlFetch = async () => {
    const resp = await fetch("https://newsapi.org/v2/top-headlines/sources?apiKey=" + API_KEY);
    console.log(resp);
   
  };

  return (
    <>
      <button onClick={handlFetch}>button</button>
    </>
  );
};

export default News;
