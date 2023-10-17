import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nferna from '/public/nferna.png'

const LinkSvg = () => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 400 400"
                stroke="currentColor"
                className="mx-0 h-4 w-4 text-primary"
            >
                <path d="M183.39 216.61C207.14 240.36 245.64 240.36 269.39 216.61L332.19 153.81C355.94 130.06 355.94 91.5601 332.19 67.8101C308.44 44.0601 269.94 44.0601 246.19 67.8101L183.39 130.61" stroke="#191919" strokeWidth="40" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M216.61 183.39C192.86 159.64 154.36 159.64 130.61 183.39L67.8101 246.19C44.0601 269.94 44.0601 308.44 67.8101 332.19C91.5601 355.94 130.06 355.94 153.81 332.19L216.61 269.39" stroke="#4dc2b4" strokeWidth="40" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />

            </svg>
        </>
    )
}

const DownloadSvg = () => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 400 400"
                stroke="currentColor"
                className="mx-0 h-4 w-4 text-primary"
            >
                <path d="M284.55 211.92L200 296.47L115.45 211.92" stroke="#191919" strokeWidth="40" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M200 296.47V58.05" stroke="#191919" strokeWidth="40" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M50 341.95H350" stroke="#4dc2b4" strokeWidth="40" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    )
}


const NavBar = () => {
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* Dropdown Anchor Links */}
                            <li><a href='./#about' className='text-primary text-lg'><span className='text-accent text-2xl'>#</span>About</a></li>
                            <li><a href='./#contact' className='text-primary text-lg'><span className='text-accent text-2xl'>#</span>Contact</a></li>
                            {/* Dropdown Hyperlinks */}
                            <li className='border-t-4'><a href='./projects' className='text-primary text-lg'><div><LinkSvg /></div>Projects</a></li>
                            <li><a href='./blog' className='text-primary text-lg'><div><LinkSvg /></div>Blog</a></li>
                            {/* Dropdown Downloads */}
                            <li className='border-t-4'><Link href='/resume.pdf' className='text-primary text-lg' download="nathanFernandez"><div><DownloadSvg /></div>Resume</Link></li>
                        </ul>
                    </div>
                    <a href='./' className='hidden lg:flex lg:pl-12'>
                        <Image src={Nferna} alt='' width={70} height={70}></Image>
                    </a>
                </div>
                <div className="navbar-center lg:hidden">
                    <a href='./' className='-ml-9'>
                        <Image src={Nferna} alt='' width={70} height={70}></Image>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* Center Navbar List Items */}
                        <li>
                            <a href='./#about' className='text-primary lg:text-xl'><span className='text-accent lg:text-xl'>#</span>About</a>
                        </li>
                        <li>
                            <a href='./#contact' className='text-primary lg:text-xl'><span className='text-accent lg:text-xl'>#</span>Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end hidden lg:flex">
                    {/* End Navbar Items */}
                    <a href='./projects' className="btn btn-outline btn-accent lg:m-3">Projects</a>
                    <a href='./blog' className="btn btn-outline btn-accent lg:m-3">Blog</a>
                    <Link href='/resume.pdf' download="nathanFernandez" className="btn btn-outline btn-accent md:m-4">Resume</Link>
                </div>
            </div>



        </div>
    )
}

export default NavBar