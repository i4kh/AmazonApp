import React, {useState, useEffect} from "react";
import classes from './user.module.css'
import EmployeeCard from "./EmployeeCard";

const User = (props) => {

    const [employeeCard, setEmployeeCard] = useState(false)
    const [task, setTask] = useState()
    const [workers, setWorkers] = useState()

    useEffect(() => {
        // console.log('in user ', props.workers);
        setWorkers(props.workers)
    }, [props.workers])

    useEffect(()=> {
        console.log('in user ', workers);
    }, [workers])

    const getTask = (props) => {
        setTask(props)
    }

    return(
        <div>
            {employeeCard &&
            <EmployeeCard data={props.data} close={() => {setEmployeeCard(false)}} task={getTask} list={props.workers} workers={workers} remove={props.remove}/> 
            }
            <div className={classes.container} onClick={() => {setEmployeeCard(true)}}>
                <div className={classes.user_container} onClick={props.handleClick}>
                <img src={URL.createObjectURL(props.data.image)} alt='user-image' className={props.data.Employment_Type == 'TEMP' ? classes.image_green : classes.image_blue}/>
                    <div className={classes.username}>{props.data.Username}</div>
                    <div className={classes.task}>{task}</div>
                </div>
            </div>
        </div>
    )
}

export default User;