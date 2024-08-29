import React from "react";


import "./Kundli.css";
import KundliHeader from "../../component/KundliHeader/Kundliheader";
import NewKundli from "../../component/NewKundli/NewKundli";
import Horoscope from "../../component/Horoscope/Horoscope";
import KundliCta from "../../component/KundliCta/KundliCta";
import KundliFAQ from "../../component/KundliFAQ/KundliFAQ";

const Kundli = () => {
  return (
    <div>
      <KundliHeader />
      <NewKundli />
      <KundliCta />
      <KundliFAQ />
      <Horoscope />
    </div>
  );
};

export default Kundli;
