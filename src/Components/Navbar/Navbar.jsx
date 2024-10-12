import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className={classes.nav}>
        <div>
          <NavLink className={classes.item} to="/profile" activeClassName={classes.activeLink} > Profile</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
         <NavLink className={classes.item} to="/dialogs" activeClassName={classes.activeLink}> Messages</NavLink>
        </div>
        <div >
         <a  className={classes.item}> New</a>
        </div>
        <div >
         <a className={classes.item}  > Music</a>
        </div>
        <div >
         <a className={classes.item} >Settings</a>
        </div>
      </nav>
  )
}

export default Navbar