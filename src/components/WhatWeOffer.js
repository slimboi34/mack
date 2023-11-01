import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import Tabs from "./Tabs";

const WhatWeOffer = () => {
  const [activeTab, setActiveTab] = useState("Tech");

  const techServices = [
    {
      title: "Web Development",
      description: "Building responsive and efficient websites.",
    },
    {
      title: "SEO Optimization",
      description: "Enhance your website ranking on search engines.",
    },
    {
      title: "Digital Marketing",
      description: "Strategies to improve your online presence.",
    },
    {
      title: "E-commerce Solutions",
      description: "Setting up and optimizing online stores.",
    },
    {
      title: "Content Creation",
      description: "High-quality articles, blogs, and social media posts.",
    },
    {
      title: "UX/UI Design",
      description: "Improving user experience and interface design.",
    },
    {
      title: "App Development",
      description: "Creating mobile apps for Android and iOS.",
    },
    {
      title: "Social Media Management",
      description: "Managing and growing your social media presence.",
    },
    {
      title: "Email Marketing",
      description: "Crafting and sending effective email campaigns.",
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress theme and plugin development.",
    },
    {
      title: "Video Editing",
      description: "Editing videos for promotions or content.",
    },
    {
      title: "Graphic Design",
      description: "Creating logos, banners, and promotional materials.",
    },
  ];

  const financeServices = [
    {
      title: "Investment Advisory",
      description: "Tailored investment advice for you.",
    },
    {
      title: "Tax Planning",
      description: "Optimize your tax liabilities effectively.",
    },
    {
      title: "Retirement Planning",
      description: "Secure your future with our retirement plans.",
    },
    {
      title: "Debt Management and Consolidation",
      description: "Manage and consolidate your debts effectively.",
    },
    {
      title: "Sustainable Investment Advisory",
      description:
        "Invest in companies that are environmentally and socially responsible.",
    },
    {
      title: "Retirement Planning for Millennials",
      description:
        "Tailored retirement planning services for younger generations.",
    },
    {
      title: "Digital Banking for Small Businesses",
      description: "Innovative banking solutions for SMEs.",
    },
    {
      title: "Cryptocurrency Services",
      description: "Buy, sell, and manage your digital assets safely.",
    },
    {
      title: "Financial Literacy Education",
      description:
        "Educational services for better money management, budgeting, and investing.",
    },
    {
      title: "Insurance for Gig Economy Workers",
      description: "Tailored insurance products for gig economy participants.",
    },
    {
      title: "International Remittance Services",
      description: "Efficient and less costly remittance services.",
    },
    {
      title: "Personalized Financial Planning",
      description: "AI-driven personalized financial planning services.",
    },
    {
      title: "Financial Services",
      description:
        "Financial services for freelancers, including tax planning, invoicing, and retirement planning.",
    },
  ];

  //   const techSkills = [];
  //   const financeSkills = [];

  const services = activeTab === "Tech" ? techServices : financeServices;
  //   const skills = activeTab === "Tech" ? techSkills : financeSkills;

  return (
    <div style={{ ...GlobalStyles.container, color: "#ffffff" }}>
      <h1 style={{ ...GlobalStyles.header, color: "#ffffff" }}>
        What We Offer
      </h1>
      <p style={{ ...GlobalStyles.specializedText, color: "#ffffff" }}>
        Machiavelli Financial and Software Solutions specializes in custom-made
        software for businesses. Our team of financial and tech experts can
        effectively build custom business software solutions at speed and scale.
      </p>
      <div style={{ ...GlobalStyles.tabContainer, color: "#ffffff" }}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <section
        style={{
          ...GlobalStyles.section,
          paddingLeft: 0,
          listStyleType: "none",
          color: "#ffffff",
        }}
      >
        <h2 style={{ ...GlobalStyles.subHeader, color: "#ffffff" }}>
          Services
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", color: "#ffffff" }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 calc(33.333% - 1em)",
                margin: "0.5em",
                color: "#ffffff",
              }}
            >
              <h3 style={{ ...GlobalStyles.listItemTitle, color: "#ffffff" }}>
                {service.title}
              </h3>
              <p style={{ color: "#ffffff" }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ ...GlobalStyles.section, color: "#ffffff" }}>
        <h2 style={{ ...GlobalStyles.subHeader, color: "#ffffff" }}> </h2>
        {/* If you plan to add skills in the future, you can uncomment this part
        <ul style={{ ...GlobalStyles.list, color: '#ffffff' }}>
          {skills.map((skill, index) => (
            <li key={index} style={{ ...GlobalStyles.listItem, color: '#ffffff' }}>
              {skill}
            </li>
          ))}
        </ul>
        */}
      </section>
    </div>
  );
};

export default WhatWeOffer;
