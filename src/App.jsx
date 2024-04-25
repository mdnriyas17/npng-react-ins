import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contectus from "./pages/Contectus";
import Course from "./pages/Course";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contectus" element={<Contectus />} />
        <Route path="*" element={<Course />} />
      </Routes>
    </>
  );
};

export default App;
