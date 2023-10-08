import React from 'react'
import Image from 'next/image'
import JS from "../../../../public/javascript.png"
import PY from "../../../../public/python.png"
import SQL from "../../../../public/mysql.png"
import Java from "../../../../public/java.png"
import Swift from "../../../../public/swift.png"
import Bash from "../../../../public/bash.png"
import Next from "../../../../public/nextjs.png"
import Express from "../../../../public/express.png"
import Node from "../../../../public/nodejs.png"
import Angular from "../../../../public/angularjs.png"
import Jquery from "../../../../public/jquery.png"
import Bootstrap from "../../../../public/bootstrap.png"

const SkillSet = () => {
    return (
        <>
            <div className='mt-5 px-10'>
                <div className='flex text font-bold text-base-100 text-xl justify-center py-16'>Languages</div>
                <div className='flex flex-row justify-around px-0'>
                    <div className='w-14 md:w-20 tooltip' data-tip="Javascript"><Image src={JS} alt='' width={100} height={100}></Image></div>
                    <div className='w-14 md:w-20 tooltip' data-tip="Python"><Image src={PY} alt='' width={100} height={100}></Image></div>
                    <div className='w-14 md:w-20 tooltip' data-tip="SQL"><Image src={SQL} alt='' width={100} height={100}></Image></div>
                    <div className='w-14 md:w-20 tooltip' data-tip="Java"><Image src={Java} alt='' width={100} height={100}></Image></div>
                    <div className='w-14 md:w-20 tooltip' data-tip="Swift"><Image src={Swift} alt='' width={100} height={100}></Image></div>
                    <div className='w-14 md:w-20 tooltip' data-tip="Bash"><Image src={Bash} alt='' width={100} height={100}></Image></div>
                </div>
            </div>
            <div className='mt-7 px-10'>
                <div className='flex text font-bold text-base-100 text-xl justify-center py-5'>Frameworks and Technologies</div>
                <div className='flex flex-row justify-around px-0 pb-24'>
                    <div className='w-14 md:w-20 tooltip' data-tip="Next.js"><Image src={Next} alt='' width={100} height={100}></Image></div>
                    <div className='w-14 md:w-20 tooltip' data-tip="Express.js"><Image src={Express} alt='' width={100} height={100}></Image></div>
                    <div className='w-14 md:w-20 tooltip' data-tip="Node.js"><Image src={Node} alt='' width={100} height={100}></Image></div>
                    <div className='w-14 md:w-20 tooltip' data-tip="AngularJS"><Image src={Angular} alt='' width={100} height={100}></Image></div>
                    <div className='w-14 md:w-20 tooltip' data-tip="jQuery"><Image src={Jquery} alt='' width={100} height={100}></Image></div>
                    <div className='w-14 md:w-20 tooltip' data-tip="Bootstrap"><Image src={Bootstrap} alt='' width={100} height={100}></Image></div>
                </div>
            </div>
        </>
    )
}

export default SkillSet