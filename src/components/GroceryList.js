import React, { useState } from 'react'
import Grocery from './Grocery'

const GroceryList = (props) => {
  const [selectedGroceryId, setSelectedGroceryId] = useState(null)
  // console.log("STATE")
  // console.log(selectedGroceryId)
  // debugger
  const groceryList = props.groceries.map(grocery => {

    const selectGroceryClosure = () => {
      // debugger
      return setSelectedGroceryId(grocery.id)
    }

    let selectedStatus = false
    if (selectedGroceryId === grocery.id){
      // debugger
      selectedStatus = true
    } 

    return(
      <Grocery
        key={grocery.id}
        name={grocery.name}
        selectedStatus={selectedStatus}
        selectGroceryClosure={selectGroceryClosure}
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
