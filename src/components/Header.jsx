import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/IES Logo.png"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
    console.log(e.target);
  };
  const getMenuStyle = () => {
    return isOpen ? { top: "100%",left:"0",  } : { bottom: '150%',left:"0" };
  };




  return (

    <nav>
      <div>
        <img src={logo} alt="" />
        <h3> <span>I</span>ndia  <span> E</span>nvironmental  <span>S</span>ervices </h3>

        <AiOutlineMenu className="ai-outline-menu" onClick={handleClick} />

      </div>
        <main>
            <HashLink to="/#home" >Home</HashLink>
            <HashLink to="/#about" >About</HashLink>
            <Link to="/services" >Services</Link>
            <Link to="/products" >Products</Link>
            <HashLink to="/#footer" >Contact</HashLink>
        </main>


        <div className="menu"  style={getMenuStyle()} >

        <AiOutlineClose className="ai-outline-close" onClick={handleClick} />

        <HashLink to="/#home" onClick={handleClick} >Home</HashLink>
            <HashLink to="/#about" onClick={handleClick} >About</HashLink>
            <HashLink to="/contact" onClick={handleClick} >Enquire Now</HashLink>
            <Link to="/services" onClick={handleClick} >Services</Link>
            <Link to="/products" onClick={handleClick} >Products</Link>
            <HashLink to="/#footer" onClick={handleClick} >Contact</HashLink>

        </div>


    </nav>


    



  )
}

export default Header
