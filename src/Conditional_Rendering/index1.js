import React, { Component } from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
class Conditional_Rendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    const {isLogin}=this.state;
    // let element;
    // element = isLogin ? <HomePage/> : <LoginPage/>
    return(
    
    
    
    <div>{isLogin ? <HomePage/> : <LoginPage/>}</div>
    )
  }
}
export default Conditional_Rendering;
