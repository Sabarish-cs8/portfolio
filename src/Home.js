import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  const names = ["Java developer", "developer", "Web developer", "Editor"];
  const [index, setIndex] = useState(0);
  const [name, setName] = useState(names[0]);
  const handleNameChange = () => {
    setName(names[index]);
    setIndex((prevIndex) => (prevIndex + 1) % names.length);
  };
  useEffect(() => {
    const interval = setInterval(handleNameChange, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div className="home">
      <h1>
        <b>SABARISH C S</b>
      </h1>
      <div>
        <p>I'm {name}</p>
        <div className="icons-container">
          <a
            href="https://github.com/Sabarish-cs8"
            target="github"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/sabarish-cs"
            target="Linkedin"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="instagram"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
