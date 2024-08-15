import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-shadow" : ""}`}>
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" />
          <p>
            Abel Adisu{" "}
            <span className="sm:block hidden">Software Developer</span>
          </p>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={active === link.title ? "active" : ""}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Icon */}
        <div className="navbar-menu-toggle" onClick={() => setToggle(!toggle)}>
          <img src={toggle ? close : menu} alt="menu" />
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`navbar-menu ${toggle ? "show" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={active === link.title ? "active" : ""}
                onClick={() => {
                  setToggle(false); // Close the menu when a link is clicked
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
