import React, {useState} from "react";
import classes from './user.module.css'
import EmployeeCard from "./EmployeeCard";

const User = (props) => {

    const [employeeCard, setEmployeeCard] = useState(false)
    const [task, setTask] = useState()

    const getTask = (props) => {
        setTask(props)
    }

    return(
        <div>
            {employeeCard &&
            <EmployeeCard data={props.data} close={() => {setEmployeeCard(false)}} task={getTask}/> 
            }
            <div className={classes.container} onClick={() => {setEmployeeCard(true)}}>
                <div className={classes.user_container} onClick={props.handleClick}>
                <img src={URL.createObjectURL(props.data.image)} alt='user-image' className={props.data.Employment_Type == 'TEMP' ? classes.image_green : classes.image_blue}/>
                    <p className={classes.username}>{props.data.Username}</p>
                    <p className={classes.task}>{task}</p>
                </div>
            </div>
        </div>
    )
}

export default User;