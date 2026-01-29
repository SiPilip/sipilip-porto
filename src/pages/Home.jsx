import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
