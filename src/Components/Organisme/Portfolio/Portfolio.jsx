import React from "react";
import { Card2 } from "../../AllComp";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <main className="portfolio" id="portfolio">
      <section className="name">
        <h6>Here's some projects</h6>
        <h2>My Portfolio</h2>
      </section>
      <br />
      <section className="content">
        <div className="wrap-card">
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
