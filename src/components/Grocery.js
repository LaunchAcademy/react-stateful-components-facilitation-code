import React, { useState } from 'react'

// const useState = (defaultState) => {
//   let stateValue = defaultState

//   const setterFunction = (newState) = {
//     stateValue = newState
//     // RERENDER THE COMPONENT
//   }

//   return [stateValue, setterFunction]
// }


// const numberArray = [10, 25, 38]

// // const firstNumber = numberArray[0]
// // const secondNumber = numberArray[1]
// // const thirdNumber = numberArray[2]

// const [foobar, secondNumber, banana] = numberArray
 
// console.log(foobar) // 10
// console.log(foobar) // 25
// console.log(foobar) // 38

const Grocery = props => {

  // const [selectedGroceryStatus, setSelectedGroceryStatus] = useState(false)

  let displayText = props.name 

  if (props.displayStatus === true){
    displayText = `${props.name} | SELECTED`
  }

  return(
    <li onClick={props.toggleSelectedDisplay}>
      {displayText}
    </li>
  )
}

export default Grocery