import React from "react";

function ContactUs() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <h2 style={{ textAlign: "center", color: "white" }}>Contact Us</h2>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            fontSize: "40px",
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "white",
            color: "#333",
            border: "2px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          onClick={() =>
            (window.location.href = "mailto:info@machievellie.solutions")
          }
        >
          Email Us
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
