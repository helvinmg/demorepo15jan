import { useState, useEffect } from "react";
function Counter()
{
    const [count,setCount]=useState(0);
    useEffect(()=>console.log("current count is",count),[])
    let mystyle={'color':'red','text-decoration':'underline','background-color':'yellow'}
    return(
        <>
        <h1 style={mystyle}> Test </h1>
        <h1 style={{'color':'red'}}>{count}</h1>
        <button onClick={()=>setCount(count+1)}> Increase </button>
        </>
    )
}
export default Counter;