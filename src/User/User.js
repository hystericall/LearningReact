import React from 'react';
import './User.css'

export const UserInput = (props) => {
  return(
    <div className="UserInput">
      <input type="text" onChange = {props.changed} value={props.name} />
    </div>
  )
}

export const UserOutput = (props) => {
  return(
    <div className="UserOutput">
      <p>Do some thing for me plz {props.name} </p>
      <p>Do you understand ? {props.moreName} </p>
    </div>
  )
}
