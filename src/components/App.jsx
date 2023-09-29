import React from "react";
import { ReactDOM } from "react-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";

function App() {
    return (
        <div>
            <Navbar1 />
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;