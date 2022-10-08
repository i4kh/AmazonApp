import React from "react";
import classes from './header.module.css'

const Header = () => {
    return(
    <div className={classes.container}>    
        <div className={classes.image}>Picture</div>
        <div>User ID</div>
        <div>Name</div>
        <div className={classes.input}>Task</div>
        <div className={classes.empty}>Edit</div>
    </div>)
}

export default Header;