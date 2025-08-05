import React from 'react'
import {Reviews,Teams, SalonServices,HoursAndInfo,MapLocation} from '../index.js'
function Salon() {
  return (
    <div>
      <SalonServices />
        <Teams />
        <MapLocation />
      <HoursAndInfo />
      <Reviews />

    </div>
  )
}

export default Salon