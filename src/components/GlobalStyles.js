import { createGlobalStyle } from "styled-components";

// Define Default Theme
const defaultTheme = {
  backgroundColor: "#f8f9fa",
  color: "#343a40",
  textColor: "#333",
  linkColor: "#007bff",
};

const GlobalStyles = createGlobalStyle`
  /* === Reset and Global Styles === */
  body, h1, h2, h3, h4, h5, h6, p, ul, ol {
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
  }

  /* === Theme Styles === */
  body {
    background-color: ${(props) =>
      props.theme.backgroundColor || defaultTheme.backgroundColor};
    color: #ffffff;  // Set text color to white
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    line-height: 1.6;
    padding: 20px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${(props) => props.theme.textColor || defaultTheme.textColor};
    text-align: center;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.linkColor || defaultTheme.linkColor};
  }


  container: {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '20px'
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px'
  },
  specializedText: {
    marginBottom: '30px'
  },


  

    tab: {
        flex: 1,                   // Allows the tab to grow as needed
        textAlign: 'center',       // Text inside the tab will be centered
        padding: '12px',           // Add some padding for better visibility
        cursor: 'pointer'          // Makes it clear this is a clickable area
    },
    activeTab: {
        borderBottom: '2px solid black'  // Indicates this tab is active
    },



  section: {
    marginBottom: '30px'
  },
  subHeader: {
    fontSize: '1.5rem',
    marginBottom: '15px'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  listItem: {
    marginBottom: '15px'
  },
  listItemTitle: {
    fontWeight: 'bold'
  }
  /* === Container Styles === */
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }

  /* === Typography === */
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    text-align: center;
  }

  /* === Link Styles === */
  a:hover {
    text-decoration: underline;
  }

  /* Nav Bar */
  nav {
    background-color: #343a40;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  nav ul li {
    list-style: none;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }

  nav a:hover {
    color: #007bff;
  }

  .nav-title {
    display: flex;
    align-items: center;
  }

  .nav-title img {
    width: 500px;
    margin-right: 15px;
  }



  /* What We Offer Styles */
  .container {
    margin: 0 auto;
    max-width: 960px;
    padding: 2rem;
  }

  .header {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  .specializedText {
    margin: 1rem 0;
    line-height: 1.5;
    text-align: justify;
  }



  .section {
    margin-top: 1rem;
  }

  .subHeader {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .list {
    list-style-type: none;
  }

  .listItem {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .listItemTitle {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }


  /* Existing CSS */
  .binary-code-background {
    overflow: hidden;
    white-space: nowrap;
  }
  
  .binary-line {
    animation: scrollLeft 10s linear infinite;
    display: flex;
  }
  
  @keyframes scrollLeft {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  /* New CSS for green binary text */
  .binary-dot {
    color: green;
  }
  

  
`;

export default GlobalStyles;
