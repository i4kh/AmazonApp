import React, { useState } from "react";
import classes from './users.module.css'
import User from "./User";
import PickEmployee from "./PickEmployee";

const Users = (props) => {

    const [availableWorkers, setAvailableWorkers] = useState([])

    let employees = [...props.workers]

    const displayEmployees = (type) => {
        // let array = employees[type] ? employees[type] : [];
        // return array ? array.map((value, index) => <User data={value} index={index} />) : '' ;
}

    return(
        <div className={classes.container}>
                <h1 className={classes.title}>Pick & Stage</h1>
                <div className={classes.table}>
                    <div className={classes.container_left}>
                        {displayEmployees('pickers')}
                    </div>                
                    <div className={classes.container_right}>
                    <h2 className={classes.title}>Yard Marshalls</h2>
                    <div className={classes.yard}>
                        <PickEmployee workers={employees} />
                    </div>
                    <h2 className={classes.title}>Problem Solve</h2>
                    <div className={classes.yard}>
                        <button className={classes.special_button}>+</button>
                    </div>
                    <div className={classes.container_bottom}>
                        <div>
                            <h2 className={classes.title}>Special Assignment</h2>
                            <div className={classes.specialAssignment}>
                                <button className={classes.special_button}>+</button>
                            </div>
                        </div>
                        <div>
                            <h2 className={classes.title}>Badge Check</h2>
                            <div className={classes.badgeCheck}>
                                <button className={classes.special_button}>+</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Users