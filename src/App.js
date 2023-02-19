import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTitle from './component/mainTitle';
import SubTitleForEating from './component/SubTitleForEating';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component,  useEffect, useState } from 'react';
import axios from 'axios';
import ContainerForSubTitle from './component/ContainerForSubTitle';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/read/most?category=sleepTime');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  // example json data = 
  const a=  {
    "date" : '2022-01-20',
    "skinState" : 5,
    "sleepTime" : 8
  }
  // server에서 json 데이터 받아오기
  console.log(data.data[0].sleepTime);

  return (
    <div className="App" >
      <header className="App-header">
          {/* {
            data.map((item) =>
              <h3>item</h3>
            )
          } */}
          <MainTitle skinState = {a.skinState}></MainTitle>
          <ContainerForSubTitle sleepTime= {data.data[0].sleepTime}></ContainerForSubTitle>
      </header>
    </div>
  );
}

export default App;
