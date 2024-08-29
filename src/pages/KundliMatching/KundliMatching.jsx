import React from 'react'
import"./KundliMatching.css";
import Horoscope from '../../component/Horoscope/Horoscope';
import KundliHero from '../../component/KundliHero/KundliHero';
import MatchKundli from '../../component/MatchKundli/MatchKundli';
import KundliCta from '../../component/KundliCta/KundliCta';
import KundliFAQ from '../../component/KundliFAQ/KundliFAQ';

const KundliMatching = () => {
  return (
    <div>
        <KundliHero />
        <MatchKundli />
        <KundliCta />
        <KundliFAQ />
        <Horoscope />
      
    </div>
  )
}

export default KundliMatching
