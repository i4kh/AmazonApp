import React, { useState, useEffect } from "react";
import classes from './row.module.css'    

const Row = (props) => {

    const localData = [ ...props.data ]
    const [activeUsers, setActiveUsers] = useState([])
    const [isActive, setIsActive] = useState(false)   
    let someUsers = [];

    const addUser = (e) => {
        someUsers.push(e)    
    }

    const removeUser = (e) => {
        someUsers.splice(someUsers.indexOf(e), 1)
    }

    const handleClick = () => {
        props.sendActiveUsers(someUsers);
        props.hideList()
    }
    
    return(
        <div>
            <div className={classes.bigBox}>
                <div className={classes.big_container}>
                {localData.map((data, index) => (
                        <div className={classes.container}>
                            <div className={classes.image}>
                                <img 
                                    src={URL.createObjectURL(data.image)} 
                                    alt='user-image' 
                                    className={data.Employment_Type == 'TEMP' ? 
                                        classes.image_green : 
                                        classes.image_blue}
                                />
                            </div>
                            <div className={classes.username}>{data.Username}</div>
                            <div className={classes.column}>{data.Name}{' '}{data.Surname}</div>
                            <div className={classes.checkBox}>
                                <input type='checkbox' value={isActive} onChange={(e) => {e.target.checked ? addUser(data) : removeUser(data)}}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className={classes.button} onClick={handleClick}>Save</button> 
        </div>
      )
}

    


export default Row;