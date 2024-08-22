'use client'
import {motion} from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
         <motion.img 
           initial={{y:-100, opacity:0}}
           whileInView={{y:0,opacity:1}}
           viewport={{once:true}}
           transition={{duration:1.2}}
           className='rounded-full h-32 w-32 xl:w-[200px] xl:h-[200px] object-cover object-center'
           src="https://i.pinimg.com/564x/d7/1d/5c/d71d5cce025b22cea3b3ef9a48f9fd4a.jpg" alt="" />

           <div className='px:0 md:px-10'>
              <h4 className='text-4xl font-light'>CEO of Meta</h4>
              <p className='font-bold text-2xl mt-1'>Aben</p>
              <div className='flex space-x-2 my-2'>
                  <img 
                  className='h-10 w-10 rounded-full object-cover'
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZIZz2t-dr2EAptec3IqprekR2F2N5t0ntA&s" alt="" />
                   <img 
                  className='h-10 w-10 rounded-full  object-cover'
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZIZz2t-dr2EAptec3IqprekR2F2N5t0ntA&s" alt="" />
                   <img 
                  className='h-10 w-10 rounded-full  object-cover'
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZIZz2t-dr2EAptec3IqprekR2F2N5t0ntA&s" alt="" />
                   <img 
                  className='h-10 w-10 rounded-full  object-cover'
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZIZz2t-dr2EAptec3IqprekR2F2N5t0ntA&s" alt="" />
              </div>
              <p className='uppercase py-5 text-gray-300'>Started work...Ended..</p>
              <ul className='list-disc space-y-4 ml-t text-lg'>
                 <li>I’m always learning and staying up-to-date with new tech trends. I like to share what I know and help others grow.</li>
                 <li>I’m always learning and staying up-to-date with new tech trends. I like to share what I know and help others grow.</li>
                 <li>I’m always learning and staying up-to-date with new tech trends. I like to share what I know and help others grow.</li>
              </ul>
           </div>
    </article>
  )
}

export default ExperienceCard