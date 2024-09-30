import React, { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 1000);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="nav-right">
          <button className="contact-btn" onClick={toggleMenu}>
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
        <div className={`menu ${isOpen ? "open" : ""} ${isClosing ? "close" : ""}`}>
          <button className="contact-btn" onClick={toggleMenu}>
            Toggle Menu
          </button>
          <div className="menu-content">
            <h2>Navigation Links</h2>
            <ul>
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  {item.split("").map((letter, index) => (
                    <span key={index} className="counter-letter">
                      {letter}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;