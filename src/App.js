import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import HomePage from "./components/HomePage";
import WhatWeOffer from "./components/WhatWeOffer";
import GlobalStyles from "./components/GlobalStyles";
import CrazyBackground from "./components/CrazyBackground";

function App() {
  const theme = {
    color: "white",
    backgroundColor: "black",
  };

  return (
    <Router>
      <GlobalStyles theme={theme} />
      <CrazyBackground />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/what-we-offer" element={<WhatWeOffer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
