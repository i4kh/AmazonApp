import React, {useEffect, useState} from "react";
import classes from './table.module.css'
import Action from "../Components/Action";
import Users from "../Components/Users";
import MessageBox from "../Components/Messagebox";
import * as XLSX from 'xlsx';

const Table = (props) => {

    const [pictures, setPictures] = useState()
    const [importedData, setData] = useState()
    const [window, openWindow] = useState()
    const [imported, isImported] = useState(false)
    const [settings, openSettings] = useState({title:'Import required data'})
    const [employees, setEmployees ] = useState([])

    
    const popUp = (e) => {
        openSettings(e)
    }
    
    const addPictures = (e) => {
        setPictures([...Array.from(e.target.files)]);
    }
    
    const getNumbers = (event) => {
        assignIDs(event)
    }

    useEffect(() => { 
        if(importedData && pictures) {
            popUp()
        }
        else{
            popUp({title: 'Import required data'})
        }
    }, [importedData])

    //doesn't work: line 46
    //prevent useEffect loop
    
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
        setData(jsonData)
    }

const removeWindow = () => {
    openSettings() 
}

const assignIDs = (event) => {
    if(event) {
        let addEmployees = {
            'pickers' : generateID('pickers', Number(event.pick)),
            'yardMarshalls' : generateID('yard', Number(event.yard)),
            'problemSolve': generateID('pms',Number(event.ps)),
            'specialAssignment' : generateID('sf', Number(event.spcl)),
            'badgeCheck': generateID('trap', Number(event.badge))
        }
        filterImage(addEmployees)
    }
}

const filterImage = (user) => {
    let localUser = {};   
    for (const [key, value ] of Object.entries(user)){
        value.map((current) => {
            let currentImage = pictures.find(image => image.name === `${current.Username}.jpg`)
            current.image = currentImage;
        })        
        localUser[key] = value;
    }
    setEmployees({
        ...localUser
    })
}   

const generateID = (number) => {    
        let workingEmployees = [];
        for (let i = 0; i < number; i++){
            let index = Math.floor(Math.random() * importedData.length)
            !workingEmployees.includes(importedData[index]) ?
            workingEmployees.push(importedData[index]) : --i ;
        }
    return workingEmployees;
}

const handleClick = (e) => {
    openWindow({title:'Set a task'})
}

const closeWindow = () => {
    openWindow()
}

    return (
        <div className={classes.background}>
            {settings && 
            <MessageBox title={settings.title} close={removeWindow}>
                <h3>Import excel with employees list</h3>
                <input type='file' onChange={(e) => checkFileFormat(e)}></input>
                <h3>Choose folder with employees pictures</h3>
                <input type='file' multiple accept="image/*" onChange = {addPictures} />
            </MessageBox>}
            <Action sendData = {getNumbers} />
            <Users click={handleClick} workers={employees} ></Users>
        </div>
    )
}

export default Table;