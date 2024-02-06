import React from 'react'
import Userinfo from '../../Components/Userinfo'
import FetchWetherApi from '../../Components/Api/FetchWetherApi'
import Notes from '../../Components/Notes'
import Timer from '../../Components/Timer'
import FetchNewsApi from '../../Components/Api/FetchNewsApi'
import { useNavigate } from 'react-router-dom'
const Showcase = () => {
  const navigate  = useNavigate()
  return (
    <>
    
    <main  className='showcase' >
      
      <Userinfo/>
      <FetchWetherApi/>
      <Notes/>
      <Timer/>
      <FetchNewsApi/>
    </main>
        <button className='Brower' onClick={()=>{navigate('/movie')}} >Browse</button>
    
      
    </>
  )
}

export default Showcase
