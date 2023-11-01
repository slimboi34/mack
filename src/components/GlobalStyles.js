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
    color: ${(props) => props.theme.textColor || defaultTheme.textColor};
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    padding: 20px;
    }

    p {
    font-size: 1.1rem;
    line-height: 1.8;
    text-align: center;
    }

    a {
    text-decoration: none;
    color: ${(props) => props.theme.linkColor || defaultTheme.linkColor};
    }

    .container {
    max-width: 100%; /* Adjusted for responsiveness */
    margin: auto;
    padding: 20px;
    }

    header {
    font-size: 2rem;
    margin-bottom: 20px;
    }

    specializedText {
    margin-bottom: 30px;
    }

    /* Tabs */
    .tab {
    flex: 1;
    text-align: center;
    padding: 12px;
    cursor: pointer;
    }

    .activeTab {
    border-bottom: 2px solid black;
    }

    section {
    margin-bottom: 30px;
    }

    subHeader {
    font-size: 1.5rem;
    margin-bottom: 15px;
    }

    list {
    list-style-type: none;
    padding: 0;
    }

    listItem {
    margin-bottom: 15px;
    }

    listItemTitle {
    font-weight: bold;
    }

    /* Typography */
    h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    text-align: center;
    }

    /* Link Styles */
    a:hover {
    text-decoration: underline;
    }

    /* Nav Bar */
    nav {
    background-color: #343a40;
    color: white;
    display: flex;
    flex-wrap: wrap; /* Adjusted for responsiveness */
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    }

    nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0; /* Reset margin for ul */
    padding: 0; /* Reset padding for ul */
    }

    nav ul li {
    list-style: none;
    margin: 0; /* Reset margin for li */
    padding: 0; /* Reset padding for li */
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
    max-width: 100%; /* Adjusted for responsiveness */
    margin-right: 1px;
    }

    /* What We Offer Styles */
    .container {
    max-width: 960px;
    padding: 2rem;
    margin: 0 auto;
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

    /* GlobalStyles.css or similar */
    /* Mobile-first */
    body {
    font-size: 16px;
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
    body {
        font-size: 18px;
    }
    }

    /* Laptop/Desktop */
    @media only screen and (min-width: 1024px) {
    body {
        font-size: 20px;
    }
    }

  
`;

export default GlobalStyles;
