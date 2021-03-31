import React from 'react'

const Grocery = props => {
  debugger 
  let groceryText = props.name

  // if (props.selectedStatus === true){
  //   groceryText += " SELECTED"
  // } 

  return(
    <li>
      {groceryText} 
    </li>
  )
}

export default Grocery



// onClick={props.selectGroceryFunction}