import React, {useState } from "react";
import classes from './users.module.css'
import User from "./User";
import {data} from "../data" 

const Users = (props) => {
    const employees = {
        ...props.workers
    }
    
    console.log(employees);

    const displayEmployees = (type) => {
        let array = employees[type] ? employees[type] : [];
        console.log(array);
        array.map((value,index) => console.log('value: ', value, 'index: ', index))
        return array ? array.map((value, index) => <User data={value} index={index} click={() => {}}/>) : '' ;
}

    return(
    <div className={classes.container}>
                <h1 className={classes.title}>Pick & Stage</h1>
                <div className={classes.table}>
                    <div className={classes.container_left}>
                        {displayEmployees('pickers')}
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