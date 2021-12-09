import React from "react";
import Sidebar from "./components/sidebar/sidebar.component";
import Home from "./components/home/home.component";
// import About from "./components/about/about.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-1/12">
        <Sidebar />
      </div>
      <div className="absolute inset-y-0 right-0 w-11/12">
        <Home />
        {/* <About /> */}
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
