import React, {useState} from "react";
import classes from './pickemployee.module.css'
import User from "./User";

const PickEmployee = (props) => {

    const employees = [ ...props.workers ];
    const [employeeSelection, openEmployeeSelection] = useState(false)
    const [displayEmployees, setDisplayEmployees ] = useState([])

    const handleClick = () => {
        let selectBox = document.getElementById('employees')
        let selectedValue = selectBox.options[selectBox.selectedIndex].value;
        console.log(selectedValue);
        employees.map(employee => {
            employee.Username == selectedValue ? setDisplayEmployees([ ...displayEmployees, <User data={employee}/>])  : console.log('wrong id');;
        })
        console.log(displayEmployees);
    }

    return(
        <div className={classes.theBigOne}> 
            {employeeSelection && 
                <div>
                    <div className={classes.background} onClick={() => {openEmployeeSelection(false)}}></div>
                        <div className={classes.picker}>
                            <select id="employees" className={classes.select}>
                                {employees.map(employee => {
                                    return <option>{employee.Username}</option>
                                })}
                            </select>
                            <button className={classes.submit_button} onClick={handleClick}>OK</button>
                        </div>
                </div>
            }
            {displayEmployees}
            <button className={classes.special_button} onClick={() => {openEmployeeSelection(true)}}>+</button>
        </div>
    )
}

export default PickEmployee;