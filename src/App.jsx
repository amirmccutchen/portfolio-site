import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Occupations from "./components/Occupations";
import Portfolio from "./components/Portfolio";

function App() {

  return (
    <div className="App">
      <Introduction />
      <Portfolio />
      <Occupations />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
