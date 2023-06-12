import React from 'react'
import { useSelector } from 'react-redux'

const IcecreamView = () => {
    const noOfIcecreams = useSelector((state)=> state.icecream.noOfIcecreams)
  return (
    <div>
        <h2>Number of Ice creams - {noOfIcecreams}</h2>
        <button>Order Ice creams</button>
        <button>restock ice creams</button>
    </div>
  )
}

export default IcecreamView