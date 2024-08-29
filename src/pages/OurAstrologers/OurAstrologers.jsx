import React from 'react'
import "./OurAstrologers.css"
import AstrologerList from '../../component/Astrologers/AstrologerList'
import FindBestAstrologers from '../../component/FindBestAstrologers/FindBestAstrologers'

const OurAstrologers = () => {
  return (
    <div>
      
      <AstrologerList />
      <FindBestAstrologers />
    </div>
  )
}

export default OurAstrologers
