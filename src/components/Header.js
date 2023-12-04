import React from 'react';
import './Header.css'
import home from '../assets/home.png'

function Header() {
  return (
    <>
     <nav>
        <a aria-label="Go to home" aria-current="page" class="active" href="/projects/react-router-budget-app/">
            <img src={home} alt="" height="30" className='img'/>
            <span>HomeBudget</span>
            </a>
    
    
    </nav>
    </>
   
  )
}

export default Header