import React from "react";
const info = (props) =>{
  return(
    <div>
      <h1>{props.Fname} ,{props.Lname}, {props.Mail}, {props.Phone}</h1>
      
    </div>
  )
}
export default UserInfo;
