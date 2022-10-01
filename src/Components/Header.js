import React from "react";
import classes from './header.module.css'

const Header = () => {
    return(
    <div className={classes.container}>
            
            <div className={classes.image}>Picture</div>
            <div>User ID</div>
            <div>Employee Name</div>
            <div>Employee ID</div>
            <div className={classes.task}>Badge Barcode ID</div>
            <div className={classes.input}>Special Task</div>
            <div className={classes.empty}></div>
        </div>)
}

export default Header;