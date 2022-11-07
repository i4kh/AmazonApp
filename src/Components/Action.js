import React from "react";
import Button from "../Components/Button";
import classes from './action.module.css'

const Action = (props) => { 
 
    const startShift = () => {
        console.log('start');
        props.click(true)
    }
    
    return(
        <div className={classes.container}>
                <div className={classes.buttons}>
                    <Button className={classes.button} onClick={startShift}> Start Shift </Button>
                    <Button className={classes.button} onClick={props.close}> Clear </Button>
                </div>
        </div>
    )
}

export default Action;