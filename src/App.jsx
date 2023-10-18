import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClothesForm from './components/ClothesForm'
import ClothesContainer from './components/ClothesContainer'

function App() {
  const [clothesArray, setClothesArray] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/apparel')
    .then(response => response.json())
    .then(data => setClothesArray(data))
  },[])

  function handleDeleteClothes(id){
    setClothesArray(clothesArray.filter(cloth => cloth.id !== id))
  }

  return (
    <>
    <ClothesContainer clothesArray={clothesArray} deleteClothes={handleDeleteClothes}/>
    <ClothesForm setClothesArray={setClothesArray}/>
    </>
  )
}

export default App
