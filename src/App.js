import React from 'react';
import HeaderSection from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Marketplace from "./components/Marketplace";
import AllProjects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <AboutMe />
      <Skills />
      <Marketplace />
      <AllProjects />
      <Footer />
    </div>
  );
}

export default App;
