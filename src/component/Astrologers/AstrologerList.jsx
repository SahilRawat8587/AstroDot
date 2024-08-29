import React from "react";
import AstrologerCard from "./AstrologerCard";
import "./AstrologerList.css";
// import { assets } from "../../assets/assets";


const astrologers = [
  // Sample data
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  { name: "Sujata", image: "1.png",  experience: 5, language: "English, Hindi", price: 140, rating: 5 },
  // Add more astrologers here
];

const AstrologerList = () => {
  return (
    <div className="astrologer-list">
      {astrologers.map((astrologer, index) => (
        <AstrologerCard key={index} {...astrologer} />
      ))}
    </div>
  );
};

export default AstrologerList;
