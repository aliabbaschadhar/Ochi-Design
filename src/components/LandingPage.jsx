// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6';

function LandingPage() {
    return (
        <main className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-40 px-20'>
                {
                    ["We create", "Eye-Opening", "Presentations"]
                        .map((item, index) => (
                            <div key={index} className='masker'>
                                <div
                                    className='w-fit flex items-end overflow-hidden '
                                >

                                    {index === 1 && (
                                        <motion.div
                                            className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] bg-red-500'
                                            initial={{ width: 0 }}
                                            animate={{ width: "8vw" }}
                                            transition={{ ease: [0.85, 0, 0.15, 1], duration: 1.2, delay: 0.5 }}
                                        ></motion.div>
                                    )}

                                    <h1
                                        className='uppercase text-[7.5vw] leading-[6.5vw] tracking-tight font-founders'
                                    >
                                        {item}
                                    </h1>
                                </div>
                            </div>
                        ))
                }
            </div>
            <div className='border-t-2 border-zinc-800 w-full mt-20 flex items-center justify-between px-20 py-[0.5vw]'>
                {
                    ['For public and private companies', 'From the first pitch to IPO']
                        .map((item, index) => (
                            <h4
                                key={index}
                                className='text-[1vw] leading-[3.5vw] font-neue'
                            >
                                {item}
                            </h4>
                        ))
                }
                <div className='start flex items-center gap-4 group cursor-pointer'>
                    <div className='px-4 py-2 border-2 border-slate-100 rounded-full uppercase font-neue text-sm group-hover:text-black group-hover:bg-slate-100 transition-colors duration-300'>
                        Start the project
                    </div>
                    <div className='w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:bg-slate-100 group-hover:text-black transition-colors duration-300'>
                        <span className='rotate-45'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default LandingPage;