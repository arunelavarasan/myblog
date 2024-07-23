import "./App.css";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPages from "./pages/AboutPages";
import ArticlePages from "./pages/ArticlePages";
import ArticleListPages from "./pages/AricleListPages";
import NavBar from './pages/NavBar';
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPages />} />
            <Route path="/articles" element={<ArticleListPages />} />
            <Route path="/articles/:articleId" element={<ArticlePages />} />
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
