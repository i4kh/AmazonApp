import React from "react";
import classes from './user.module.css'



const User = (props) => {
    const image = [ ...props.image ]
    let associates = [];
    // console.log(props.id);

    

    const displayAssociates = () => {
        associates.push(
            <div className={classes.user_container} onClick={props.handleClick}>
                {props.image}
                {/* <div>{localData[props.id].Username}</div> */}
            </div>
        )
        return associates;
    }


    return(
        <div className={classes.container}>
            {displayAssociates()}
        </div>
    )
}

export default User;