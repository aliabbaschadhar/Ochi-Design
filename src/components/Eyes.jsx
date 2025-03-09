import React from 'react'
import { EyeBall } from './';

function Eyes() {

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div className='absolute flex items-center justify-center gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <EyeBall />
                    <EyeBall />
                </div>
            </div>
        </div>
    )
}

export default Eyes