'use client'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
     <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-3'>
          {/* social link_icons */}
           <motion.div 
               className='flex flex-row items-center'
               initial={{ x:-500, opacity:0, scale:0.5}}
               animate={{x:0, opacity:1, scale:1}}
               transition={{duration:1.5}}
           > 

                    <SocialIcon url="https://twitter.com" 
                        fgColor='gray'
                        bgColor='transparent'
                        target='_blank'
                    />

                    <SocialIcon url="https://www.facebook.com/profile.php?id=100015325334184/" 
                        fgColor='gray'
                        bgColor='transparent'
                        target='_blank'
                    />

                    <SocialIcon url="https://www.linkedin.com/in/abenezer-yoseph/" 
                        fgColor='gray'
                        bgColor='transparent'
                        target='_blank'
                    />

                    <SocialIcon url="https://github.com/Abenu-Y?tab=repositories" 
                        fgColor='gray'
                        bgColor='transparent'
                        target='_blank'
                    />
             
                 
           </motion.div>


           <motion.div 
              className='flex flex-row items-center'
              initial={{ x:500, opacity:0, scale:0.5}}
              animate={{x:0, opacity:1, scale:1}}
              transition={{duration:1.5}}
            >
                <SocialIcon 
                    className='cursor-pointer' 
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                    target='_blank'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
          </motion.div>

     </header>
  )
}

export default Header