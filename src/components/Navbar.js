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
    padding: "0.2rem 0.2rem",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
  },
  navTitle: {
    display: "flex",
    alignItems: "center",
    img: {
      maxWidth: "100%",
      height: "auto",
    },
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
  buttonStyle: {
    backgroundColor: "black",
    color: "white",
    width: "150px", // Fixed width
    height: "50px", // Fixed height
    display: "flex", // Using Flexbox for centering text both vertically and horizontally
    alignItems: "center",
    justifyContent: "center",
    padding: "0", // Padding set to 0 because width and height are fixed
    margin: "0 10px 10px 0", // Right and bottom margin for spacing between buttons
    borderRadius: "10px", // Increased for more rounded corners
    border: "2px solid white", // A border can make it more appealing
    textDecoration: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease", // Added transform transition
    "&:hover": {
      backgroundColor: "#555", // Darker on hover
      transform: "scale(1.05)", // Slightly enlarge when hovered
    },
    "&:active": {
      backgroundColor: "#333", // Even darker when clicked
      transform: "scale(0.95)", // Slightly reduce in size when clicked
    },
  },
};

const backgrounds = [
  "#FF5733", // Bright red
  "#33FF57", // Bright green
  "#33C2FF", // Bright blue
  "#FF33F6", // Bright magenta
  "#F3FF33", // Bright yellow
  "#33FFDE", // Bright cyan
  "#FF8333", // Darker red
  "#D733FF", // Darker magenta
  "#33FF83", // Darker green
  "#5B33FF", // Darker blue
  "#FF335B", // Pinkish red
  "#33FFB8", // Turquoise
  "#FF9633", // Orange
  "#33FFDA", // Aquamarine
  "#FF33C2", // Hot pink
  "#33D4FF", // Light blue
  "#6FFF33", // Light green
  "#FF3337", // Scarlet
  "#FF33AB", // Fuchsia
  "#337DFF", // Royal blue
  "#FF5733", // Crimson red
  "#33FFA5", // Mint
  "#7B33FF", // Purple
  "#F4FF33", // Lemon
  "#FF3346", // Rose red
  "#33FF6E", // Lime green
  "#9F33FF", // Orchid
  "#FFA533", // Tangerine
  "#6CFF33", // Chartreuse
  "#FF33E0", // Bright pink
  "#FF3355", // Salmon
  "#33E2FF", // Baby blue
  "#55FF33", // Bright green
  "#ACFF33", // Green-yellow
  "#33FFF7", // Azure
  "#FF33DA", // Bright magenta
  "#4EFF33", // Green
  "#33FF46", // Emerald
  "#FF6E33", // Tomato
  "#FF33A5", // Magenta
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
    }, 1000);

    return () => clearInterval(timer);
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
          style={{ maxWidth: "100%", height: "auto", marginRight: "15px" }}
        />
      </div>
      <ul style={navStyles.navList}>
        {location.pathname !== "/" && (
          <li style={navStyles.navItem}>
            <button style={navStyles.buttonStyle}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </button>
          </li>
        )}
        {location.pathname !== "/what-we-offer" && (
          <li style={navStyles.navItem}>
            <button style={navStyles.buttonStyle}>
              <Link
                to="/what-we-offer"
                style={{ color: "white", textDecoration: "none" }}
              >
                What we offer
              </Link>
            </button>
          </li>
        )}
        {location.pathname !== "/contact-us" && (
          <li style={navStyles.navItem}>
            <button style={navStyles.buttonStyle}>
              <Link
                to="/contact-us"
                style={{ color: "white", textDecoration: "none" }}
              >
                Contact us
              </Link>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
