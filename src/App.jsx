import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contectus from "./pages/Contectus";
import Course from "./pages/Course";
import Notfound from "./pages/Notfound";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contectus" element={<Contectus />} />
        <Route path="/course" element={<Course />} />
        <Route exact key={"*"} path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
