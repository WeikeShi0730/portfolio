import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/sidebar/sidebar.component";
import Home from "./components/home/home.component";
// import About from "./components/about/about.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <>
      <ToastContainer autoClose={4000} />
      <div className="fixed top-0 left-0 h-full w-1/12 bg-gray-100">
        <Sidebar />
      </div>
      <div className="absolute inset-y-0 right-0 w-11/12">
        <Home />
        {/* <About /> */}
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
