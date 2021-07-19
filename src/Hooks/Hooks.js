import React,{useState} from 'react'

export default function Hooks() {

const [count,setCount]=useState(0);



  const  plus=()=>{
setCount(count+1)

    }

    const  plus1=()=>{
        setCount(count==0)
        
            }

    return (
        <div style={{backgroundColor:"DodgerBlue"}}>

      <h1>{count}</h1>
        <button onClick={plus}>Increase(Hooks)</button>
        <button onClick={plus1}>Increase(Hooks)</button>


        </div>
    )
}
