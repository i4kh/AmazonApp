import React from "react";
import classes from "./messagebox.module.css"


const MessageBox = (props) => {
    return(
        <div>
            <div className={classes.background} onClick={props.close}></div>
            <div className={classes.container}>
                <h2>{props.title}</h2>
                <div className={classes.children}>
                    {props.children}
                </div>
            </div>        
        </div>

    )
}

export default MessageBox;