import React, { useState } from "react";
import classes from './row.module.css'
import data from "../data";
import MessageBox from "./Messagebox";
    

const Row = (props) => {

    const localData = [ ...props.data ]
    const [images, setImages] = useState([...props.images]);
    const [imageURL, setImageURL] = useState([]);

    const filterImage = (data) => { 
        let username = data.Username;
        return (<div>
                    {images.map((image,index) => (
                        image.name == `${username}.jpg` ? <img src={URL.createObjectURL(image)} alt='user-image' className={data.Employment_Type == 'TEMP' ? classes.image_green : classes.image_blue}/> : ''
                    ))}
                </div>)
    }
        
    return(
        <div>
            {localData.map((data, index) => (
                <div className={classes.container}>
                    {console.log(data.Employment_Type)}
                    <div>
                    {filterImage(data)}
                    </div>
                    <div>{data.Username}</div>
                    <div>{data.Name}{' '}{data.Surname}</div>
                    <div>{data.Employee_ID}</div>
                    <div>{data.Badge_ID}</div>
                    <div className={classes.special_task}>
                        <h3>
                        {index == props.id ? props.title : ''}
                    </h3>   
                    </div>
                        <button className={classes.button} onClick={props.onClick} id={index}>+</button>
                </div>
                ))}
            </div>
      )
}

    


export default Row;