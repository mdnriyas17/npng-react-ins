import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contectus from "./pages/Contectus";
import Course from "./pages/Course";
import Notfound from "./pages/Notfound";
import { Routes, Route } from "react-router-dom";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Comminication from "./pages/Communication";
import FullStack from "./pages/FullStack";
import Webdevelopment from "./pages/Webdevelopment";
import Aptitude from "./pages/Aptitude";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contectus" element={<Contectus />} />
        <Route path="/course" element={<Course />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/comminication" element={<Comminication />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/webdevelopment" element={<Webdevelopment />} />
        <Route path="/aptitude" element={<Aptitude />} />
        <Route exact key={"*"} path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
