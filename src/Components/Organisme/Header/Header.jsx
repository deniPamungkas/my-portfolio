import React from "react";
import { Button } from "../../AllComp";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header" id="header">
      <section className="name">
        <h6>Hello, i am</h6>
        <h1>Deni Pamungkas</h1>
        <p>Frontend Developer</p>
      </section>
      <br />
      <section className="btn-desc">
        <Button className="primer lg">Download CV</Button>
        <a href="#contact">
        <Button className="second lg">Let's Talk</Button>
        </a>
      </section>
      <section className="desc">
        <div className="socMed">
          <div className="items">
            <GitHubIcon
              className="item"
              onClick={() => {
                window.open("https://github.com/deniPamungkas");
              }}
            />
            <FacebookIcon className="item" />
            <InstagramIcon className="item" />
            <LinkedInIcon
              className="item"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/deni-pamungkas-5b3534217/"
                );
              }}
            />
            <span>|</span>
          </div>
        </div>
        <div className="picture">
          <div className="pict"></div>
        </div>
        <div className="scroll">
          <div>Scroll Down</div>
        </div>
      </section>
    </header>
  );
};

export default Header;
