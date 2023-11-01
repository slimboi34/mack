import React from "react";
import GlobalStyles from "./GlobalStyles";

const CustomStyles = {
  container: {
    ...GlobalStyles.container,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem",
  },
  content: {
    ...GlobalStyles.content,
    maxWidth: "800px",
    textAlign: "center",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    ...GlobalStyles.header,
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#FFFFFF", // Changed to white
  },
  text: {
    ...GlobalStyles.text,
    fontSize: "1.2rem",
    marginBottom: "1rem",
    color: "#FFFFFF", // Changed to white
  },
  established: {
    fontStyle: "italic",
    fontSize: "1rem",
    color: "#FFFFFF", // Changed to white
  },
};

function HomePage() {
  return (
    <div style={CustomStyles.container}>
      <div style={CustomStyles.content}>
        <h1 style={CustomStyles.header}>
          Welcome to Machiavelli Financial and Digital Solutions
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
