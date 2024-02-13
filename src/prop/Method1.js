import React from "react"
import { useContext } from "react";
import { context } from "../App";
function Method1()
{
    let isval=useContext(context)
    return(
        <>
        <h1>This is heading for props drilling</h1>
        <h1>Name:{isval}</h1>
        <h1>Price:{isval}</h1>
       </>

    )
}
export default Method1