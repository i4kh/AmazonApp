import React from "react";
import classes from './header.module.css'

const Header = () => {
    return(
    <div className={classes.container}>    
        <div className={classes.image}>Picture</div>
        <div className={classes.username}>Username</div>
        <div className={classes.name}>Name</div>
        <div className={classes.empty}>Is Active</div>
    </div>)
}

export default Header;