import React from 'react'
import Userinfo from '../../Components/Userinfo'
import WetherApi from '../../Components/WetherApi'
import Notes from '../../Components/Notes'
import Timer from '../../Components/Timer'
import NewsApi from '../../Components/NewsApi'
import { useNavigate } from 'react-router-dom'
const Showcase = () => {
  const navigate  = useNavigate()
  return (
    <main  className='showcase' >
      
      <Userinfo/>
      <WetherApi/>
      <Notes/>
      <Timer/>
      <NewsApi/>
      <div className='Brower' >
        <button onClick={()=>{navigate('/movie')}} >Browse</button>
      </div>
    </main>
  )
}

export default Showcase
