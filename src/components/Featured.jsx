import React from 'react'

function Featured() {
    return (
        <div className='w-full py-16'>
            <div className='w-full border-b-2 border-zinc-700 pb-16 px-20'>
                <h1 className='text-[4.5vw] font-neue tracking-tight'>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-10 mt-10'>
                    <div className='cardContainer relative w-1/2 h-[75vh]'>
                        <h1 className='text-[#cdea68] uppercase text-[4.5vw] absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap px-10 font-founders'>

                            {"Salience Labs".split("").map((letter, index) => (
                                <span key={index}>
                                    {letter === " " ? "\u00A0" : letter}</span>
                            ))}
                        </h1>
                        <div className=' card w-full h-full rounded-xl overflow-hidden'>
                            <img
                                className='w-full h-full bg-cover'
                                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt=""
                            />
                        </div>
                    </div>
                    <div className='cardContainer rounded-lg w-1/2 h-[75vh] relative'>
                        <h1 className='text-[#cdea68] uppercase text-[4.5vw] absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap px-10 font-founders tracking-tighter'>

                            {"Cardboard Spaceship".split("").map((letter, index) => (
                                <span key={index}>
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                            ))}

                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img
                                className='w-full h-full bg-cover'
                                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;