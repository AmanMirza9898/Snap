import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Bridge from "./components/Bridge";
import Methodology from "./components/Methodology";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ImmersiveScroll from "./components/ImmersiveScroll";

const Home = () => (
  <>
    <ImmersiveScroll />
    <Hero />
    <Expertise />
    <Bridge />
    <Methodology />
    <Portfolio />
    <About />
    <Testimonials />
    <Contact />
  </>
);

export default Home;
