import React, { useState } from "react";
import classes from './row.module.css'    

const Row = (props) => {

    const localData = [ ...props.data ]
    console.log(localData);
        
    return(
        <div>
            {localData.map((data, index) => (
                <div className={classes.container}>
                    <img 
                        src={URL.createObjectURL(data.image)} 
                        alt='user-image' 
                        className={data.Employment_Type == 'TEMP' ? 
                            classes.image_green : 
                            classes.image_blue}
                    />
                    <div>{data.Username}</div>
                    <div className={classes.name}>{data.Name}{' '}{data.Surname}</div>
                    <div className={classes.special_task}></div>
                    <button className={classes.button} onClick={props.onClick} id={index}>+</button>
                </div>
            ))}
        </div>
      )
}

    


export default Row;