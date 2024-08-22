import React from 'react'

type Props = {}

function ContactUs({}: Props) {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row  justify-evenly mx-auto items-center max-w-7xl px-10 '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact US</h3>

        <div className='flex flex-col space-y-10'>
           <h4 className='text-4xl text-center font-semibold'>
              I have got what you need. 
              <span className='underline decoration-[#F7AB0A]/50'>Lets Talk</span>
           </h4>

           <div>
              
           </div>
        </div>
    </div>
  )
}

export default ContactUs