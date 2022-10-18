import React, { useState } from 'react'
import './../App.css'
import {FaCartPlus} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai'

const Header = () => {
   const [Search,setSearch]=useState(false);
  return (
    <header className='header'>
                    <div className="logo">
                                         <FaCartPlus className='icon'/>
                                        <h2>Groco</h2>
                    </div>
                   <div className={`${Search? "active" : "search-bar"}`} >
                     <input type="text" placeholder='search quick'/> <AiOutlineSearch className='icon-1'/>
                     </div>
                     <AiOutlineSearch className='icon-2' onClick={()=>{setSearch(!Search)}}/>
                             
                      
    </header>
  )
}

export default Header

