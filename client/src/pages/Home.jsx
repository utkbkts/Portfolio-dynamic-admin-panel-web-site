import React, { Suspense } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Exprience from "../components/Exprience";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import MoveUp from "../components/MoveUp";

const Home = () => {
  return (
    <div>
      <section className="h-screen">
        <Hero />
      </section>
      <About />
      <Exprience />
      <Skills />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <MoveUp />
    </div>
  );
};

export default Home;
