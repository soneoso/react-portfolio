import React from 'react'
import Typed from 'react-typed'

function Hero() {
    return (
        <div  className='text-[#E2D5D2] '>
            <div className='max-w-[1024px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <div className='font-bold text-6xl '>
                    {/* <p>Hi, i'm Eli Hendrick</p>
                    <p>My artist alias is called Neoso</p> */}
                </div>
                <p className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>Music producer & front-end web developer.</p>
                <h1></h1>
                <div className='mt-2'>
                    <p className='md:text-3xl sm:text-4xl md:px-24'>Highly motivated to continuously develop my skills and grow professionally.</p>
                </div>
                <div className='mt-8'>
                    <Typed
                    className='md:text-5xl sm:text-4xl text-xl font-bold text-green-400'
                    strings={['CREATE', 'PRODUCE', 'BUILD']} typeSpeed={120} backSpeed={140} loop />
                </div>
                
            </div>
        </div>
    )
}

export default Hero