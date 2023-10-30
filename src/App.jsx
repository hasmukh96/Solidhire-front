import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Card1 from "./components/Cards/Card1";
import Card2 from "./components/Cards/Card2";
import Card3 from "./components/Cards/Card3";
import Card4 from "./components/Cards/Card4";
import Card5 from "./components/Cards/Card5";
import Card6 from "./components/Cards/Card6";
import Card7 from "./components/Cards/Card7";
import Card8 from "./components/Cards/Card8";
import Features from "./components/Features";
import Card from "./components/Card";
import Box from "./components/Box";
import Recruitment from "./components/Recruitment";

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
      <Card6 />
      <Card7 />
      <Card8 />
      <Features />
      <Card />
      <Box />
      <Recruitment />
    </div>
  );
};

export default App;
