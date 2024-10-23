import React from "react";
import "./styles.css";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";
import Resume from "./Resume";
import Missing from "./Missing";

export default function App() {
  return (
    <main>
      <div>
        <Header />
        <Home />
        <About />
        <Resume />
        <Contact />
        <Footer />
        <Missing />
      </div>
    </main>
  );
}
