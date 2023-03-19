import { Routes, Router, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import OneSourceNews from "./pages/OneSourceNews";
import NotFound from "./pages/NotFound";

import ROUTES from "./constants/routes";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.NEWS.DEFAULT} element={<News />} />
        <Route path={ROUTES.NEWS.ONE_NEWS_SOURCE} element={<OneSourceNews />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
