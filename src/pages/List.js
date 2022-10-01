import React, { useState } from "react";
import classes from './list.module.css';
import Row from "../Components/Row";
import Header from "../Components/Header";
import MessageBox from "../Components/Messagebox";

const List = (props) => {
    
    let rows = [];
    
    const [window, openWindow] = useState();
    const [id, storeId] = useState();
    const setSpecialTask = (e) => {
        openWindow({title:'Set a special task'})
        storeId(e.target.id)
    }
    
    const removeWindow = () => {
        openWindow();
      }
    const [option, setOption] = useState();
    
      const addTask = (e) => {
        setOption('' + e.target.innerHTML)
        console.log(`option`,option);
      }

    return(
    <div className={classes.background}>
        {window && 
        <MessageBox title={window.title} close={removeWindow} >
            <button onClick={addTask} className={classes.button}>Yard Marshall</button>
            <button onClick={addTask} className={classes.button}>Problem Solve</button>
            <button onClick={addTask} className={classes.button}>DA Support</button>
            <button onClick={addTask} className={classes.button}>Badge Check</button>
        </MessageBox>}

        
        <Header />
        <div className={classes.scroller}>
            <Row onClick={setSpecialTask} title={option} id={id} data = {props.data} images = {props.imageList}/>
        </div>
        <button className={classes.save}>Save</button>
    </div>
    
    )
}

export default List;