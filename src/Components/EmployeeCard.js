import React, {useState} from "react";
import classes from './employeecard.module.css'

const EmployeeCard = (props) => {

    const [task, setTask] = useState()

    const getSpecialTask = (e) => {
        setTask(e.target.value)
    }
    
    const handleSubmit = (e) => {
        props.task(task)
        props.close()
    }

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
                    <table>
                        <tr>
                            <td>Replace with:</td>
                            <td align="right">
                                <select id='replace'>
                                    <option>salam</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Change position with:</td>
                            <td align="right">
                                <select id='change'>
                                    <option>balam</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Set a special task:</td>
                            <td align="right">
                                <input type='text' onChange={getSpecialTask} />
                            </td>
                        </tr>
                    </table>

                </div>
                <button type='submit' className={classes.button} onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default EmployeeCard