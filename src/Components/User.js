import React from "react";
import classes from './user.module.css'

const User = (props) => {
    const clicked = () => {
        props.sendClickedInfo(props.data)
        props.userClick()
    }

    return(
        <div className={classes.container} onClick={clicked}>
            <div className={classes.user_container} onClick={props.handleClick}>
            <img src={URL.createObjectURL(props.data.image)} alt='user-image' className={props.data.Employment_Type == 'TEMP' ? classes.image_green : classes.image_blue}/>
                <div>{props.data.Username}</div>
            </div>
        </div>
    )
}

export default User;