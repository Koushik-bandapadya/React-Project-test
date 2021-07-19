import React, { Component } from "react";

class ClassC extends Component {
  render() {
    return (
      <>
        <h3>{this.props.name}</h3>
        <h3>{this.props.number}</h3>
      </>
    );
  }
}
export default ClassC;
