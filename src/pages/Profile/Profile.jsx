import React from 'react'
import "./Profile.css"
// import Astrology from '../../component/Astrology/Astrology'
import FeaturedAstrologer from '../../component/FeaturedAstrologer/FeaturedAstrologer'
import AstrologerProfile from '../../component/AstrologerProfile/AstrologerProfile'

const Profile = () => {
  return (
    <div>
        {/* <h1>hi</h1> */}
        <FeaturedAstrologer />
        <AstrologerProfile />
{/* 
        <Astrology /> */}
      
    </div>
  )
}

export default Profile
