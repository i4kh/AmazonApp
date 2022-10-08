import { useState } from "react";
import React from "react";
import Button from "../Components/Button";
import classes from './action.module.css'

const Action = (props) => { 
   
    // yardMarshals 
    
    const [ yardMarshals, getYardMarshals ] = useState(4);
    const YMcounter = (e) => {
        getYardMarshals(e.target.value);
    }

    // pickStage
    
    const [ pickStage, getPickStage] = useState(5);
    const pickCounter = (e) => {
        e.preventDefault();
        getPickStage(e.target.value);
    }

    //problemSolve

    const [ problemSolve, getProblemSolve] = useState(3);
    const psCounter = (e) => {
        getProblemSolve(e.target.value);
    }

    //specialAssignment
    
    const [ specialAssignment, getSpecialAssignment] = useState(1);
    const SACounter = (e) => {
        getSpecialAssignment(e.target.value);
    }

    //badgeCheck

    const [ badgeCheck, getBadgeCheck] = useState(1);
    const BCCounter = (e) => {
        getBadgeCheck(e.target.value);
    }
    
    const startShift = () => {
        
        console.log('start');
        const workersCount = {
            pick: pickStage <= 40 && pickStage > 0? pickStage : console.log(`error `),
            yard: yardMarshals >= 4 ? yardMarshals : console.log(`error uploading YM`),
            ps: problemSolve > 0 && problemSolve <=6 ? problemSolve : console.log(`error upoading PS`),
            spcl: specialAssignment > 0 ? specialAssignment : console.log(`special ass error`),
            badge: badgeCheck > 0  ? badgeCheck : console.log(`badge Check error `),
        }   
        props.sendData(workersCount);
    }
    
    return(
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.input_container}>
                    <div className={classes.input_line}>
                        <h3>Pickers</h3>
                        <input type={'number'} className={classes.input} onChange = {pickCounter}></input>
                    </div>
                    <div className={classes.input_line}>
                        <h3>Special Assignment</h3>
                        <input type={'number'} className={classes.input} onChange = {SACounter}></input>
                    </div>
                    <div className={classes.input_line}>
                        <h3>Badge Check</h3>
                        <input type={'number'} className={classes.input} onChange = {BCCounter}></input>
                    </div>
                    <div className={classes.input_line}>
                        <h3>Yard Marshall</h3>
                        <input type={'number'} className={classes.input} onChange={YMcounter}></input>
                    </div>
                    <div className={classes.input_line}>
                        <h3>Problem Solve</h3>
                        <input type={'number'} className={classes.input} onChange = {psCounter}></input>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.buttons}>
                    <Button className={classes.button} onClick={startShift}> Start Shift </Button>
                    <Button className={classes.button}> Clear Board </Button>
                    <Button className={classes.button}> Replan </Button>
                </div>
            </div>
        </div>
    )
}

export default Action;