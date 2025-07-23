import React from "react";

import Herosection from "@/components/Section/Herosection";
import Solutions from "@/components/Section/Solutions";
import Leadership from "@/components/Section/Leadership";
import WhyChooseUs from "@/components/Section/WhyChooseUs";
import Contact from "@/components/Section/Contact";
import AboutUs from "@/components/Section/AboutUs";

const Home = () => {
  return (
    <>
      <div className="max-w-screen">
        <Herosection />
        <AboutUs />
        <Solutions />
        <Leadership />
        <WhyChooseUs />
        <Contact />
      </div>
    </>
  );
};

export default Home;
