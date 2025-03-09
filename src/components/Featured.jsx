import React from 'react'
import { Card } from './'

function Featured() {
    return (
        <div className='w-full py-20'>
            <div className='w-full border-b-2 border-zinc-700 pb-16 px-20'>
                <h1 className='text-[4.5vw] font-neue tracking-tight'>Featured Projects</h1>
            </div>
            <div className='w-full bg-zinc-800'>
                <Card />
            </div>
        </div>
    )
}

export default Featured