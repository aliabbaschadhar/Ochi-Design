import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 flex items-center px-[5.5vw] gap-5'>
            <div className='cardcontainer w-1/2 h-[50vh] '>
                <div className='card w-full h-full bg-[#004d43] rounded-xl flex items-center justify-center'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                </div>
            </div>
            <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
                <div className='card rounded-xl w-1/2 h-full bg-[#1a2d2b] flex justify-center items-center'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                </div>
                <div className='card rounded-xl w-1/2 h-full bg-[#172624] flex items-center justify-center'>
                    <img
                        className='w-1/3'
                        src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Cards