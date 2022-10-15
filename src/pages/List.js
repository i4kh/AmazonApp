import React, { useState } from "react";
import classes from './list.module.css';
import Row from "../Components/Row";
import Header from "../Components/Header";

const List = (props) => {
    
    let localData = [ ...props.workers ];
    const pictures = [ ...props.pictures ];
    
    localData.map((data) => {
        let currentImage = pictures.find(image => image.name === `${data.Username}.jpg`)
        data.image = currentImage;
    })

    const getActiveUsers = (e) => {
        props.getActive(e)
    }

    return(
        <div>
            <div className={classes.background} onClick={props.onClick}/>
            <div className={classes.scroller}>
                <Header /> 
                <Row data = {localData} sendActiveUsers={getActiveUsers} />
            </div>
        </div>
    )
}

export default List;