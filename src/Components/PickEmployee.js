import React, {useState, useEffect} from "react";
import classes from './pickemployee.module.css'
import User from "./User";

const PickEmployee = (props) => {

    let employees = [ ...props.workers ];

    const [employeeSelection, openEmployeeSelection] = useState(false)
    const [displayEmployees, setDisplayEmployees ] = useState([])
    const [availableEmployees, setAvailableEmployees ] = useState([])

    const changeAvailableEmployees = (array) => {setAvailableEmployees(array)}
    
    useEffect(() => {
        setAvailableEmployees(props.workers)
        // setDisplayEmployees([])
    }, [props.workers])
    
    useEffect(() => {
        console.log('in pick ', availableEmployees);
        if(availableEmployees == 0){
            setDisplayEmployees([])
        }
    }, [availableEmployees])

    const handleClick = () => {
        const checkUser = (element) => {
            return element == selectedUser ? true : false;
        }
        let selectBox = document.getElementById('employees')
        let selectedValue = selectBox.options[selectBox.selectedIndex].value;
        let selectedUser = availableEmployees.find(empl => empl.Username == selectedValue);
        let userIndex = availableEmployees.findIndex(checkUser); 
        availableEmployees.splice(userIndex, 1);
        props.sendWorkers(availableEmployees)
        console.log('sent ', availableEmployees);
        setDisplayEmployees([...displayEmployees, <User data={selectedUser}/>])
        console.log('saved');
        openEmployeeSelection(false)
    }

    return(
        <div className={classes.theBigOne}>
            {employeeSelection && 
                <div>
                    <div className={classes.background} onClick={() => {openEmployeeSelection(false)}}></div>
                        <div className={classes.picker}>
                            <select id="employees" className={classes.select}>
                                {availableEmployees.map(employee => {
                                    return <option>{employee.Username}</option>
                                })}
                            </select>
                            <button className={classes.submit_button} onClick={handleClick}>OK</button>
                        </div>
                </div>
            }
            {displayEmployees}
            <button className={classes.special_button} onClick={() => {openEmployeeSelection(true); changeAvailableEmployees(availableEmployees == 0 ? employees : availableEmployees)}}>+</button>
        </div>
    )
}

export default PickEmployee;