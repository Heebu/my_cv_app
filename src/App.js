import React from 'react';
import HeaderSection from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import AllProjects from "./components/Projects";

function App() {
  return (
      <div className="App">
        {/*<HeroHeader />*/}
          <HeaderSection />
          <AboutMe />
          <AllProjects />
          <Footer />
      </div>
  );
}

export default App;
