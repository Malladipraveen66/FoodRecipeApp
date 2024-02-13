import React from "react";
import {useRef} from "react"
 export default function useRef()
 
{
    let ele=useRef(10)
    return(
        <>
        <h1>This is heading tag</h1>
        <button onClick={(e)=>{e.target.value}}>click me</button>
        <button onClick={()=>{}}>Submit</button>
        </>
    )
}