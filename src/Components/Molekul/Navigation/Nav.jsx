import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './Nav.scss'

const Nav = () => {  
  return (
    <nav className='nav'>
        <div className="navigation">
            <li className={`nav-item ${''}`}><a href='#header'><HomeOutlinedIcon/></a></li>
            <li className={`nav-item ${''}`}><a href='#about'><PersonOutlineOutlinedIcon/></a></li>
            <li className={`nav-item ${''}`}><a href='#experience'><AssignmentOutlinedIcon/></a></li>
            <li className={`nav-item ${''}`}><a href='#portfolio'><TaskAltOutlinedIcon/></a></li>
            <li className={`nav-item ${''}`}><a href='#contact'><SendOutlinedIcon/></a></li>
        </div>
    </nav>
  )
}

export default Nav