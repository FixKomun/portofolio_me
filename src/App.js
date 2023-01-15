import React from "react";
import { Route, Routes, useLocation, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
//Components

import GlobalStyle from "./components/globalStyle";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Project1 from "./pages/Project-1";
import Project2 from "./pages/Project-2";
import Project3 from "./pages/Project-3";
import Project4 from "./pages/Project-4";
import Project5 from "./pages/Project-5";
import Success from "./components/success";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  const excludedRoutes = "/my-projects";
  return (
    <div className="App">
      <GlobalStyle />
      {!location.pathname.includes(excludedRoutes) && <Nav />}
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about-me" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/my-projects/project-1" element={<Project1 />} />
          <Route exact path="/my-projects/project-2" element={<Project2 />} />
          <Route exact path="/my-projects/project-3" element={<Project3 />} />
          <Route exact path="/my-projects/project-4" element={<Project4 />} />
          <Route exact path="/my-projects/project-5" element={<Project5 />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
