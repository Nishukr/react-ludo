import { useState } from "react";
export default function LudoBoard(){
    let [moves,setMoves]=useState({blue: 0,red: 0,yellow: 0,green: 0});

    let upDateBlue=()=>{
       
        setMoves((prevMoves)=>{
            return {...prevMoves,blue:prevMoves.blue+=1};
        })
    };
    let upDateRed=()=>{
       
        setMoves((prevMoves)=>{
            return {...prevMoves,red:prevMoves.red+=1};
        })
    };
    let upDateYellow=()=>{
        
        setMoves((prevMoves)=>{
            return {...moves,yellow:moves.yellow+=1};
        })
    };
    let upDateGreen=()=>{
        
        setMoves((prevMoves)=>{
            return {...prevMoves,green:prevMoves.green+=1};
        })
    };


    return(<div>
        <p>Game Begins</p>
        <div className="board">
            <p>Blue move ={moves.blue} </p>
            <button style={{backgroundColor:"blue"}} onClick={upDateBlue}>+1</button>
            <p>Red move ={moves.red} </p>
            <button style={{backgroundColor:"red"}} onClick={upDateRed}>+1</button>
            <p>Yellow move ={moves.yellow} </p>
            <button style={{backgroundColor:"yellow", color:"black"}} onClick={upDateYellow}>+1</button>
            <p>green move ={moves.green} </p>
            <button style={{backgroundColor:"green"}} onClick={upDateGreen}>+1</button>

        </div>
    </div>)

}