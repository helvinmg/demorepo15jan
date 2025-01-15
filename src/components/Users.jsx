import { useEffect, useState } from "react";
function Users()
{
    const [users,setUsers]=useState([])
    const [refresh,setRefresh]=useState(0)
    useEffect(()=>
    {
        //api call
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())//convert to readable
        .then(data=>{setUsers(data);console.log(data);})//use the data from response
        
    },[refresh])
    return(
        <>
        <h2>User List</h2>
        {/* <ol>
            <li>test</li>
            {users.map((user)=><li>{user.name}</li>)}
        </ol> */}
        <table border='1'>
        <tr><th>Name</th><th>Email</th><th>Phone</th></tr>
        {users.map((user)=><tr><td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td></tr>)}
        </table>
        <button onClick={()=>setRefresh(refresh+1)}>Refresh</button>
        </>
    )
}
export default Users;