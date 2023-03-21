import React from 'react'
import './Button.scss'

const Button = (props) => {
  return (
    <button className={props.className} onClick={(e)=>{e.preventDefault();window.open(props.github)}}>
        {props.children}
    </button>
  )
}

export default Button