import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
