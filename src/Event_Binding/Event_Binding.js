import React, { Component } from 'react'

export default class Event_Binding extends Component {

constructor(props) {
    super(props)

    this.state = {
         count:0
    }
    this.handlep=this.handlep.bind(this)
    this.handlem=this.handlem.bind(this)
}

  handlep=()=>{
  this.setState({

count:this.state.count+1


  })
  }

handlem=()=>{
this.setState({
count:this.state.count-1


})




}


    render() {
        return (
            <div style={{backgroundColor: "lightblue"}}>
            <h1>{this.state.count}</h1>
                <button onClick={this.handlep}>Increase</button>
                <button onClick={this.handlem} disabled={this.state.count===0? true:false}>Dicrase</button>
            </div>
        )
    }
}
