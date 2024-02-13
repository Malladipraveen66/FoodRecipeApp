// import React from 'react'

// In function we can directly declare the props in different ways
// export default function Practice(x) {
//     // console.log(props)
//   return (
//     <div>
        
//         <h1>This is heading 1</h1>
//         <h1>name.{x.name}</h1>
//         <h1>age.{x.age}</h1>
//     </div>
//   )
  
// }
// in class intialization if we gives input to a class  that class object create daniki properties intialize avutunatu
// import React from "react";
// class Practice extends React.Component{

//     render(){
//         return(
//             <>
//             <h1>name</h1>
//             <p>age</p>
//             <h2>Name:{this.props.name}</h2>
//             <h3>Age:{this.props.age}</h3>
//             </>
//         )
//     }

// }
// export default Practice
// In jsx notation we use curly braces
// alert msg will only takes one input if we want to add we use + 
// import React from "react";
// class Practice extends React.Component{
//     displaymessage(num){
//         alert("buttonclicked"+num);
//     }
//     displaymessage2(){
//         alert(20);
        
//     }
//     render(){
//         return(
//             <>
//             <button onClick={alert("hello")}>click me</button>
//             <button onClick={(e)=>(this.displaymessage(40,e))}>effect</button>
//             <button onClick={(e)=>(this.displaymessage2(e))}>effect</button>

//             </>
//         )
//     }
// }
// export default Practice

// clas compo-state,usestate-funccomp(information dynamic)-or hooks
// import React, { useState } from 'react'
// import { useState } from 'react'

// export default function Practice() {
//      let [counter,updatecounter]=useState(0)
//     //  usestate(0)>intial value as input in form of array array destructuring 
//   return (
//     <div>
//         <h1>This is usestate component example</h1>
//         <h1>counter value:{counter}</h1>
//         {/* <input type='button'>submit</input> */}
//         <button onClick={()=>(
//             updatecounter(counter++)
//         )}>submit</button>
//         <button onClick={()=>(
//             updatecounter(counter--)
//         )}>reset</button>
        
//     </div>
//   )
 
// }
// state is in obj form and to change the state value we use set state
// 
import React from "react";

class Practice extends React.Component{
    state ={
        counter:0
    }
    render(){
        return(
            <>
            <h1 style={{backgroundColor:"blue"}}>This is h1 tag</h1>
            <p>Counter:{this.state.counter}</p>
            <button onClick={()=>(
                this.setState({
                    counter:1+this.state.counter
                })
            )}>Increment</button>
            <input type="button"></input>
            </>
        )
    }
}
export default Practice
// we cannot change the state directly  we use 1+
// setstate obj>state kinda create chesindi modify cheyadaniki.it is an asynchronous method
// browser visible avvadniki setstate vadatam
// set state has only 2 arguments one is obj and other is callback func(arrow func)
// state concept is used to change the value of  a element in a web page
// IN fc>we use state usestate
// In cc>we use state setstate
// Event has event name and function(arrow func,normal func) i.e onclick={}
