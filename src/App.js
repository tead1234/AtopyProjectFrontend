import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTitle from './component/MainPage/mainTitle';
import SubTitleForEating from './component/MainPage/SubTitleForEating';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component,  useEffect, useState } from 'react';
import axios from 'axios';
import ContainerForSubTitle from './component/MainPage/ContainerForSubTitle';
import Button from 'react-bootstrap/Button';
import MainPage from './component/MainPage/MainPage';
import CreatePage from './component/CreatePage/CreatePage';
function App() {
  const [data, setData] = useState([]);
  let [Switch, setSwitch] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8080/read/most?category=sleepTime');
  //       setData(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // example json data = 
  const a=  {
    "date" : '2022-01-20',
    "skinState" : 5,
    "sleepTime" : 8
  }
  // server에서 json 데이터 받아오기
  // console.log(data.data[0].sleepTime);

  return (
    <div className="App" >
      <header className="App-header">
      <BrowserRouter>
          <Routes>
            <Route path='/' element= {
                <MainPage skinState= {a.skinState} sleepTime = {a.sleepTime}/>
                }></Route>
            <Route path='/create' element = {<CreatePage/>}></Route>
          </Routes>
      </BrowserRouter>
      </header>
      
      
    </div>
  );
}

export default App;
