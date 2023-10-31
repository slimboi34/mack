import React from "react";
import GlobalStyles from "./GlobalStyles";

const CustomStyles = {
  container: {
    ...GlobalStyles.container,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2F2", // Light grey background for contrast
    padding: "3rem",
  },
  content: {
    ...GlobalStyles.content,
    maxWidth: "800px",
    textAlign: "center",
    backgroundColor: "#000000", // White background for the content area
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    ...GlobalStyles.header,
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#343A40", // Dark grey for a formal, readable header
  },
  text: {
    ...GlobalStyles.text,
    fontSize: "1.2rem",
    marginBottom: "1rem",
    color: "#555555", // Medium grey for readable text
  },
  established: {
    fontStyle: "italic",
    fontSize: "1rem",
    color: "#777777", // Light grey for less important, but necessary information
  },
};

function HomePage() {
  return (
    <div style={CustomStyles.container}>
      <div style={CustomStyles.content}>
        <h1 style={CustomStyles.header}>
          Welcome to Machiavelli Financial and Tech Solutions
        </h1>
        <p style={CustomStyles.text}>
          We offer an extensive range of financial solutions and technological
          services to help you make smarter investment choices and elevate your
          business.
        </p>
        <p style={CustomStyles.established}>Established 2023</p>
      </div>
    </div>
  );
}

export default HomePage;
