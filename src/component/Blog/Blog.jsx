import React from 'react'
import "./Blog.css"
import { Link } from 'react-router-dom';


const Blog = () => {
  return (
    <div className='Blog'>
        <div className="blog-header">
            <h2>Latest from Blog</h2>
        </div>
        <div className="blog-container">
            <div className="blog-content">


            <div class = "blog-item">
            <div class = "blog-img">
              <button class="views">1,345</button>
              <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Blog-img" height ="200px" width = "200px"/>
            </div>
          
            <div class="discription">
              <p>FoodWorld</p>
              <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" alt="star"/>
              <span>46</span>
              <p class="date">July 17, 2024</p>
            </div>
            
        </div>

        <div class = "blog-item">
            <div class = "blog-img">
              <button class="views">1,345</button>
              <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt ="Blog-img" height ="200px" width = "200px"/>
            </div>
          
            <div class="discription">
              <p>FoodWorld</p>
              <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" alt="star"/>
              <span>46</span>
              <p class="date">July 17, 2024</p>
            </div>
            
        </div>

        <div class = "blog-item">
            <div class = "blog-img">
              <button class="views">1,345</button>
              <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt ="Blog-img" height ="200px" width = "200px"/>
            </div>
          
            <div class="discription">
              <p>FoodWorld</p>
              <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" alt="star"/>
              <span>46</span>
              <p class="date">July 17, 2024</p>
            </div>
            
        </div>
        <div class ="blog-content"></div>

            </div>

            <div className="blog-content">


            <div class = "blog-item">
            <div class = "blog-img">
              <button class="views">1,345</button>
              <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt ="Blog-img" height ="200px" width = "200px"/>
            </div>
          
            <div class="discription">
              <p>FoodWorld</p>
              <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" alt="star"/>
              <span>46</span>
              <p class="date">July 17, 2024</p>
            </div>
            
        </div>

        <div class = "blog-item">
            <div class = "blog-img">
              <button class="views">1,345</button>
              <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt ="Blog-img" height ="200px" width = "200px"/>
            </div>
          
            <div class="discription">
              <p>FoodWorld</p>
              <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" alt="star"/>
              <span>46</span>
              <p class="date">July 17, 2024</p>
            </div>
            
        </div>

        <div class = "blog-item">
            <div class = "blog-img">
              <button class="views">1,345</button>
              <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt ="Blog-img" height ="200px" width = "200px"/>
            </div>
          
            <div class="discription">
              <p>FoodWorld</p>
              <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" alt="star"/>
              <span>46</span>
              <p class="date">July 17, 2024</p>
            </div>
            
        </div>
        <div class ="blog-content"></div>

            </div>
        </div>


        <Link to ="/AstroBlog">
        <div>
            <button className="blog-button">View All &gt; </button>
        </div>
        </Link>
        
    </div>
  )
}

export default Blog
