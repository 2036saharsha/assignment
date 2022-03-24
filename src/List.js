import React from 'react'
import "./List.css"


function List(props) {
  return (
    <div className="list">
        <span>Name:  {props.Name}</span>
        <span>Phone-Number:  {props.PhoneNumber}</span> 
        <span>Email:  {props.Email}</span>
    </div>
  )
}

export default List