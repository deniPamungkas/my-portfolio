import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <span style={{ display: "inline" }}>
        <p>
          <strong>Deni Pamungkas</strong> Portfolio
        </p>
      </span>
      <blockquote className="desc">
        When you arise in the morning, think of what a precious to be alive - to
        breathe, to think, to enjoy, to love. <br /> <i>-Marcus Aurelius</i>
      </blockquote>
      <br />
      <br />
      <div className="med-footer">
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
      </div>
      <span>____</span>
    </section>
  );
};

export default Footer;
