'use client'
type Props = {}
import {motion} from 'framer-motion'

function Projects({}: Props) {
  const projects =[1 ,2 ,3, 4, 5, 6]
  return (
    <motion.div initial={{opacity:0}}  whileInView={{opacity:1}} transition={{duration:1.5}}
    className='h-screen flex flex-col relative overflow-hidden text-left  md:flex-row max-w-full  justify-evenly mx-auto  items-center  z-0'>

   <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

   
    <div className='relative w-full flex  overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' >

      {
        projects.map((project, index) => (
          <div className='w-full h-screen flex flex-col space-y-5 items-center justify-center p-20 md:p-44 flex-shrink-0 snap-center'>
              <motion.img 
                 initial={{y:-300, opacity:0 }} 
                 transition={{duration:1.2}}
                 whileInView={{y:0 , opacity:1}}
                 viewport={{once:true}}
              src="./file.png" alt="" />

              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                 <h4 className='text-4xl font-semibold text-center'>
                     <span className='underline decoration-[#F7AB0A]/50 '>Case study {index+1} 0f {projects.length}</span>: Abe Garage
                  </h4>

                 <p className='text-lg text-center md:text-left'>
                 Abe's Garage App is a comprehensive software solution designed to streamline and enhance the day-to-day workflow of Abe's Garage. From managing customer appointments to tracking vehicle service progress and sending real-time updates, this app simplifies operations, improves customer communication, and boosts overall efficiency. With an intuitive interface, employees can easily access all the tools they need, while customers enjoy a seamless experience, staying informed about their car's service status every step of the way.
                 </p>
      
              </div>
          </div>
        ))
      } 
      
    </div>

   <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>

</motion.div>
  )
}

export default Projects