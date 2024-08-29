import React, {useState} from 'react';
import "./AstroMall";
import Categorymenu from '../../component/Categorymenu/Categorymenu';
import ProductDisplay from '../../component/ProductDisplay/ProductDisplay';



const AstroMall = () => {

  const [category, setCategory] = useState("All") 

  return (
    <div>
      <Categorymenu category={ category } setCategory={setCategory} />
      <ProductDisplay category= {category} />
    </div>
  );
}

export default AstroMall
