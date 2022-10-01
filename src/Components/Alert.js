import React from "react";
import classes from "./alert.module.css"


const Alert = (props) => {
    return(
        <div className={classes.background}>
            <div className={classes.container}>
                <h2>{props.title}</h2>
            </div>
            <button onClick = {props.onClick}>{props.buttonText}</button>
        </div>
    )
}

export default Alert;