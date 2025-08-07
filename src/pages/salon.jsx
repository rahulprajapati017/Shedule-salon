import React from 'react'
import {Reviews,Teams, SalonServices,HoursAndInfo,MapLocation,About} from '../index.js'
function Salon() {
  return (
    <div className='pt-30'>
      <About />
      <SalonServices />
        <Teams />
        <MapLocation />
      <HoursAndInfo />
      <Reviews />

    </div>
  )
}

export default Salon