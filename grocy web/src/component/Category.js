import React from 'react'
import image1 from './images/category-1.png';
import image2 from './images/category-2.png';
import image3 from './images/category-3.png';
import image4 from './images/category-4.png';
const Category = () => {
  return (
  <section className="category">
                    <h1 className="heading">SHOP BY <span>CATEGORY</span></h1>
       <div className="container_box">
                    <div className="box">
                          <h3>Vegitables</h3>
                          <p>Upto 50% Off</p>
                           <img src={image1} alt="" />
                           <button className='btn'>Shop Now</button>                                         
                    </div>
                    <div className="box">
                          <h3>Juice</h3>
                          <p>Upto 44% Off</p>
                           <img src={image2} alt="" />
                           <button className='btn'>Shop Now</button>                                         
                    </div>

                    <div className="box">
                          <h3>Meat</h3>
                          <p>Upto 35% Off</p>
                           <img src={image3} alt="" />
                           <button className='btn'>Shop Now</button>                                         
                    </div>

                    <div className="box">
                          <h3>fruite</h3>
                          <p>Upto 12% Off</p>
                           <img src={image4} alt="" />
                           <button className='btn'>Shop Now</button>                                         
                    </div>
       </div>
  </section>
  
                    )
}

export default Category