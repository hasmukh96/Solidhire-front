import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
};

export default App;
