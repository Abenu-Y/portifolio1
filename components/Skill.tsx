'use client'
import {motion} from 'framer-motion'
type Props = { directionLeft?:boolean}

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img  
         initial={{x:directionLeft ? -200 : 200, opacity:0 }} 
         transition={{duration:1}}
         whileInView={{x:0 , opacity:1}}
         className='rounded-full border border-gray-500 w-24 h-24 xl:w-32 xl:h-32 object-cover filter group-hover:grayscale transition duration-300 ease-in-out'
        src='https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png'/>

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0'>
             <div className='flex items-center justify-center h-full'>
                 <p className='text-3xl font-bold text-black opacity-100'>100%</p>
             </div>
        </div>
    </div>
  )
}

export default Skill