import React from "react";
import { getPadTime } from "../../help/getPadTime";

import "./timer.css"
import svg from "./hourglass.svg"


const Timer = ({ seconds }) => {

  const minutesToDisplay = Number.parseInt(seconds / 60);
  const secondsToDisplay = seconds - minutesToDisplay * 60;

  return (
    <div className="mainDivTimer">
      <div className="progress">Ход</div>
      <div className="timer">
        {getPadTime(minutesToDisplay)}:{getPadTime(secondsToDisplay)}
        <img className="img" src={svg} alt=""/>
      </div>
    </div>
  );
};

export default Timer;
