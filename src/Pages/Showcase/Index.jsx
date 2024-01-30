import React from 'react'
import Userinfo from '../../Components/Userinfo'
import WetherApi from '../../Components/WetherApi'
import Notes from '../../Components/Notes'

const Showcase = () => {
  return (
    <div>
      <Userinfo/>
      <WetherApi/>
      <Notes/>
    </div>
  )
}

export default Showcase
