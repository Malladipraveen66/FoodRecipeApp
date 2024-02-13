import React from "react";
class Clascomp extends React.Component{
    constructor(){
        super();
            this.state={
                username:'',
                userage:'',
                du:[]
            }
    }
    namechange(updatename){
        this.setState({
            username:updatename
        })
     
    }
    agechange(updateage){
        this.setState({
            userage:updateage
        })
        
    }
    submitform(e){
        e.preventDefault()
        let data={
            name:this.state.username,
            age:this.state.userage
        }
       this.state.du.push(data);
      let arrayvalue=this.state.du;
      console.log(this.state.du)
       this.setState({
        du:arrayvalue,
        name:'',
        age:''
       })
    }
    render(){
        return(
            <>
            <h1>This is heading1</h1>
            <form onSubmit={(e)=>this.submitform(e)}>
                <label>Name</label>
                <br></br>
                <input type="text" value={this.state.username} onChange={(e)=>this.namechange(e.target.value)}></input>
                <br></br>
                <label>Age</label>
                <br></br>
                <input type="number" value={this.state.userage} onChange={(e)=>this.agechange(e.target.value)}></input>
                <br></br>
                <button>submit</button>
            </form>
            <table>
                <thead>
                    <th><td>stdname</td></th>
                    <th><td>Stdage</td></th>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>age</td>
                        <td>24</td>
                    </tr> */}
                    {this.state.du.map((value)=>(
                        <tr>
                        <td>{value.name}</td>
                        <td>{value.age}</td>
                    </tr>  
                    ))}
                </tbody>
            </table>
            </>
        )
    }
}
export default Clascomp