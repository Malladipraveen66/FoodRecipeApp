import React from "react";
class Practice2 extends React.Component{
    state={
    name:"abc",
    age:"34"
    }
    render(){
        return(
            <div>
                <h1>This is heading tag</h1>
                <h1>{this.state.name}</h1>
                <p>{this.state.age}</p>
                <input id="age" type='number'/>
                <button onClick={this.updateage}>update</button>
            </div>
        )
        
    }
}
export default Practice2