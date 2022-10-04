import React, { useState, useEffect, useRef} from 'react';
import * as XLSX from 'xlsx'
import { Route, Routes } from 'react-router-dom';
import List from './pages/List'
import Table from './pages/Table'
import Settings from './pages/Settings'
import Menu from './Components/Menu'
import './App.css';
import data from './data';

function App() {
  const didMountRef = useRef(false);
  const [imageList, setImageList ] = useState([]);
  const [data, setData] = useState([]);
  const [ids, setIDs] = useState({});
  
  const getIDs = (props) => {
    setIDs(props)
  }

  const getData = (props) => {

    console.log('getdata', props);
    setData(props) 
    //console.log('getdata', data);
  }

  // Our array without any IDs
  // const[workers, setWorkers] = useState([]);
  // const[unusedWorkerIds, setUnusedWorkerIds] = useState([]);

  // useEffect(() => {
  //   if (! didMountRef.current) { 

  //     setWorkers([
  //       {
  //         'name': 'Arthur',
  //       },
  //       {
  //         'name': 'Sergey'
  //       },
  //       {
  //         'name': 'Dimitry'
  //       },
  //       {
  //         'name': 'Alexander'
  //       }
  //     ]);

  //     setWorkers(prevValue => {
  //       prevValue.forEach(i => {
  //        i.id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
  //       })

  //       setUnusedWorkerIds([...prevValue.map(w => w.id)]);

  //       return prevValue
  //     })
  //   }

  //   didMountRef.current = true;
  // });

  // const getRandomWorkers = (count) => {
  //   let countOfUnusedWorkers = unusedWorkerIds.length;
  //   let randomWorkers = [];

  //   for(let i = 0; i < count; i++){


  //     console.log('index', index);
  //     console.log('workerId', workerId);
  //     console.log('worker', worker);

  //     randomWorkers.push(worker);

  //     setUnusedWorkerIds(prevValue => {
  //       return prevValue.map(i => i.id !== workerId);
  //     })
  //   }

  //   console.log('countOfUnusedWorkers', countOfUnusedWorkers);
  // }

  const getImageList = (props) => {
    setImageList(props)
  }
  
  return (
    <div className="App">
      {/* {console.log('DATA ' ,data)} */}
      {/* ]]]{console.log('data', data)}
      {console.log('getRandomWorkers(2)', getRandomWorkers(2))}
     */}
      {/* {console.log('workers', workers)}
      {console.log('unusedWorkerIds', unusedWorkerIds)} */}


      <Menu />
      <Routes> 
        <Route path='/' element={<Settings sendData = {getData} sendPictures = {getImageList} />} />
        <Route path='/list' element={<List data = {data} imageList = {imageList}/>} />
        <Route path='/table' element={<Table data = {data} sendIDs={getIDs} imageList = {imageList} />} />
      </Routes>
    </div>
  );
}

export default App;
