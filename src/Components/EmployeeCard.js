import React from "react";
import classes from './employeecard.module.css'

const EmployeeCard = (props) => {
    console.log(props.data);

    

    return(
        <div>
            <div className={classes.background} onClick={props.close}></div>
            <div className={classes.card}>
                <div className={classes.top}>
                    <div className={classes.left}>
                        <img 
                            src={URL.createObjectURL(props.data.image)} 
                            alt='user-image' 
                            className={props.data.Employment_Type == 'TEMP' ? 
                                classes.image_green : 
                                classes.image_blue}
                        />
                        <h3>{props.data.Username}</h3>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.subleft}>
                            <h3>Name:</h3>
                            <h3>Badge ID:</h3>
                            <h3>Employee ID:</h3>
                        </div>
                        <div className={classes.subright}>
                            <h3>{props.data.Name} {props.data.Surname}</h3>
                            <h3>{props.data.Badge_ID}</h3>
                            <h3>{props.data.Employee_ID}</h3>
                        </div>
                    </div>
                </div>
                <div className={classes.bottom}>
                    <div className={classes.bottom_left}>
                        <p>Replace with</p>
                        <p>Change position with</p>
                        <p>Set a special assignment</p>
                    </div>
                    <div className={classes.bottom_right}>
                        <select id='replace' >
                            <option>salam</option>
                        </select>
                        <select id='change' >
                            <option>balam</option>    
                        </select>
                        <input type='text'></input>
                    </div>
                </div>
                <button type='submit' className={classes.button}>Save</button>
            </div>
        </div>
    )
}

export default EmployeeCard