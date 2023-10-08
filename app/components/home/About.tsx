import React from 'react'
import headshot from './../../../public/headshot.png'
import Image from 'next/image'

const About = () => {
    //comment
    return (
        <div id='about' className="flex flex-col p-10 md:flex-row md:justify-between items-center hero-overlay">{/* Anything medium+ (768px) we display divs as a flex-row*/}
            <div className='md:pr-10 bg-origin-border-accent'>
                <figure className='pb-10 md:p-0 md:px-0 px-28'><Image src={headshot} alt="Album" priority={true}></Image></figure>
            </div>
            <div>
                <h2 className="card-title text-accent">Basic Info + Skills</h2>
                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus lorem, fermentum eget viverra id, facilisis sed nulla. Donec nulla mi, faucibus sed nunc nec, feugiat ornare velit. Quisque id tortor pretium, consectetur orci quis, blandit tellus. Aliquam fermentum eleifend porta. Suspendisse nisl tortor, suscipit non nisi eget, accumsan sodales mi. Aliquam et volutpat justo. Duis feugiat nisl sed tempor mattis.</p>
            </div>
        </div>


    )
}

export default About