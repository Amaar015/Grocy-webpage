import React from 'react'
import Nav from './Nav'
import Header from './Header'
import bg from './images/home-img.png'
import banner1 from './images/banner-1.jpg'
import banner2 from './images/banner-2.jpg'

const Home = () => {
  return (
    
    <section className="home">
    <Header/>
    <Nav/>
                   <div className="container">

                  <div className="image">
                      <img src={bg} alt="Home.img" />
                  </div>
                   <div className="content">
                     <p>Fresh and Organic</p>
                     <h1>Your Daily Neeed Products</h1>
                     <button className='btn'>Get Started</button>
                   </div>
                  </div>

                  <div className="offer_box">
                 
                    <div className="offer_content">
                    <img src={banner1} alt=""/>
        <div class="content">
            <h3>special offer</h3>
            <p>upto 45% off</p>
            <button class="btn">check out</button>
        </div>
                  </div>

                  <div className="offer_content">
                    <img src={banner2} alt=""/>
        <div class="content">
            <h3>special offer</h3>
            <p>upto 45% off</p>
            <button class="btn">check out</button>
        </div>
                  </div>
                  </div>
     </section>

    
  )
}

export default Home