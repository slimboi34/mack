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
      <h2 style={{ textAlign: "center" }}>Contact Us</h2>
      <p style={{ textAlign: "center" }}></p>
      <div style={{ textAlign: "center" }}>
        <strong style={{ fontSize: "40px" }}>Email:</strong>{" "}
        <a
          href="mailto:info@machievellie.solutions"
          style={{ fontSize: "40px" }}
        >
          info@machievellie.solutions
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
