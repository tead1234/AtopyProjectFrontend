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
  let [morning, setMorning] = useState(null);
  let [lunch, setLunch] = useState(null);
  let [dinner, setDinner] = useState(null);
  let [sleepTime, setSleepTime] = useState(null);
  let [exercise, setExercise] = useState(null);
  const states =  ["morning", "lunch", "dinner", "sleepTime", "exercise"]; 
  useEffect(() => {
    const url = "http://localhost:8080/read/most?category="
    
    states.forEach((state) => {
      axios.get(url+ state).then((response) =>{ 
        console.log(response);
        if(state == "sleepTime"){
          setSleepTime(response.data.data[0]);
        }
      }).catch((err) => {
        console.log(err);
      });
    });
    return () => {
    };
  }, []);

  return (
    <div className="App" >
      <header className="App-header">
      <BrowserRouter>
          <Routes>
            <Route path='/' element= {
                <MainPage  morning ={morning} lunch = {lunch} dinner = {dinner} sleepTime = {sleepTime} exercise = {exercise}/>
                }></Route>
            <Route path='/create' element = {<CreatePage/>}></Route>
          </Routes>
      </BrowserRouter>
      </header>
      
      
    </div>
  );
}

export default App;
