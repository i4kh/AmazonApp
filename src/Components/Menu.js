import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './menu.module.css'

const Menu = () => {
    return(
        <header className={classes.header}>
            <div className={classes.image}>
                <NavLink to='/'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2000px-Amazon_logo.svg.png" alt="amazon-logo" className={classes.image}></img>
                </NavLink>
            </div>
            <div className={classes.links}>
                <NavLink 
                    className={classes.link} to="/table">Table</NavLink>
                <NavLink 
                    className={classes.link} to="/list">List</NavLink>
            </div>
        </header>
    )
}

export default Menu;