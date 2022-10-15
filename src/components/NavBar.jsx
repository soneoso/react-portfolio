import React, {useState, useRef, useEffect} from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import {TweenMax, Power3} from 'gsap'


function NavBar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    };
        let logoItem = useRef(null);

    useEffect(() => {
        console.log(logoItem);
        TweenMax.to(
            logoItem,
            .8,
            {
                opacity: 1,
                duration: 400,
                delay: 0.5,
                y: -20,
                ease: Power3.easeOut
            }
        )
    }, []);
    
    return (

        // Navbar desktop
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#E2D5D2]">

            <h1 className=" w-full text-3xl font-bold">NEOSO.</h1>
            <ul className="hidden uppercase md:flex">
                <li className="p-4">Work</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            
            {/* Navbar mobile drop down */}

            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[60%] bg-hero-pattern bg-transparent bg-cover md:hidden h-full border-r rounded-br-full border-r-gray-900 bg-[#000300] opacity-90 backdrop-blur-sm  ease-in-out duration-700"  : 'fixed left-[-100%] top-0 w-[60%] h-full ease-out-in duration-500'} >
                <ul ref={el => {logoItem = el}} className="uppercase opacity-0 text-6xl p-4 mt-12">
                <li className="p-4 border-b border-gray-600">Work</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
