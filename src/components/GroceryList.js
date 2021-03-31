import React, { useState } from 'react'
import Grocery from './Grocery'

const GroceryList = (props) => {
  const [selectedGroceryId, setSelectedGroceryId] = useState(null)
  
  const groceryList = props.groceries.map(grocery => {
    // each Grocery will receive a status on initialization
    let selectedStatus = false
    // if the id of the currently iterated grocery is equal to the id stored in state, set to true
    if (selectedGroceryId === grocery.id){
      selectedStatus = true
    } 

    // define a "wrapper"/closure function that can temporarily store both a function and its argument together w/o calling it 
    const setSelectedGroceryIdClosure = () => {
      return setSelectedGroceryId(grocery.id)
    }

    return(
      <Grocery
        key={grocery.id}
        name={grocery.name}
        selectedStatus={selectedStatus}
        setSelectedGroceryIdClosure={setSelectedGroceryIdClosure}
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
