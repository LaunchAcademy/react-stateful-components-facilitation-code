import React, { useState } from 'react'

const Grocery = props => {
  let selectedText = ""

  if (props.selectedStatus === true) {
    selectedText = "SELECTED"
  }

  return(
    <li onClick={props.helperSetGroceryId}>
      {props.name} {selectedText}
    </li>
  )
}

export default Grocery


  // what do we want to track: selectedStatus
  // when do we want to change it: when a user clicks on a grocery li
  // what logic is necessary for displaying this change: if...else logic to add "SELECTED" next to the grocery