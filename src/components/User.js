import { useEffect, useState } from "react"

const User = (props) =>{
    const [count,setCount] = useState(0)
    const count1 = useState(1)

    useEffect(()=>{
        //api call
    },[])

    return(
    <div className="p-3 border border-black bottom-1">
        <h1>Name: {props.name} </h1>
        <h1>count: {count}</h1>
        <button className="bg-green-100 border border-black cursor-pointer" onClick={()=>{
            setCount(count+1)
        }}>Count increase</button>
        <h1>Location:Gurgaon</h1>
        <h1>Contact:fareha0402@gmail.com</h1>
    </div>)
 }
 export default User