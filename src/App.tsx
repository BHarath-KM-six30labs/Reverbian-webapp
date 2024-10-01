// src/App.js
import { useState } from "react";
import "./App.css";
import HeroSection from "./components/Hero/HeroSection";
import About from "./components/About/About";
import Partnership from "./components/PartnerShip/Partnership";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 1000); // Adjust this timeout to match your animation duration
    } else {
      setIsOpen(true);
    }
  };
  //https://www.figma.com/design/ZmbOiWiwm7qcqT610Byi65/Reverbian?node-id=0-1&node-type=canvas&t=ZjLu8xznU0cguu2O-0
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div
          className="nav-right "
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <button className={`contact-btn ${isOpen ? "!-z-30":""}`} onClick={toggleMenu} >
            Toggle Menu
          </button>
          <button
            className="contact-btn"
            onClick={() => {
              window.alert("Contact");
            }}
          >
            Contact
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className={`menu ${isOpen ? "open" : ""} ${isClosing ? "close" : ""}`}
        >
          {" "}
          <button className="contact-btn !text-white !border-white hover:!text-black " onClick={toggleMenu}>
            Toggle Menu
          </button>
          <div className="menu-content">
            <h2>Navigation Links</h2>

            <ul>
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item} className="menu-item ">
                  {item.split("").map((letter, index) => (
                    <span key={index} className="counter-letter">{letter}</span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          {/* ... rest of your component ... */}
        </div>
      )}
      <HeroSection/>
      <About/>
      <Partnership/>
    </div>
  );
};

export default App;
