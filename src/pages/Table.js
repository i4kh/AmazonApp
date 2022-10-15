import React, {useEffect, useState} from "react";
import classes from './table.module.css'
import Action from "../Components/Action";
import Users from "../Components/Users";
import MessageBox from "../Components/Messagebox";
import Menu from "../Components/Menu";
import List from "./List";
import * as XLSX from 'xlsx';

const Table = (props) => {

    const [pictures, setPictures] = useState()
    const [importedData, setData] = useState()
    const [window, openWindow] = useState()
    const [list, showList] = useState(false)
    const [settings, openSettings] = useState({title:'Import required data'})
    const [employees, setEmployees ] = useState([])
    const [activeEmployees, setActiveEmployees] = useState([])
    const [bb, setBB] = useState(0)
    const [gb, setGB] = useState(0)
    
        const getDate = (separator=' - ') => {
            let newDate = new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            return (`${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`)
        }
        
        const openList = () => {
            showList(true)
        }
        
        const hideList = () => {
            showList(false)
        }

    const popUp = (e) => {
        openSettings(e)
    }

    const removePopUp = () => {
        if(importedData && pictures != 0){
            openSettings()
        }
    }    

    const addPictures = (e) => {
        setPictures([...Array.from(e.target.files)]) 
    }
    
    const getNumbers = (event) => {
        assignIDs(event)
    }
    
    useEffect(() => {
        importedData && pictures ? popUp() : popUp({title: 'Import required data'})
    }, [importedData, pictures])
    
    const checkFileFormat = (e) => {
        const file = e.target.files[0].name;
        const correctFormats = ['xlsx', 'xltm', 'xlsm', 'xlsb', 'xltx', 'xltm'];
        let hasFormat = false;
        for(let i = 0; i <= correctFormats.length; i++){
            if(file.includes(correctFormats[i])){
                hasFormat = true;
                handleFile(e);
                break;
            }
            else{
                console.log(`incorrectFormat`);
            }
        }
    }

    const handleFile = async (e) => {
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setData(jsonData);
    }
    
    const displayImportedNumbers = (employees) => {
        let green = 0;
        let blue = 0;
        employees.map((user) => {
            user.Employment_Type === 'TEMP' ? green++ : blue++;
        })
        setGB(green)
        setBB(blue)
    }

    const assignIDs = (event) => {
        if(event) {
            let addEmployees = {
                'pickers' : generateID(Number(event.pick)),
                'yardMarshalls' : generateID(Number(event.yard)),
                'problemSolve': generateID(Number(event.ps)),
                'specialAssignment' : generateID( Number(event.spcl)),
                'badgeCheck': generateID(Number(event.badge))
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
    
 // error state 
    
// try {
    
// } catch (error) {
    
// }

    let workingEmployees = [];
    const generateID = (number) => {    
            let currentEmployees = [];
            for (let i = 0; i < number; i++){
                let index = Math.floor(Math.random() * importedData.length)
                if(workingEmployees.includes(importedData[index])){
                    --i
                }
                else{
                    workingEmployees.push(importedData[index]);
                    currentEmployees.push(importedData[index]);
                }
            }
        console.log('working ', workingEmployees);
        console.log('current ', currentEmployees);
        return currentEmployees;
    }

    const handleClick = (e) => {
        openWindow({title:'Set a task'})
    }

    const closeWindow = () => {
        openWindow()
    }

    const saveActiveEmployees = (props) => {
        setActiveEmployees([...props])
        displayImportedNumbers(props)
    }
    
    return (
        <div className={classes.background}>
            {console.log(activeEmployees)}
            {settings && 
            <MessageBox title={settings.title} close={removePopUp}>
                <div className={classes.messagebox_line}>
                    <h3>Employee list</h3>
                    <input type='file' id="input" onChange={(e) => checkFileFormat(e)} className={classes.input}/>
                </div>
                <div className={classes.messagebox_line}>
                    <h3>Pictures</h3>
                    <input type='file' multiple accept="image/*" onChange = {addPictures} className={classes.input} />
                </div>
            </MessageBox>}
            {list &&
                <List workers={importedData} pictures={pictures} onClick={hideList} getActive={saveActiveEmployees}/>
            }
            <Menu list={openList}/>
            <Action sendData = {getNumbers} />
                <div className={classes.info_container}>
                    <div className={classes.date}>
                        <h2>Date</h2>
                        <h2 className={classes.orange}>{getDate()}</h2>
                    </div>
                    <div className={classes.shift_container}>
                            <h1>Early Shift</h1>
                    </div>
                    <div className={classes.import_container}>
                            <h3>Imported</h3>
                            <div className={classes.row}>
                                <div className={classes.green}></div>
                                    <h3>{gb}</h3>
                            </div>
                            <div className={classes.row}> 
                                <div className={classes.blue}></div>
                                    <h3>{bb}</h3>
                            </div>
                    </div>
                </div>
            <Users click={handleClick} workers={activeEmployees} ></Users>
        </div>
    )
}

export default Table;