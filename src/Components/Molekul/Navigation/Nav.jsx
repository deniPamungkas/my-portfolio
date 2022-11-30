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
            <li className={`nav-item ${window.scrollY>=200 && window.scrollY<= 400? 'activ' : ''}`}><HomeOutlinedIcon/></li>
            <li className={`nav-item ${''}`}><PersonOutlineOutlinedIcon/></li>
            <li className={`nav-item ${''}`}><AssignmentOutlinedIcon/></li>
            <li className={`nav-item ${''}`}><TaskAltOutlinedIcon/></li>
            <li className={`nav-item ${''}`}><SendOutlinedIcon/></li>
        </div>
    </nav>
  )
}

export default Nav