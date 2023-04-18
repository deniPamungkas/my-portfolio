import React from "react";
import { Card2 } from "../../AllComp";
import {data} from "../../../API/API.js"
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
          {
            data?.map((res,index)=>{
              return(
                <Card2 key={index} data={res}/>
              )
            })
          }
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
