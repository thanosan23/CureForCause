import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/#'>Home</a></li>
                            <li><a href='/#about'>About Us</a></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul>
                    </div>
                    <Image alt="image logo" src="/logo.png" width={64} height={64}/>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex flex-row gap-5 px-1 justify-center items-center">
                        <li className="hover:-translate-y-0.5 hover:cursor-pointer transition"><a href='/#'>Home</a></li>
                        <li className="hover:-translate-y-0.5 hover:cursor-pointer transition"><a href='/#about'>About</a></li>
                        <li className="hover:-translate-y-0.5 hover:cursor-pointer transition"><a href="/#contact">Contact</a></li>
                        <li>
                            <a href="/join_us"><button className="hover:opacity-80 hover:-translate-y-0.5 transition bg-gradient-to-b px-4 py-1 from-[#58AAF2] to-[#89C3F7] text-white font-semibold rounded-md">Join Us</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
