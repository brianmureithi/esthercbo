import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import '../Button.css';
import { Button } from '../Button';




function Navbar() {
    const [clicked, setClicked] =useState(false);
    const [button,setButton] = useState(true);
    const handleClick = () => setClicked(!clicked) ;
    const closeMobileMenu = () => setClicked(false);

    const showButton = () => {
        if(window.innerwidth <= 960){
            setButton(false)
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    },[]);
    window.addEventListener('resize', showButton);


    
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                ECIP  <i class="fab fa-typo3"></i>
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
                        Contact us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Signup
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
            </div>

        </nav>
            
        </>
    )
}

export default Navbar
