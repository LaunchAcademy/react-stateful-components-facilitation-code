import React, { useState } from 'react'

const Grocery = props => {
  // console.log("SELECTED STATUS OF")
  // console.log(props.name)
  // console.log(props.selectedStatus)

  let groceryText = props.name

  if (props.selectedStatus === true){
    groceryText += " SELECTED"
  } 

  return(
    <li onClick={props.selectGroceryClosure} >
      {groceryText} 
    </li>
  )
}

export default Grocery
