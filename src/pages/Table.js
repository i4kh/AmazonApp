import React, {useState} from "react";
import Button from "../Components/Button";
import classes from './table.module.css'
import Action from "../Components/Action";
import Users from "../Components/Users";
import User from "../Components/User";
import data from "../data";
import MessageBox from "../Components/Messagebox";

const Table = (props) => {

    const localData = [
        ...props.data
    ]
    
    const [window, openWindow] = useState()
    const [currentIDs, setCurrentIDs] = useState([])
    const [ids, setIDs] = useState()
    const [employees, setEmployees ] = useState({})

    const getIDs = (event) => {
        setIDs(event)
    }
    
    let getRequiredNumbers = (event) => {    
        console.log(event);
        assignIDs(event)
    }
    
    let busyIDs = [];
    let workersIDs = {};

const workers = new Map()
const assignIDs = (event) => {
    
    let addPickers = {'pickers':generateID(Number(event.pick))};
    let addYardMarshalls = {'yardMarshalls':generateID(Number(event.yard))};
    let addProblemSolve = {'problemSolve':generateID(Number(event.ps))};
    let addSpecialAssignment = {'specialAssignment':generateID(Number(event.spcl))};
    let addBadgeCheck = {'badgeCheck':generateID(Number(event.pick))};

    let addEmployees ={
        'pickers' : generateID(Number(event.pick)),
        'yardMarshalls' : generateID(Number(event.yard)),
        'problemSolve': generateID(Number(event.ps)),
        'specialAssignment' : generateID(Number(event.spcl)),
        'badgeCheck': generateID(Number(event.pick))
    }

    setEmployees(employee => ({
        ...employee,
        ...addEmployees
    }))
    
    workers.set('pickers', )
    workers.set('', generateID(Number(event.yard)))
    workers.set('', generateID(Number(event.ps)))
    workers.set('specialAssignment', generateID(Number(event.spcl)))
    workers.set('badgeCheck', generateID(Number(event.badge)))
    workersIDs = Object.fromEntries(workers);
    console.log(ids)
}

    
    const generateID = (number) => {
        for(let i = 0; i < number; i++) {
            let random = Math.floor(Math.random() * localData.length)
            console.log('random ', random);
            if(busyIDs.includes(random)){
                i--
                console.log('doesnt include');
            }
            else{
                console.log('includes');
                busyIDs.push(random)
                // currentIDs.push(random)
            }   
        }
        setCurrentIDs(busyIDs)
        return currentIDs
    }
    
    const handleClick = (e) => {
        openWindow({title:'Set a task'})
    }
    
    const closeWindow = () => {
        openWindow()
    }
    
    return (
        <div className={classes.background}>
            {console.log(currentIDs)}
            {window && 
            <MessageBox title={window.title} close={closeWindow}>
                <div>Hello</div>
            </MessageBox>
            }
            <Action sendData = {getRequiredNumbers} />
            <Users data = {props.data} images= {props.imageList} click={handleClick} ids={ids} ></Users>
        </div>
    )
}

export default Table;