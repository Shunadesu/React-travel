import React, {useState} from "react";
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

import "./navbar.css"

const Navbar = () => {
    // day la hook ne
    const [active, setActive] = useState('navBar');
    
    // Function to toggle Navbar

    const showNavbar = () =>{
        setActive('navBar activeNavbar');
    }

    const removeNavbar = () =>{
        setActive('navBar');
    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1> <MdOutlineTravelExplore className="icon"/> Travel</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink"> Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink"> Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink"> Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink"> About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink"> News</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink"> Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">Book Now</a>
                        </button>
                    </ul>
                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiOutlineCloseCircle className="icon" />
                    </div>

                </div>

                <div onClick={showNavbar} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>                                               
            </header>
        </section>
    )
}

export default Navbar