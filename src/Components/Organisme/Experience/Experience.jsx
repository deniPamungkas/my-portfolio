import React from "react";
import "./Experience.scss";

const Experience = () => {
  const skillsF = [
    { skill: "HTML", level: "Intermediate" },
    { skill: "CSS", level: "Intermediate" },
    { skill: "JavaScript", level: "Intermediate" },
    { skill: "React JS", level: "Intermediate" },
    { skill: "SASS", level: "Intermediate" },
  ];
  const skillB = [
    { skill: "Node JS", level: "Intermediate" },
    { skill: "Express JS", level: "Intermediate" },
    { skill: "MongoDB", level: "Intermediate" },
    { skill: "Rest API", level: "Intermediate" },
  ];
  return (
    <main className="experience" id="experience">
      <section className="name">
        <h6>I Have skills</h6>
        <h2>My Experience</h2>
      </section>
      <section className="content">
        <div className="dev">
          <h2>FrontEnd Development</h2>
          <ul>
            {skillsF?.map((data) => {
              return (
                <li key={data.skill}>
                  <div className="skil">
                    <h4>{data.skill}</h4>
                    <p>{data.level}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="dev">
          <h2>BackEnd Development </h2>
          <ul>
            {skillB?.map((data) => {
              return (
                <li key={data.skill}>
                  <div className="skil">
                    <h4>{data.skill}</h4>
                    <p>{data.level}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Experience;
