import React from "react";
import classes from './menu.module.css'

const Menu = (props) => {

    return(
        <header className={classes.header}>
            <div className={classes.image}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2000px-Amazon_logo.svg.png" alt="amazon-logo" className={classes.image}></img>
            </div>
            <div className={classes.container_right}> 
                <button>Import</button>       
                <button onClick={props.list}>List</button>
            </div>
        </header>
    )
}

export default Menu;