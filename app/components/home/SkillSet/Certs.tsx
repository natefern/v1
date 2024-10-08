import React from 'react'

const Certs = () => {
    return (
        <>
            <div id="skillset" className="container md:my-24 mx-auto md:px-6">
                <section className="text-center pb-36 px-10">
                    <h2 className="mb-10 text-3xl text-base-100 font-bold">Certifications</h2>

                    <div className="grid gap-10 lg:grid-cols-3 lg:gap-x-12 justify-around">
                        {/* APP DEV */}
                        <div className="lg:mb-0">
                            <div
                                className="py-4 block h-full rounded-lg bg-white shadow-[0_px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className="flex justify-center">
                                    <div className="-mt-6 inline-block rounded-full bg-white p-2 text-accent shadow-md">
                                        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-10 md:w-10">
                                            <path d="M273.38 122.12L350 198.74L270.86 277.88" stroke="#191919" strokeWidth="20" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M126.62 122.12L50 198.74L129.14 277.88" stroke="#191919" strokeWidth="20" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M240.32 97.1201L149.89 302.89" stroke="#4dc2b4" strokeWidth="25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <h3 className="mb-2 text-l md:text-xl font-bold text-primary">
                                        Certified Application Developer
                                    </h3>
                                    <h5 className="mb-2 text-base text-secondary font-medium ">ServiceNow</h5>
                                </div>
                            </div>
                        </div>
                        {/* SYS ADMIN */}
                        <div className="lg:mb-0">
                            <div
                                className="py-4 block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className="flex justify-center">
                                    <div className="-mt-6 inline-block rounded-full bg-white p-2 text-accent shadow-md">
                                        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-10 md:w-10">
                                            <path d="M200.01 270.38C161.13 270.38 129.61 238.87 129.61 200C129.61 161.12 161.13 129.6 200.01 129.6C238.89 129.6 270.39 161.12 270.39 200C270.39 238.88 238.88 270.38 200.01 270.38Z" stroke="#4dc2b4" strokeWidth="16" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M341.55 167.74H319.61C316.04 167.74 312.83 165.49 311.67 162.12C309.98 157.27 307.99 152.56 305.72 148.02C304.09 144.78 304.76 140.87 307.32 138.32L322.91 122.73C326.21 119.43 326.21 114.08 322.91 110.78L289.22 77.1C285.92 73.8 280.58 73.8 277.27 77.1L261.4 92.97C258.87 95.5 254.99 96.18 251.77 94.6C247.32 92.43 242.7 90.52 237.95 88.9C234.53 87.75 232.25 84.52 232.25 80.93V58.45C232.25 53.79 228.48 50 223.8 50H176.18C171.51 50 167.73 53.79 167.73 58.45V80.94C167.73 84.53 165.45 87.76 162.03 88.91C157.28 90.52 152.67 92.43 148.21 94.61C144.99 96.19 141.11 95.51 138.58 92.98L122.73 77.1C119.43 73.8 114.08 73.8 110.78 77.1L77.1 110.77C73.8 114.07 73.8 119.42 77.1 122.72L92.69 138.31C95.25 140.87 95.91 144.77 94.29 148.01C92.03 152.55 90.03 157.26 88.36 162.11C87.18 165.48 83.97 167.73 80.4 167.73H58.45C53.78 167.73 50 171.52 50 176.18V223.81C50 228.47 53.77 232.26 58.45 232.26H79.81C83.46 232.26 86.69 234.6 87.83 238.06C89.49 243.05 91.47 247.88 93.73 252.54C95.31 255.79 94.68 259.68 92.13 262.23L77.09 277.27C73.79 280.57 73.79 285.91 77.09 289.21L110.77 322.89C114.07 326.19 119.42 326.19 122.72 322.89L137.47 308.14C140.04 305.57 143.98 304.94 147.23 306.57C151.98 308.94 156.9 311.01 161.98 312.72C165.41 313.89 167.73 317.1 167.73 320.72V341.52C167.73 346.19 171.5 349.98 176.18 349.98H223.8C228.47 349.98 232.25 346.19 232.25 341.52V320.72C232.25 317.1 234.57 313.89 238 312.72C243.07 311 248 308.93 252.75 306.57C256 304.94 259.94 305.56 262.51 308.14L277.26 322.89C280.57 326.19 285.91 326.19 289.21 322.89L322.89 289.21C326.19 285.91 326.19 280.57 322.89 277.27L307.85 262.23C305.31 259.69 304.67 255.8 306.25 252.54C308.51 247.88 310.5 243.04 312.15 238.06C313.29 234.6 316.51 232.26 320.17 232.26H341.53C346.2 232.26 349.98 228.47 349.98 223.81V176.18C349.99 171.52 346.22 167.74 341.55 167.74Z" stroke="#191919" strokeWidth="20" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="p-2">
                                    <h3 className="mb-2 text-l md:text-xl font-bold text-primary">
                                        Certified System Administrator
                                    </h3>
                                    <h5 className="mb-2 text-base text-secondary font-medium">ServiceNow</h5>
                                </div>
                            </div>
                        </div>
                        {/* ITSM SPECIALIST */}
                        <div className="lg:mb-0">
                            <div
                                className="py-4 block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className="flex justify-center">
                                    <div className="-mt-6 inline-block rounded-full bg-white p-2 text-accent shadow-md">
                                        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-10 md:w-10">
                                            <path d="M350 331.04H50V68.96" stroke="#191919" strokeWidth="12" strokeMiterlimit="20" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M86.16 274.28L179.66 162.31L247.37 212.64L327.12 119.97" stroke="#4dc2b4" strokeWidth="20" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="p-2">
                                    <h3 className="mb-2 text-l md:text-xl font-bold text-primary">
                                        ITSM Implementation Specialist
                                    </h3>
                                    <h5 className="mb-2 text-base text-secondary font-medium">ServiceNow</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Certs