import React, {useState} from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    const [clicked, setClicked] =useState(false);
    const handleClick = ()=>setClicked(!clicked) ;
    const closeMobileMenu = () => setClicked(false);

    
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                ECIP  <i class="fas fa-mitten"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
             <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact 
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                        Signup
                    </Link>
                </li>
            </ul>
            </div>

        </nav>
            
        </>
    )
}

export default Navbar
