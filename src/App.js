import React from "react";
import Routes from "./config/routes";
import './App.css';


function App() {

  const inactivityTime = () => {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeyup = resetTimer;

    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(()=>localStorage.removeItem("_mt_"), 36000000);
      // 1000 milliseconds = 1 second
    }
  };

  window.onload = function () {
    if(localStorage.getItem("r_me") === false){
      inactivityTime();
    }
  };
return (
  <div className="">
    <Routes/>
  </div>
);
}

export default App;
