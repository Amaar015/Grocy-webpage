import React from 'react'
import product1 from './images/product-1.png';
import product2 from './images/product-2.png';
import product3 from './images/product-3.png';
import product4 from './images/product-4.png';
import product5 from './images/product-5.png';
import product6 from './images/product-6.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Offer = () => {
     let  state = {
              display: true,
              width: 300
            };
              const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1
              };
  return (
    <section className="category">
    <h1 className="heading">LATEST <span>PRODUCTS</span></h1>
    <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
       




{/* <div className="container_box">
    <div className="boxes">
           <p>-33%</p>
           <img src={product1} alt="" />
            <h2>Organic Banana</h2>
            <div className="start">

            </div>
            <p>$ 10.50</p>
            <small>Qualit</small> <input type="text" placeholder='1'/> <small>kg</small>
           <button className='btn'>Add to Cart</button>                                         
           <div className="social"></div>
    </div>
    <div className="boxes">
            <p>-53%</p>
            <img src={product2} alt="" />
            <h2>Organic Banana</h2>
            <div className="start">

            </div>
            <p>$ 10.50</p>
            <small>Qualit</small> <input type="text" placeholder='1'/> <small>kg</small>
           <button className='btn'>Add to Cart</button>
           <div className="social"></div>
    </div>

    <div className="boxes">
           <p>-13%</p>
           <img src={product3} alt="" />
           <h2>Organic Banana</h2>
            <div className="start">

            </div>
            <p>$ 10.50</p>
            <small>Qualit</small> <input type="text" placeholder='1'/> <small>kg</small>
           <button className='btn'>Add to Cart</button>                                      
           <div className="social"></div>
    </div>

    <div className="boxes">
             <p>-23%</p>
           <img src={product4} alt="" />
           <h2>Organic Banana</h2>
            <div className="start">

            </div>
            <p>$ 10.50</p>
            <small>Qualit</small> <input type="text" placeholder='1'/> <small>kg</small>
           <button className='btn'>Add to Cart</button>                                         
           <div className="social"></div>
     </div>
    <div className="boxes">
            <p>-43%</p> 
           <img src={product5} alt="" />
           <h2>Organic Banana</h2>
            <div className="start">

            </div>
            <p>$ 10.50</p>
            <small>Qualit</small> <input type="text" placeholder='1'/> <small>kg</small>
           <button className='btn'>Add to Cart</button>                                       
           <div className="social"></div>
    </div>
    <div className="boxes">
                 
          <p>12%</p>
           <img src={product6} alt="" />
           <h2>Organic Banana</h2>
            <div className="start">

            </div>
            <p>$ 10.50</p>
            <small>Qualit</small> <input type="text" placeholder='1'/> <small>kg</small>
           <button className='btn'>Add to Cart</button>                                        
             <div className="social"></div>
    </div>

</div> */}
</section>


                    )
}

export default Offer
