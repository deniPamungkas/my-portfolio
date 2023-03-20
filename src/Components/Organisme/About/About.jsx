import React from "react";
import "./About.scss";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { Button, Card } from "../../AllComp";

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
            <Card icon={<WorkspacePremiumIcon />} ket1='Experience' ket2='2+ Years Working' />
            <Card icon={<PeopleAltIcon />} ket1='Client' ket2='10+ Clients'/>
            <Card icon={<CreateNewFolderIcon/>} ket1='Projects' ket2='10+ Projects'/>
          </div>
          <div className="middle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam
            et maxime sed ducimus animi repellat atque architecto iure quaerat
            reprehenderit nam, magnam sit aperiam tempore quas mollitia
            voluptatibus totam?
          </div>
          <div className="bottom">
            <Button className='second sm'>Let's Talk</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
