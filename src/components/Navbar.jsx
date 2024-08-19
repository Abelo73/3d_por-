import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import "./Navbar.css";

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

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute("id"));
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
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
            {/* <span className="sm:block text-orange-500 ">
              Software Developer
            </span> */}
          </p>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={active === link.id ? "active" : ""}
              onClick={() => setActive(link.id)}
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
                className={active === link.id ? "active" : ""}
                onClick={() => {
                  setToggle(false); // Close the menu when a link is clicked
                  setActive(link.id);
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
