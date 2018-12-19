import React from 'react'

const Grocery = props => {
  let groceryName = `${props.name} ${props.selected}`

  return(
    <li onClick={props.handleClick}>{groceryName}</li>
  )
}

export default Grocery
