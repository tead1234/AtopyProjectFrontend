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
import SpecificPage from './component/SpecifiPage.js/SpecificPage';
function App() {
  const [data, setData] = useState([]);
  // Switch는 그냥 전역상태로 관리하는게 더 편하지 않을까?
  let [Switch, setSwitch] = useState(false);
  let [morning, setMorning] = useState(null);
  let [lunch, setLunch] = useState(null);
  let [dinner, setDinner] = useState(null);
  let [sleepTime, setSleepTime] = useState(null);
  let [exercise, setExercise] = useState(null);
  const states =  ["morning", "lunch", "dinner", "sleepTime", "exercise"]; 
  const data1 = [
    {
      "id": "매우 안좋음",
      "label": "5",
      "value": 3,
      "color": "hsl(78, 70%, 50%)"
    },
    {
      "id": "안좋음",
      "label": "4",
      "value": 2,
      "color": "hsl(342, 70%, 50%)"
    },
    {
      "id": "좋음",
      "label": "2",
      "value": 10,
      "color": "hsl(42, 70%, 50%)"
    }
    
    ];
    const sleepData = [
      {
        "id": "Serie 1",
        "data": [
          {
            "x": "3월 1일",
            "y": 6
          },
          {
            "x": "3월 2일",
            "y": 7
          },
          {
            "x": "3월 3일",
            "y": 8
          }
        ]
      }
    ];
  useEffect(() => {
    const url = "http://localhost:8080/read/most?category="
    
    states.forEach((state) => {
      axios.get(url+ state).then((response) =>{ 
        console.log(response);
        if(state == "sleepTime"){
          setSleepTime(response.data.data[0]);
        }if(state == "morning"){
          setMorning(response.data.data[0]);
        }if(state == "lunch"){
          setLunch(response.data.data[0]);
        }if(state == "dinner"){
          setDinner(response.data.data[0]);
        }if(state == "exercise"){
          setExercise(response.data.data[0]);
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
                <MainPage  morning ={morning} lunch = {lunch} dinner = {dinner} sleepTime = {sleepTime} exercise = {exercise} switch = {Switch} setSwitch = {setSwitch}/>
                }></Route>
            <Route path='/specific' element = {<SpecificPage data = {data1} sleepData = {sleepData}></SpecificPage>}></Route>
          </Routes>
      </BrowserRouter>
      </header>
      
      
    </div>
  );
}

export default App;
