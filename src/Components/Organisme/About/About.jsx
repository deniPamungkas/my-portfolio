import React from 'react'
import { Card } from '../../AllComp'
import './About.scss'

const About = () => {
  return (
    <main className='about'>
        <section className="name">
        <h6>Get To Know</h6>
        <h2>About Me</h2>
        </section>
        <br/>
        <section className="meta-about">
            <div className="content">
              <div className="wrap-img">
                
              </div>
            </div>
            <div className="content">
              <div className="top">
              <Card/><Card/><Card/>
              </div>
              <div className="middle"></div>
              <div className="bottom"></div>
            </div>
        </section>
    </main>
  )
}

export default About