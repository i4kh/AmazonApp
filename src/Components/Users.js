import React, {useState } from "react";
import classes from './users.module.css'
import User from "./User";
import {data} from "../data" 

const Users = (props) => {

    const localData = [
        ...props.data
    ]
    const images = [
        ...props.images
    ]

    const [workerCount, setWorkerCount] = useState({})
    // console.log(workerCount);
    
    // console.log(requiredWorkers);
    
    const filterImage = (number) => {
        let imageArray = [];
        let username = localData[number].Username;
        imageArray.push(
            <div className={classes.image}>
            {images.map(image => (
                image.name == `${username}.jpg` ? <img src={URL.createObjectURL(image)} alt='user-image' className={localData[number].Employment_Type == 'TEMP' ? classes.image_green : classes.image_blue}/> : ''
                ))}
            </div>)
        return(imageArray)
    }
    
    const [employees, setEmployees] = useState([])

    const displayEmployees = (amount) => {
        setWorkerCount(props.numbers)
        console.log(amount);
        let employees = [];
        for(let i=0; i<=amount; i++){
            console.log(i)
            employees.push(
                <div>
                    Hello
                </div>
            )
            // employees.push(
            //     <User image={filterImage(images[i])} click = {props.click}/>
            //     // <User image={filterImage(current)}  Click={props.click} place={index} />
            // )
        }
        setEmployees(employees);
        return employees;
    }

    return(
    <div className={classes.container}>
                <h1 className={classes.title}>Pick & Stage</h1>
                <div className={classes.table}>
                    <div className={classes.container_left}>
                        {/* {displayEmployees(workerCount.pick)} */}
                    </div>                
                    <div className={classes.container_right}>
                    <h2 className={classes.title}>Yard</h2>
                    <div className={classes.yard}>
                        {/* {displayEmployees(workerCount.yardMarshalls)} */}
                    </div>
                    <h2 className={classes.title}>Problem Solve</h2>
                    <div className={classes.yard}>
                        {/* {displayEmployees(workerCount.problemSolve)} */}
                    </div>
                    <div className={classes.container_bottom}>
                        <div className={classes.specialAssignment}>
                            <h2>Special Assignment</h2>
                            {/* {displayEmployees(workerCount.specialAssignment)} */}
                        </div>
                        <div className={classes.badgeCheck}>
                            <h2>Badge Check</h2>
                            {/* {displayEmployees(workerCount.badgeCheck)} */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Users