// By using normal func we can call the event by 3 ways
// in class comp we can trigger events by using arrow funcs()=>,this.functionname.bind(this),we can directly declare in constructor method
// State create in class component we use constructor method
// In constructor>super keyword>this.state(method)(it is like an object)(we have to mention the state in this.state method)
// onclick->event handler>arrow function (this.function name creation)>call the function
// for state modify we use set state (state variable)
// for Ui accessing we have to use this.state.variable name or key in class component
// To modify we use set state
// import React, { Component } from 'react'
// By using arrow function to change the event or acll the event by using arrow function
// class Classcomp extends Component {
//     constructor(){
//       super()  
//       this.state=
//       {
//        username:"Arun"
//       }

//     }
//     Changenamefunc(){
//      this.setState({
//         username:"Ravi"
//      })
//     }
//   render() {
//     return (
//         <>
//       <div>{this.state.username}</div>
//       <button onClick={()=>this.Changenamefunc()} >Changename</button>
//       </>
//     )
//   }
// }
// export default Classcomp
//2 By using Bind function like the normal function
// import React, { Component } from 'react'

// export default class Classcomp extends Component {
//     constructor(){
//         super()
//         this.state=
//         {
//             username:"Abhi"
//         }
//     }
//     Func(){
//         this.setState({
//             username:"Aravind"
//         })
//     }
//   render() {
//     return (
//         <>
//       <div>{this.state.username}</div>
//       <button onClick={this.Func.bind(this)}>Bind func</button>
//       </>
//     )
//   }
// }
// 3 by declaring the bind function in the super keyword
// we declare two or more methods by using ,
import React, { Component } from 'react'

export default class Classcomp extends Component {
    constructor(){
        super()
        this.state=
        {
            // username:"Abhi",
            cnt:0
        }
    }
    // Func(){
    //     this.setState({
    //         username:"Bala"
    //     })
    // }
    // this.setstate we use call backs to checks the upate of the state
    // cntincr(){
    //     this.setState({
    //         cnt:this.state.cnt+5
    //     })
    //     console.log(this.state.cnt)
    // }
    // we use prev func 
    cnthandler(){
        this.setState((prevstate)=>({
         cnt:prevstate.cnt+7
        }),()=>{console.log(this.state.cnt)})
    }
    cntincr(){
        this.cnthandler()
        this.cnthandler()
        this.cnthandler()
        this.cnthandler()
        this.cnthandler()
    }
    // Deccnt(){
    //     this.setState({
    //       cnt:this.state.cnt-1
    //     })
    //     console.log(this.state.cnt)
    // }
    // Rese(){
    //     this.setState({
    //          cnt:0
    //     })
    //     console.log(this.state.cnt)
    // }
  render() {
    return (
        <React.Fragment>
      {/* <div>{this.state.username}</div> */}
      <div>{this.state.cnt}</div>
      {/* <section>{this.state.cnt}</section>
      <div>{this.state.cnt}</div> */}
      {/* <button onClick={this.Func}>Bind func</button> */}
      <button onClick={()=>this.cntincr()}>Increase count</button>
      {/* <button onClick={()=>this.Deccnt()}>Decrcount</button>
      < button onClick={()=>this.Rese()}> Reset</ button> */}
      </React.Fragment>
    )
  }
}
// we cannot directly change the state we use the setstate
// we canot directly change the state directly it will change the state but it cannot cahnge the ui.
// prev state
// <React.Fragment/> or </>
// 