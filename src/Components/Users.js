import React, { useState, useEffect } from "react";
import classes from './users.module.css'
import User from "./User";
import PickEmployee from "./PickEmployee";

const Users = (props) => {

    const [availableWorkers, setAvailableWorkers] = useState([])

    useEffect(() => {
        setAvailableWorkers([...props.workers]);
        console.log('availableWorkers changed to ', props.workers);
    }, [props.workers])
    
    useEffect(() => {
        console.log('received ', availableWorkers);
    }, [availableWorkers])

    let employees = availableWorkers == 0 ? [...props.workers] : availableWorkers;

    const displayEmployees = () => {
        
        let array = props.display ? availableWorkers : [];
        return array ? array.map((value, index) => <User data={value} index={index} />) : '';
    }

    return(
        <div className={classes.container}>
                <h1 className={classes.title}>Pick & Stage</h1>
                <div className={classes.table}>
                    <div className={classes.container_left}>
                        {displayEmployees()}
                    </div>                
                    <div className={classes.container_right}>
                        <div>
                            <h2 className={classes.title}>Yard Marshalls</h2>
                            <div className={classes.yard}>
                                <PickEmployee workers={availableWorkers} sendWorkers={(array) => {setAvailableWorkers([...array])}}/>
                            </div>
                        </div>
                        <div>
                            <h2 className={classes.title}>Problem Solve</h2>
                            <div className={classes.yard}>
                                <PickEmployee workers={availableWorkers} sendWorkers={(array) => {setAvailableWorkers([...array])}}/>    
                            </div>
                        </div>
                        <div>
                            <h2 className={classes.title}>Special Assignment</h2>
                            <div className={classes.specialAssignment}>
                                <PickEmployee workers={employees} sendWorkers={(array) => {setAvailableWorkers([...array])}} />
                            </div>
                        </div>
                        <div>
                            <h2 className={classes.title}>Badge Check</h2>
                            <div className={classes.badgeCheck}>
                                <PickEmployee workers={employees} sendWorkers={(array) => {setAvailableWorkers([...array])}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Users