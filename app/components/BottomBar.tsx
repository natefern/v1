import React from 'react'
import Image from 'next/image'
import LinkedIn from '/public/linkedin.png'
import ServiceNow from '/public/servicenow.png'
import Github from '/public/github.png'
import Youtube from '/public/youtube.png'

const BottomBar = () => {
    return (
        <>
            <div className="navbar bg-base-100 flex justify-around px-1/3 py-4">
                <a className="btn btn-ghost normal-case text-xl" href='https://www.linkedin.com/in/nathan-fernandez-50795a165/'>
                    <Image src={LinkedIn} alt='' width={40} height={40}></Image>
                </a>
                <a className="btn btn-ghost normal-case text-xl" href='https://nowlearning.servicenow.com/lxp?id=nl_public&user=Natefernan415608'>
                    <Image src={ServiceNow} alt='' width={40} height={40}></Image>
                </a>
                <a className="btn btn-ghost normal-case text-xl" href='https://www.youtube.com/@nferna'>
                    <Image src={Youtube} alt='' width={40} height={40}></Image>
                </a>
                <a className="btn btn-ghost normal-case text-xl" href='https://github.com/natefern'>
                    <Image src={Github} alt='' width={40} height={40}></Image>
                </a>
            </div>
        </>
    )
}

export default BottomBar
