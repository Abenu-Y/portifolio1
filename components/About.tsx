'use client'
import {motion} from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
       initial={{opacity:0}}  whileInView={{opacity:1}} transition={{duration:1.5}}
      className='flex flex-col h-screen  relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img 
            initial={{x:-200, opacity:0}}
            whileInView={{x:0,opacity:1}}
            viewport={{once:true}}
            transition={{duration:1.5}}
            className='-mb-20  md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]'
            src='./profile.jpg'
         />

         <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold  '>Here's a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
            <p>
               Hi, I’m Abenezer Yoseph, a full-stack developer who loves building effective web apps. With solid training in both frontend and backend development, I’m skilled at creating smooth and efficient websites. I enjoy solving problems and using the latest technology to make my projects stand out.
            </p>

            <p>
              Outside of coding, I’m always learning and staying up-to-date with new tech trends. I like to share what I know and help others grow. My goal is to make a positive impact with every project and contribute to the tech community
            </p>
         </div>
    </motion.div>
  )
}

export default About