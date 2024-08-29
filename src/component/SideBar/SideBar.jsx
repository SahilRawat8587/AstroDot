// Sidebar.js
import React from 'react';
import './SideBar.css';

const Sidebar = ({ onCategoryChange }) => {
  const categories = ['Home', 'Tarot', 'Vastu', 'Vedic', 'Kundli', 'Sports', 'Transit', 'Festival', 'Business', 'Gemstones', 'Numerology', 'Zodiac Signs', 'Compatibility', 'Entertainment', 'Current Affair'];

  return (
    <div className="sidebar">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className='sidebar-button'
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
