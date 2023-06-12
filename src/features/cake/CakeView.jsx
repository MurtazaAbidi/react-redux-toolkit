import React from 'react'
import { useSelector } from 'react-redux'

const CakeView = () => {
    const cakes = useSelector((state) => state.cake.numOfCakes)
    return (
        <div>
            <h2>Number of cakes - {cakes}</h2>
            <button>Order cake</button>
            <button>Restock cakes</button>
        </div>
    )
}

export default CakeView
