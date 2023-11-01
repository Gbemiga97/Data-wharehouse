import {FaBars} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { images } from '../assets'
import { Nav, NavMobile } from '../components'
import { useState } from 'react'


const Header = () => {
    const [showNav, setShowNav] = useState(false)

  return (
    <header 
    data-aos='fade-down' data-aos-delay='1200' data-aos-duration='1000'
    className='py-8 mb-12 lg:mb-0 z-20 relative px-4 lg:px-0'>
        <div className="container mx-auto">
            <div className='flex items-center justify-between relative'>
                <div className='flex items-center gap-x-[120px]'>
                <a href="#">
                    <img src={images.Logo} alt="logo" />
                </a>

                <div className='hidden lg:flex'>
                    <Nav />
                </div>
                </div>

                <div className={`${showNav ? 'max-h-52' : 'max-h-0'}
                lg:hidden absolute top-24 w-full left-0
                bg-accent-tertiary font-bold rounded transition-all 
                overflow-hidden`}>
                    <NavMobile />
                </div>
                

                <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
                    Request Demo <BsArrowRight 
                    className='text-2xl text-accent-primary group-hover:text-white transition'/> 
                </button>

                <button 
                onClick={() => setShowNav(prev => !prev)}
                className='lg:hidden text-2xl text-primary cursor-pointer'>
                    {
                        !showNav ?
                        <FaBars /> :
                        <AiOutlineClose />
                    }
                </button>
                
            </div>
        </div>
    </header>
  )
}

export default Header