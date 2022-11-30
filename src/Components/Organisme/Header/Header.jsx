import React from 'react'
import { Button } from '../../AllComp';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
        <section className="name">
            <h6>Hello, i am</h6>
            <h1>Deni Pamungkas</h1>
            <p>Frontend Developer</p>
        </section>
        <br/>
        <section className="btn-desc">
            <Button className='primer'>Download CV</Button>
            <Button className='second'>Let's Talk</Button>
        </section>
        <section className='desc'>
            <div className='socMed'>
                <div className='items'>
                <GitHubIcon className='item'/>
                <FacebookIcon className='item'/>
                <InstagramIcon className='item'/>
                <span>|</span>
                </div>
            </div>
            <div className='picture'>
                <div className='pict'>

                </div>
            </div>
            <div className='scroll'>
                <div>Scroll Down</div>
            </div>
        </section>
    </header>
  )
}

export default Header