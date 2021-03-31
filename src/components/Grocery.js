import React from 'react'

const Grocery = props => {
  let groceryText = props.name

  if (props.selectedStatus === true){
    groceryText += " SELECTED"
  } 

  return(
    <li onClick={props.setSelectedGroceryIdClosure}>
      {groceryText} 
    </li>
  )
}

export default Grocery
