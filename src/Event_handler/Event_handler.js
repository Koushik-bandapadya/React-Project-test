import React, { Component } from "react";

export default class Event_handler extends Component {

constructor(props) {
    super(props)

    this.state = {
          changeValue:''
    }
}



handleOnChange = (e) => {
    this.setState({
    changeValue:e.target.value

    },()=>{

console.log(this.state.changeValue);

    })
    
  }


  render() {
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} />
        <p>{this.state.changeValue}</p>

        {/* <button className="btn"  onClick={this.handeler}>Click</button> */}
      </div>
    );
  }
}
