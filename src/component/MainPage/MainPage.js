import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ContainerForSubTitle from './ContainerForSubTitle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MainTitle from './mainTitle';
import CreatePage from '../CreatePage/CreatePage';
import React, { Component,  useEffect, useState } from 'react';

function MainPage(props){
  let [Switch, setSwitch] = useState(false);
 
    return(
        <div className="MainPage">
          <MainTitle skinState = {props.skinState}></MainTitle>,
          <ContainerForSubTitle morning ={props.morning} lunch ={props.lunch} dinner ={props.dinner} sleepTime= {props.sleepTime} exercise = {props.exercise}></ContainerForSubTitle>,
          <Link to= "/specific">
            <Button style={{position : "relative", top : "70px", margin : "20px"}} >더 자세히 알아보기</Button>
          </Link>
          <Button variant='secondary' onClick={() => {setSwitch(!Switch)}} style={{position : "relative", top : "70px"}}>오늘 상태 기록하기</Button>
          {
                Switch? <CreatePage></CreatePage> : null
          }
        </div>
    );
}
export default MainPage; 