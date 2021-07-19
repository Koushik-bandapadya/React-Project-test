import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';

export default class STATE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  Dicrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="STATE">
        <h1>Count:{count}</h1>
        <button className="btn" onClick={this.Increment}>
        <AddIcon />
        </button>
        <button className="btn" onClick={this.Dicrement} disabled={count <=0 ? true : false}>
        <RemoveIcon />
        </button>
      </div>
    );
  }
}
