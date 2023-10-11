import React from 'react'
import headshot from '/public/headshot.png'
import Image from 'next/image'

const About = () => {
    //comment
    return (
        <div id='about' className="flex flex-col p-10 md:flex-row md:justify-between items-center hero-overlay">{/* Anything medium+ (768px) we display divs as a flex-row*/}
            <div className='md:pr-10 bg-origin-border-accent'>
                <figure className='pb-10 md:p-0 md:px-0 px-28'><Image src={headshot} alt="Album" priority={true}></Image></figure>
            </div>
            <div>
                <h2 className="card-title text-accent">About</h2>
                <p className='text-secondary'>I am dedicated to optimizing business processes and enhancing efficiency within the ServiceNow platform. I specialize in creating workflow automation, IT service management, and service catalog applications to streamline and improve business processes. My work is dedicated to enhancing organizational efficiency and delivering seamless service experiences to end-users.</p>
            </div>
        </div>


    )
}

export default About