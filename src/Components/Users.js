import React, {useState } from "react";
import classes from './users.module.css'
import User from "./User";
import {data} from "../data" 

const Users = (props) => {
    const employees = {
        ...props.workers
    }

    const displayEmployees = (type) => {
        let array = employees[type] ? employees[type] : [];
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
                        {displayEmployees('yardMarshalls')}
                    </div>
                    <h2 className={classes.title}>Problem Solve</h2>
                    <div className={classes.yard}>
                        {displayEmployees('problemSolve')}
                    </div>
                    <div className={classes.container_bottom}>
                        <div className={classes.specialAssignment}>
                            <h2>Special Assignment</h2>
                            {displayEmployees('specialAssignment')}
                        </div>
                        <div className={classes.badgeCheck}>
                            <h2>Badge Check</h2>
                            {displayEmployees('badgeCheck')}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Users