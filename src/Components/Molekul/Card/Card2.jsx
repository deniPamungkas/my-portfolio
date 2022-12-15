import React from 'react'
import './Card2.scss'
import { Button } from '../../AllComp'

const Card2 = () => {
  return (
    <div className='card2'>
        <div className='thumb'>
            <img src="" alt="" />
        </div>
        <div className='meta'>Weather App with humidity</div>
        <div className='btn'>
            <Button className='primer sm'>Github</Button>
            <Button className='second sm'>Live Demo</Button>
        </div>
    </div>
  )
}

export default Card2