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
    const [start, setStart ] = useState(false)
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
        
        
        const addPictures = (e) => {
            setPictures([...Array.from(e.target.files)])
        filterImage([...Array.from(e.target.files)])
    }
    
    useEffect(() => {
        importedData && pictures ? popUp() : popUp({title: 'Import data'})
    }, [importedData, pictures])

    
    //localStorage test
    //image import-export doesn't work
    
    let localEmployees = [];
    useEffect(() => {
        console.log(employees);
        localStorage.setItem('EmployeeList', JSON.stringify(employees));
        localEmployees = JSON.parse(localStorage.getItem('EmployeeList'));
        console.log(localEmployees);
    }, [employees])
    
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
                console.log(`incorrect Format`);
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
    
        const filterImage = (pics) => {
            let updatedUsers = importedData;
            updatedUsers.map((current) => {
                let currentImage = pics.find(image => image.name === `${current.Username}.jpg`)
                current.image = currentImage;
            })        
            setEmployees([
                ...updatedUsers
            ])
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
    
 // error state 
 
// try {
    
    // } catch (error) {
        
        // }
        
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
        
        const openList = () => {
            showList(true)
            setActiveEmployees([])
        }
       
       const popUp = (e) => {
        openSettings(e)
       }
       
       const removePopUp = () => {
        if(importedData && pictures != 0){
            openSettings()
        }
       }  
         
        return (
            <div className={classes.background}>
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
                <List workers={importedData} pictures={pictures} onClick={() => {showList(false)}} getActive={saveActiveEmployees}/>
            }
            <Menu list={openList} import={()=> {}}/>
                <div className={classes.info_container}>
                    <div className={classes.date}>
                        <h2>Date</h2>
                        <h2 className={classes.orange}>{getDate()}</h2>
                    </div>
                    <div className={classes.shift_container}>
                            <h1>Early Shift</h1>
                        <Action click = {(props) => {setStart(props)}} close = {() => {setActiveEmployees([]); setBB(0); setGB(0)}} />
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
            <Users click={handleClick} workers={activeEmployees} display={start}></Users>
        </div>
    )
}

export default Table;