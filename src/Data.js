import React from "react";
import List from "./List";


function Data(props) {
  return (
    <div style={{marginLeft: "18rem"}}>
      {props.contacts.map(c => <List key={c.id} Name={c.Name} PhoneNumber={c.PhoneNumber} Email={c.Email} />)}
     </div> 
  ); 
} 

export default Data;