import React, { useState } from 'react';
import * as XLSX from 'xlsx'
import { Route, Routes } from 'react-router-dom';
import List from './pages/List'
import Table from './pages/Table'
import Settings from './pages/Settings'
import Menu from './Components/Menu'
import './App.css';
import data from './data';

function App() {
  const [imageList, setImageList ] = useState([]);
  const [data, setData] = useState([]);
  
  const getData = (props) => {
    setData(props) 
  }



  const getImageList = (props) => {
    setImageList(props)
  }
  
  return (
    <div className="App">
      {console.log(data)}
      <Menu />
      <Routes> 
        <Route path='/' element={<Settings sendData = {getData} sendPictures = {getImageList} />} />
        <Route path='/list' element={<List data = {data} imageList = {imageList}/>} />
        <Route path='/table' element={<Table data = {data} imageList = {imageList} />} />
      </Routes>
    </div>
  );
}

export default App;
