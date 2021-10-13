import React, { useState } from 'react'
import Grocery from './Grocery'

  // what do we want to track: selectedGroceryId
  // when do we want to change it: when a user clicks on a grocery li
  // what logic is necessary for displaying this change: conditionally tell ONE grocery, if it should display with SELECTED

const GroceryList = (props) => {

  const [selectedGroceryId, setSelectedGroceryId] = useState(null)
  const groceryList = props.groceries.map(grocery => {

    const helperSetGroceryId = () => {
      setSelectedGroceryId(grocery.id)
    }

    let selectedStatus = false
    if (selectedGroceryId === grocery.id){
      selectedStatus = true
    }

    return(
      <Grocery
        key={grocery.id}
        name={grocery.name}
        helperSetGroceryId={helperSetGroceryId}
        selectedStatus={selectedStatus}
      />
    )
  })

  return(
    <ul>
      {groceryList}
    </ul>
  )
}

export default GroceryList
