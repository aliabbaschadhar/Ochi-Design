import React from 'react'

function About() {
    return (
        <div className='w-full py-20 bg-[#cdea68] rounded-t-3xl text-black '>
            <h1 className='text-[4vw] font-neue leading-none px-20'>
                Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people
            </h1>
            <div className='w-full flex items-start border-t-[1px] border-[#889593] mt-20 pt-10'>
                <div className='w-1/2 px-20 font-neue '>
                    <h1 className='text-[4vw] '>Our Approach</h1>
                    <button className='px-[3vw] py-[1.5vw] text-[1.2vw] bg-zinc-900 text-white  rounded-full flex items-center gap-4 uppercase'>Read More
                        <div className='h-3 w-3 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] mr-20'>
                    <img className='w-full bg-cover rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About