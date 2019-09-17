import React from 'react'
import Grocery from './Grocery'

const GroceryList = (props) => {

  const groceryList = props.groceries.map(grocery => {
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
