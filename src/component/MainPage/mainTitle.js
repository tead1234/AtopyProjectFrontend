import {  useState, useEffect } from "react";

import Bounty from 'react-bounty';



function MainTitle(){

  //ddwdwdw
  return (
    <div className="slot">
      <h2>오늘의 피부상태는 ?</h2>
      <Bounty from ={2000} to = {4000} className="bounty"/>
    </div>
  );
}
export default MainTitle; 