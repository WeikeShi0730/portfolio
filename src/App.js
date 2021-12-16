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
import { SiDeviantart } from "react-icons/si";

function App() {
  return (
    <>
      <ToastContainer autoClose={4000} />
      {/* <div className="bg-[url('../public/assets/images/background.jpeg')]"> */}
        {/* <img
        src="/assets/images/background.jpeg"
        className="fixed bg-center bg-cover z-50"
        alt="bg-color"
      /> */}
        <NavBar />
        <div>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      {/* </div> */}
    </>
  );
}

export default App;
