import React from "react";
import "./About.scss";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { Card } from "../../AllComp";

const About = () => {
  return (
    <main className="about" id="about">
      <section className="name">
        <h6>Get To Know</h6>
        <h2>About Me</h2>
      </section>
      <br />
      <section className="meta-about">
        <div className="content">
          <div className="wrap-img"></div>
        </div>
        <div className="content">
          <div className="top">
            <Card icon={<WorkspacePremiumIcon/>}/>
            <Card icon={<PeopleAltIcon/>}/>
            <Card icon={<CreateNewFolderIcon/>}/>
          </div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </div>
      </section>
    </main>
  );
};

export default About;
