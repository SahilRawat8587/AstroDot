import React from 'react'
import "./DailyHoro.css"
import Horoscope from '../../component/Horoscope/Horoscope'
import DailyHoroscope from '../../component/DailyHoroscope/DailyHoroscope'
import Astrology from '../../component/Astrology/Astrology'

const DailyHoro = () => {
  return (
    <div>
        <DailyHoroscope />
        
        <Astrology />
        <Horoscope />
      
    </div>
  )
}

export default DailyHoro
