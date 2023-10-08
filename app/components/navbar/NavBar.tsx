import { truncate } from 'fs'
import React from 'react'
// Initialization for ES Users


const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* Dropdown Menu Items */}
                        <li><a href='#about'>About</a></li>
                        <li><a href='./#contact' >Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl" href='./'>LOGO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* Center Navbar Items */}
                    <li><a href='./#about'><span className='text-accent'>1.</span>About</a></li>
                    <li><a href='./#skillset'><span className='text-accent'>2.</span>Skill Sets</a></li>
                    <li><a href='./#contact'><span className='text-accent'>3.</span>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* End Navbar Items */}
                <a href='./sn-blog' className="btn btn-outline btn-accent m-3">SN Blog</a>
                <a href='./my-blog' className="btn btn-outline btn-accent m-3">My Blog</a>
            </div>
        </div>



    )
}

export default NavBar