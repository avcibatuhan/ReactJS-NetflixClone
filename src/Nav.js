import React, { useEffect, useState } from 'react'
import './styles/Nav.css';
function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt="Netlif Logo"/>
        <img
        className='nav__avatar'
        src='https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg'
        alt='Netflix Logo'/>
    </div>
  )
}

export default Nav