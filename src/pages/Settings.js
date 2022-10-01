import React, {useRef, useState} from "react";
import classes from './settings.module.css';
import * as XLSX from 'xlsx'

const Settings = (props) => {

    const [popup, showPopup] = useState();
    const [pictures, setPictures] = useState([]);
    
    const checkFileFormat = (e) => {
        const file = e.target.files[0].name;
        const correctFormats = ['xlsx', 'xltm', 'xlsm', 'xlsb', 'xltx', 'xltm'];
        let hasFormat = false;
        for(let i = 0; i <= correctFormats.length; i++){
            if(file.includes(correctFormats[i])){
                console.log(`correct format`);
                hasFormat = true;
                handleFile(e);
                break;
            }
            else{
                console.log(`incorrectFormat`);
            }
        }
        
        console.log(e);
    }

    const handleFile = async (e) => {
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        // console.log(worksheet);
        props.sendData(jsonData)
    }

    const addPictures = (e) => {
        let localImages = [];
        console.log(e.target.files);
        localImages = [...e.target.files];
        setPictures([...e.target.files]);
        props.sendPictures(e.target.files);
    }

    return(
        <div className={classes.container}>
            <div className={classes.left}>
                <h3>Import excel with employees list</h3>
                <input type='file' onChange={(e) => checkFileFormat(e)}></input>
                <h3>Choose folder with employees pictures</h3>
                <input type='file' multiple accept="image/*" onChange = {addPictures} />
                <h3>Choose a shift</h3>
                <select id="shift" name="shift">
                    <option value = "early">Early</option>
                </select>
            </div>
            <div className={classes.right}>
            </div>
        </div>
    )
}

export default Settings;