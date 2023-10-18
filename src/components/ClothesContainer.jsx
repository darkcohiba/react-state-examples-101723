import React from 'react'
import ClothCard from './ClothCard'

function ClothesContainer({ clothesArray, deleteClothes }) {

    const clothCards = clothesArray.map(cloth => (
        <ClothCard key={cloth.id} {...cloth} deleteClothes={deleteClothes}/>
    ))
    return (
        <div>
            {clothCards}
        </div>
    )
}

export default ClothesContainer