import React from 'react'

function LandingPage() {
    return (
        <div className='main w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-40 px-20'>
                {["We created", "Eye-Opening", "Presentations"].map((item, index) => (
                    <h1 key={index} className='uppercase text-[7.5vw] leading-[6.5vw] tracking-tight font-founders'>{item}</h1>
                ))}
            </div>
            <div className='border-t-2 border-zinc-800 w-full mt-32 flex items-center justify-between px-20 py-[0.5vw]'>
                {
                    ['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (
                        <h4 key={index} className='text-[1vw] leading-[3.5vw] font-neue'>{item}</h4>
                    ))
                }

            </div>

        </div>
    )
}

export default LandingPage;