import React from 'react'

function ClothCard({name, category, size, color, price, deleteClothes, id}) {
  return (
    <div>
        <p>{name}</p>
        <p>{category}</p>
        <button onClick={()=> deleteClothes(id)}>Delete</button>
    </div>
  )
}

export default ClothCard