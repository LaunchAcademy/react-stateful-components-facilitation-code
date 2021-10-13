import React, { useState } from 'react'
import Grocery from './Grocery'

  // what do we want to track: selectedGroceryId
  // when do we want to change it: when a user clicks on a grocery li
  // what logic is necessary for displaying this change: conditionally tell ONE grocery, if it should display with SELECTED

const GroceryList = (props) => {

  const groceries = [
    { id: 1, name: "Oranges" },
    { id: 2, name: "Bananas" },
    { id: 3, name: "Bread" }
  ]

  const [selectedGroceryId, setSelectedGroceryId] = useState(null)

  const groceryList = groceries.map(grocery => {

    const toggleSelectedDisplay = () => {
      setSelectedGroceryId(grocery.id)
    }

    let displayStatus = false
    if (selectedGroceryId === grocery.id){
      displayStatus = true
    }

    return(
      <Grocery
        key={grocery.id}
        name={grocery.name}
        toggleSelectedDisplay={toggleSelectedDisplay}
        displayStatus={displayStatus}
      />
    )
  })

  return(
    <div>
      <h1>Grocery List</h1>

      <ul>
        {groceryList}
      </ul>
    </div>
  )
}

export default GroceryList
