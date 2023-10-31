import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import terminalImage from "../static/logo.svg";

const navStyles = {
  navContainer: {
    backgroundColor: "#343a40",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
  },
  navTitle: {
    display: "flex",
    alignItems: "center",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  navItem: {
    transition: "color 0.3s ease",
  },
  navItemHover: {
    color: "#007bff",
  },
};

const backgrounds = [
  "#34c759",
  "#ffcc00",
  "#ff9500",
  "#ff3b30",
  "#af52de",
  "#007aff",
];

const getRandomBackground = () => {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  return backgrounds[randomIndex];
};

function Navbar() {
  const [randomBackground, setRandomBackground] = useState(
    getRandomBackground()
  );
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setRandomBackground(getRandomBackground());
    }, 1000); // change every 5 seconds

    return () => clearInterval(timer); // cleanup timer when component unmounts
  }, []);

  const combinedNavStyles = {
    ...navStyles.navContainer,
    backgroundColor: randomBackground,
  };

  return (
    <nav style={combinedNavStyles}>
      <div style={navStyles.navTitle}>
        <img
          src={terminalImage}
          alt="Terminal"
          style={{ width: "500px", marginRight: "15px" }}
        />
      </div>
      <ul style={navStyles.navList}>
        {location.pathname !== "/" && (
          <li style={navStyles.navItem}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
        )}
        {location.pathname !== "/what-we-offer" && (
          <li style={navStyles.navItem}>
            <Link
              to="/what-we-offer"
              style={{ color: "white", textDecoration: "none" }}
            >
              What we offer
            </Link>
          </li>
        )}
        {location.pathname !== "/contact-us" && (
          <li style={navStyles.navItem}>
            <Link
              to="/contact-us"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact us
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
