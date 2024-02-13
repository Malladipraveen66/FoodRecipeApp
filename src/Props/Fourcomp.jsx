import React from 'react'

const Fourcomp = (props) => {
    const {car,model,number} = props.abv
  return (
    <div>
    <div>{car}</div>
    <div>{model}</div>
    <div>{number}</div>
    </div>
  )
}

export default Fourcomp