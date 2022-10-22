import React from 'react'
import product1 from './images/product-1.png';
import product2 from './images/product-2.png';
import product3 from './images/product-3.png';
import product4 from './images/product-4.png';
import product5 from './images/product-5.png';
import product6 from './images/product-6.png';
import product7 from './images/product-7.png';
import product8 from './images/product-8.png';
import product9 from './images/product-9.png';

// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

// import required modules
// import { EffectFlip, Pagination, Navigation } from "swiper";
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
    <section className="category" id='latest'>
    <h1 className="heading">LATEST <span>PRODUCTS</span></h1>
 
    <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="boxes">
           <p>-33%</p>
           <img src={product1} alt="" />
            <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                         
           <div className="social"></div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="boxes">
            <p>-53%</p>
            <img src={product2} alt="" />
            <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>
           <div className="social"></div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
          
    <div className="boxes">
           <p>-13%</p>
           <img src={product3} alt="" />
           <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                      
           <div className="social"></div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="boxes">
             <p>-23%</p>
           <img src={product4} alt="" />
           <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                         
           <div className="social"></div>
     </div>
   
        </SwiperSlide>
        <SwiperSlide>
        <div className="boxes">
            <p>-43%</p> 
           <img src={product5} alt="" />
           <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                       
           <div className="social"></div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="boxes">
                 
                 <p>12%</p>
                  <img src={product9} alt="" />
                  <h2>Organic Banana</h2>
                   <div className="star">
       
                   </div>
                   <p className='cost'>$ 10.50</p>
                   <div className="smallcart">
                   <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
                   </div>
                  <button className='btn'>Add to Cart</button>                                        
                    <div className="social"></div>
           </div> 
        </SwiperSlide>
        {/* <SwiperSlide>
        <div className="boxes">
                 
                 <p>12%</p>
                  <img src={product3} alt="" />
                  <h2>Organic Banana</h2>
                   <div className="star">
       
                   </div>
                   <p className='cost'>$ 10.50</p>
                   <div className="smallcart">
                   <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
                   </div>
                  <button className='btn'>Add to Cart</button>                                        
                    <div className="social"></div>
           </div> 
        </SwiperSlide>
        <SwiperSlide> 
           <div className="boxes">
                 
                 <p>12%</p>
                  <img src={product2} alt="" />
                  <h2>Organic Banana</h2>
                   <div className="star">
       
                   </div>
                   <p className='cost'>$ 10.50</p>
                   <div className="smallcart">
                   <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
                   </div>
                  <button className='btn'>Add to Cart</button>                                        
                    <div className="social"></div>
           </div>
           
            </SwiperSlide>
        <SwiperSlide>
        <div className="boxes">
                 
                 <p>12%</p>
                  <img src={product1} alt="" />
                  <h2>Organic Banana</h2>
                   <div className="star">
       
                   </div>
                   <p className='cost'>$ 10.50</p>
                   <div className="smallcart">
                   <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
                   </div>
                  <button className='btn'>Add to Cart</button>                                        
                    <div className="social"></div>
           </div> 
        </SwiperSlide> */}
      </Swiper>



{/* 
     <div className="boxes">
            <p>-53%</p>
            <img src={product2} alt="" />
            <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>
           <div className="social"></div>
    </div>

    <div className="boxes">
           <p>-13%</p>
           <img src={product3} alt="" />
           <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                      
           <div className="social"></div>
    </div>

    <div className="boxes">
             <p>-23%</p>
           <img src={product4} alt="" />
           <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                         
           <div className="social"></div>
     </div>
    <div className="boxes">
            <p>-43%</p> 
           <img src={product5} alt="" />
           <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                       
           <div className="social"></div>
    </div>
    <div className="boxes">
                 
          <p>12%</p>
           <img src={product6} alt="" />
           <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                        
             <div className="social"></div>
    </div> 
    <div className="boxes">
                 
          <p>12%</p>
           <img src={product7} alt="" />
           <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                        
             <div className="social"></div>
    </div> 
    <div className="boxes">
                 
          <p>12%</p>
           <img src={product8} alt="" />
           <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                        
             <div className="social"></div>
    </div> 
    <div className="boxes">
                 
          <p>12%</p>
           <img src={product1} alt="" />
           <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                        
             <div className="social"></div>
    </div> 
    <div className="boxes">
                 
          <p>12%</p>
           <img src={product3} alt="" />
           <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                        
             <div className="social"></div>
    </div> 
    <div className="boxes">
                 
          <p>12%</p>
           <img src={product2} alt="" />
           <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                        
             <div className="social"></div>
    </div> 
    <div className="boxes">
                 
          <p>12%</p>
           <img src={product1} alt="" />
           <h2>Organic Banana</h2>
            <div className="star">

            </div>
            <p className='cost'>$ 10.50</p>
            <div className="smallcart">
            <small>Quality:</small> <input type="text" placeholder='1'/> <small className='kg'>kg</small>
            </div>
           <button className='btn'>Add to Cart</button>                                        
             <div className="social"></div>
    </div> 

</div> */}
</section>


                    )
}

export default Offer
