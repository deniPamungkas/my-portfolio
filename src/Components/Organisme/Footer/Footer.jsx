import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.scss'

const Footer = () => {
  return (
    <section className="footer">
      <span style={{display:'inline'}}>
        <p><strong>Deni Pamungkas</strong> Portfolio</p>
      </span>
      <span className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptates
        corporis aperiam illo minus, qui maiores consequuntur dignissimos
        molestiae iusto accusantium voluptatum id deleniti libero adipisci
        corrupti alias? Veritatis, nulla?
      </span>
      <br/><br/>
      <div className="med-footer">
            <GitHubIcon className='item'/>
            <FacebookIcon className='item'/>
            <InstagramIcon className='item'/>
            <LinkedInIcon className='item'/>
      </div>
      <span>____</span>
    </section>
  );
};

export default Footer;
