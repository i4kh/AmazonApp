import React, { useState, useEffect, useRef} from 'react';
import { Route, Routes } from 'react-router-dom';
import List from './pages/List'
import Table from './pages/Table'
import Menu from './Components/Menu'
import './App.css';

function App() {
  const didMountRef = useRef(false);
  const [imageList, setImageList ] = useState([]);
  const [data, setData] = useState([]);
  const [ids, setIDs] = useState({});
  
  // const getIDs = (props) => {
  //   console.log(props);
  //   setIDs(props)
  // }

  // useEffect(() => {
  //   console.log(ids);
  // }, [ids])

  const getData = (props) => {

    console.log('getdata', props);
    setData(props) 
  }

  const getImageList = (props) => {
    setImageList(props)
  }

  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<Table sendData = {getData} sendPictures = {getImageList} />} />
        {/* <Route path='/list' element={<List data = {data} imageList = {imageList}/>} /> */}
        {/* <Route path='/table' element={<Table data = {data} sendIDs={getIDs} imageList = {imageList} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
