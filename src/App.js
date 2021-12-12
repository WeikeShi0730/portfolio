import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/nav-bar/nav-bar.component";
import Home from "./components/home/home.component";
import About from "./components/about/about.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <>
      <ToastContainer autoClose={4000} />
      <NavBar />
      <div className="absolute inset-y-0 right-0 w-full">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
