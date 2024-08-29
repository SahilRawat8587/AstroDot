
import React, { useState } from 'react';
import Sidebar from '../SideBar/SideBar';
import CardList from '../CardList/CardList';
// import Card from '../Card/Card';
import './BlogCategory.css';


  const cardsData = [
    // Array of card objects with category information
    { id: 1, category: 'Tarot' , title: 'Foodworld', image: '1.png', date: 'July 17, 2024' },
    { id: 2, category: 'Tarot', title: 'Tarot Reading', image: '1.png', date: 'July 17, 2024' },
    { id: 3, category: 'Vastu', title: 'Vastu Tips', image: '1.png', date: 'July 17, 2024' },
    { id: 4, category: 'Vastu', title: 'Foodworld', image: '1.png', date: 'July 17, 2024' },
    { id: 5, category: 'Tarot', title: 'Tarot Reading', image: '1.png', date: 'July 17, 2024' },
    { id: 6, category: 'Vastu', title: 'Vastu Tips', image: '1.png', date: 'July 17, 2024' },
    { id: 7, category: 'Tarot' , title: 'Foodworld', image: '1.png', date: 'July 17, 2024' },
    { id: 8, category: 'Tarot', title: 'Tarot Reading', image: '1.png', date: 'July 17, 2024' },
    { id: 9, category: 'Vastu', title: 'Vastu Tips', image: '1.png', date: 'July 17, 2024' },
    { id: 10, category: 'Vastu', title: 'Foodworld', image: '1.png', date: 'July 17, 2024' },
    { id: 11, category: 'Tarot', title: 'Tarot Reading', image: '1.png', date: 'July 17, 2024' },
    { id: 12, category: 'Vastu', title: 'Vastu Tips', image: '1.png', date: 'July 17, 2024' },
    // ... more card data
  ];

  const BlogCategory = () => {

    const [selectedCategory, setSelectedCategory] = useState('Home');

  const handleCategoryChange = (category) =>{
    setSelectedCategory(category);
  }

  //Filtering Cards on Basis of Category

  const filteredCards = selectedCategory ==="Home" ? cardsData: cardsData.filter(card => card.category === selectedCategory);

  return (
    <div className="blogg-container">
      <div className="blog-heading"><h2>Blog</h2></div>
    <div className="blogcategory-container">

      <Sidebar onCategoryChange={handleCategoryChange} />
      <CardList cards={filteredCards} />
      </div>
      </div>

  );
};

export default BlogCategory;


