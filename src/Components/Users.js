import React, { useState, useEffect } from "react";
import classes from './users.module.css'
import User from "./User";
import PickEmployee from "./PickEmployee";

const Users = (props) => {

    const [availableWorkers, setAvailableWorkers] = useState([])

    useEffect(() => {
        setAvailableWorkers([...props.workers]);
    }, [props.workers])
    
    useEffect(() => {
        console.log('received ', availableWorkers);
    }, [availableWorkers])

    const displayEmployees = () => {
        let array = props.display ? availableWorkers : [];
        return array ? array.map((value) => <User data={value} workers={availableWorkers} remove={(array) => {setAvailableWorkers([...array])}} />) : '';
    }

    return(
        <div className={classes.container}>
                <h1 className={classes.title}>Pick & Stage</h1>
                <div className={classes.table}>
                    <div className={classes.container_left}>
                        {displayEmployees()}
                        <PickEmployee workers={availableWorkers} sendWorkers={(array) => {setAvailableWorkers([...array])}}/>
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
                            <h2 className={classes.title}>Badge Check</h2>
                            <div className={classes.specialAssignment}>
                                <PickEmployee workers={availableWorkers} sendWorkers={(array) => {setAvailableWorkers([...array])}} />
                            </div>
                        </div>
                        <div>
                            <h2 className={classes.title}>Special Assignment</h2>
                            <div className={classes.badgeCheck}>
                                <PickEmployee workers={availableWorkers} sendWorkers={(array) => {setAvailableWorkers([...array])}}/>
                            </div>
                        </div>
                        {/* <div className={classes.right_bottom}>
                        </div> */}
                    </div>
                </div>
            </div>
    )
}

export default Users