import React, { useState } from 'react'
import'./Home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/exploremenu/Exploremenu'
import FoodDisplay from '../../Components/fooddisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
  
  const[category,setCategory]=useState("All")
    

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay  category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
