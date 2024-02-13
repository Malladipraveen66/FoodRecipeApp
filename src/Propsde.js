// function Propsde({name,age}){
//     return(
//         <>
//         <h1>This is Props destructring</h1>
//         <p>{name}</p>
//         <p>{age}</p>
//         </>
//     )
// }
// export default Propsde

//    calculator app using react
import React from "react";
import './Cal.css'
function Propsde(){
    return(
        <>
        <div className="calculator">
        <h1>Calculator app</h1>
        <div className="inbox">
        <input type='text'></input>
        </div>
        </div>
        </>
    )
}
export default Propsde