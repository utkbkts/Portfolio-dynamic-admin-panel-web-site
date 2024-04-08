import React, { Suspense, useEffect, useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Exprience from "../components/Exprience";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import MoveUp from "../components/MoveUp";
import RatingMessage from "../components/RatingMessage";
import { useAuth0 } from "@auth0/auth0-react";
import Reviews from "../components/Reviews";
import ReviewsMessage from "../components/ReviewsMessage";

const Home = () => {
  const [ratingMessage, setRatingMessage] = useState(false);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        setRatingMessage(false);
      } else {
        setRatingMessage(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [user]);
  return (
    <div>
      {ratingMessage && <RatingMessage setRatingMessage={setRatingMessage} />}
      <section className="h-screen">
        <Hero />
      </section>
      <ReviewsMessage />
      {user ? <Reviews /> : ""}
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
