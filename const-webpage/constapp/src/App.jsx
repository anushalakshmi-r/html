import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import VRSection from "./components/VRSection";
import HowItWorks from "./components/HowItWorks";
import BankingPartners from "./components/BankingPartners";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import AllProjects from "./components/AllProjects";
import CompanyStory from "./components/CompanyStory";
import Contact from "./components/Contact";

import "./App.css";


function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <VRSection />
      <HowItWorks />
      <BankingPartners />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}


function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <AllProjects />
              <Footer />
            </>
          }
        />

          <Route
             path="/about-company"
             element={
    <>
      <Navbar />
      <CompanyStory />
      <Footer />
    </>
  }
/>
<Route
  path="/contact"
  element={
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  }
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;