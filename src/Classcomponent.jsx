import React, { Component } from 'react'

export default class Classcomponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"class data"
        }
    
    }
  render() {
    const changeColor = ()=>{
        this.setState({
            name:"colorchange"
        })
    }
    return (
      <div>
        <h3 style={{color:this.props.color}}>My Class Component - {this.state.name}</h3>
        <button onClick={()=>this.setState({name:"UpdateData"})}>Click</button>
        <button onClick={changeColor}>Change Color</button>

      </div>
    )
  }
}
