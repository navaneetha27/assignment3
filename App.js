import React, { useState } from 'react';
import Icon from './Components/Icon.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';



const tiktackArray =new Array(9).fill("");
function App(){
    let [isCross,setIsCross]=useState(true)
    let [winMessage,setWinMessage]=useState("");

    const playAgain=()=>{
        setIsCross(true);
        setWinMessage("")
        tiktackArray.fill("");

    }
    
    const findWinner= ()=>{
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (ticktackArray[a] && ticktackArray[a] === ticktackArray[b] && ticktackArray[a] === ticktackArray[c]) {
      return ticktackArray[a];
    }
  }
  return null;
}
    
    
    return(
        <div>
           <div>
               <Icon  choice="czz"/>
           </div>
        </div>
    )
}



export default App;

