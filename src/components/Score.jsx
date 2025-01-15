import { useState, useEffect } from "react";
function Score()
{
    const [score,setScore]=useState(10);
    //
    useEffect(()=>{console.log("score has been changed",score);},[score])
    return(
        <>
        <h1>{score}</h1>
        <button onClick={()=>setScore(score+10)}> Goal </button>
        <button onClick={()=>setScore(score-5)}> Penalty </button>
        <button onClick={()=>setScore(0)}> Clear</button>
        </>
    )
}
export default Score;