import React from "react";

const BinaryCodeBackground = () => {
  // Generate a matrix-like binary code background
  const binaryCodeBackground = [];

  for (let i = 0; i < window.innerHeight / 20; i++) {
    const binaryLine = Array.from({ length: 100 }, (_, j) => (
      <div key={j} className="binary-dot">
        {Math.random() > 0.5 ? "1" : "0"}
      </div>
    ));

    binaryCodeBackground.push(
      <div key={i} className="binary-line">
        {binaryLine}
        {binaryLine} {/* Duplicate the line to make the scrolling seamless */}
      </div>
    );
  }

  return <div className="binary-code-background">{binaryCodeBackground}</div>;
};

const CrazyBackground = () => {
  return (
    <div
      style={{
        position: "fixed", // fixed to cover the entire view
        zIndex: -1, // set to -1 so it's behind everything else
        pointerEvents: "none", // make it non-interactive
        width: "100%",
        height: "100vh",
      }}
    >
      <BinaryCodeBackground />
    </div>
  );
};

export default CrazyBackground;
