import React from "react";

const TabStyles = {
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    flex: 1,
    textAlign: "center",
    padding: "12px",
    cursor: "pointer",
    border: "Black",
    borderRadius: "5px",
    backgroundColor: "black",
    margin: "5px",
    transition: "all 0.3s ease", // Transition effect
  },
  activeTab: {
    backgroundColor: "black",
    borderBottom: "black",
    transform: "scale(1.1)",
    textcolor: "black",
    // Scales the active tab
  },
};

const Tab = ({ label, isActive, onClick }) => (
  <div
    style={{
      ...TabStyles.tab,
      ...(isActive && TabStyles.activeTab),
    }}
    onClick={onClick}
  >
    {label}
  </div>
);

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div style={TabStyles.tabContainer}>
      <Tab
        label="Tech"
        isActive={activeTab === "Tech"}
        onClick={() => setActiveTab("Tech")}
      />
      <Tab
        label="Finance"
        isActive={activeTab === "Finance"}
        onClick={() => setActiveTab("Finance")}
      />
    </div>
  );
};

export default Tabs;
