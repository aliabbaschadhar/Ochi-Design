import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

function Marquee() {
    return (
        <div className="w-full py-20 bg-[#004d43] rounded-t-3xl">
            <div className="border-y-2 border-zinc-300 flex whitespace-nowrap overflow-hidden py-3">
                {['We are ochi', 'We are ochi', 'We are Ochi', 'We are ochi', 'We are ochi', 'We are ochi'].map((text, index) => (
                    <motion.h1
                        // TODO: Add animation
                        key={index}
                        className="text-[20vw] leading-none font-founders uppercase mb-[1vw] pr-[2vw]"
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                    >
                        {text}
                    </motion.h1>
                ))}
            </div>
        </div>
    )
}

export default Marquee 