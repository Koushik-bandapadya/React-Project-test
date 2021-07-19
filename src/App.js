import React from "react";
import Card from "./component/Card/Card";
import Heading from "./component/Heading/Heading";
import ClassC from "./component/ClassC";
import Data from "./data.json";
import STATE from "./STATE";
import Conditional_Rendering from "./Conditional_Rendering/index1";
import Event_handler from "./Event_handler/Event_handler";
import Event_Binding from "./Event_Binding/Event_Binding";
import Hooks from "./Hooks/Hooks";
import Form from "./component/Form/Form";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div> 
      
    <Form/>
      <Heading />

      {Data.map((item, index) => (
        <Card key={index} name={item.name} age={item.age} />
      ))}

      <ClassC name="abc" number="100" />

      <STATE />

      <Conditional_Rendering />

      <Event_handler />

      <Event_Binding />

      <Hooks/>
     

    </div>
  );
}

export default App;
