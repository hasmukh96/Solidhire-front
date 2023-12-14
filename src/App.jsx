import React from "react";
import Home from "./page/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./page/Blog";
import Navbar from "./components/Navbar";
import Ebooks from "./page/Ebooks";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Ebooks />} path="/ebooks" />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
