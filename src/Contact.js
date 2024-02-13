import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(){
        super()
        this.state={
            username:"",
            Age:"",
            UserData:[]
        }
    }
    submithandler(e){
      e.preventDefault();
      let data={
        studentName:this.state.username,
        studentAge:this.state.Age
      }
      // console.log(data)
      // This is used to store all the values in one place so we use push method
      this.state.UserData.push(data)
      console.log(this.state.UserData)
      // By declaring the set state again it becomes the value to intial state
      this.setState({
        username:''
      })
      this.setState({
        Age:''
      })
    }
    namehandler(e){
    this.setState({
      username:e.target.value
    })    
    }
    agehandler(e){
      this.setState({
        Age:e.target.value
      })
    }
  render() {
    return (
      <div>
        <form onSubmit={(e)=>this.submithandler(e)}>
            <label>username</label>
            <input type="text" value={this.state.username} onChange={(e)=>this.namehandler(e)}></input>
            <br></br>
            <label>Age</label>
            <input type="number" value={this.state.Age} onChange={(e)=>this.agehandler(e)}></input>
            <button>save</button>
            <br>
            </br>
            <table>
              <thead>
                <th>
                  <td>StudentName</td>
                </th>
                <th>
                  <td>studentAge</td>
                </th>
              </thead>
              <tbody>
              {this.state.UserData.map((value,index)=>(
              <tr key={index}>
                <td>{value.studentName}</td>
                <td>{value.studentAge}</td>
              </tr>
              ))}
              </tbody>
            </table>
        </form>
      </div>
    )
  }
}
// we use onchange evnt handler in form validation to change value
// then we have to call the age and name handler
// evnt is passed to function
// then we get the function
// if we want to diplay and store the username and age we have to store it in an array
// To prevent page refresh we have to use the e.preventdefault()
// value is used to set the value to empty
// onchange  takes each and every value to get the value.
// if we change the event it is called
// e.target.value is to get the form  value
// onsubmit is to call the data after submit
