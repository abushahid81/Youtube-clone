import React from 'react'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaYoutube} from 'react-icons/fa'
import {CiSearch} from 'react-icons/ci'
import {FaMicrophone} from 'react-icons/fa'
import {RiVideoAddLine} from 'react-icons/ri'
import {CiBellOn} from 'react-icons/ci'
import logo from '../Assets/logo.jpeg'



const Navbar = () => {
  return (
    <div className='flex justify-between items-center nav-point'>
      <div className='flex gap-8 items-center gi-buger'>
        <div>
        <GiHamburgerMenu className='h-16'/>
        </div>
        <div className='flex gap-2 items-center justify-center '>
        <FaYoutube className='fa-tube'/>  
        <span className='you-tube'>Youtube</span>
        </div>
        </div>
        <div className='flex items-center justify-center gap-5'>
            <form>
                <div>
                    <div className='flex items-center searchbutton'>
                        <div className='flex gap-5 items-center input-change'>
                            <input type="text"  placeholder='Search' className='place'/>
                        </div>
                            <button className='flex items-center justify-center rounded-r-3xl search-logo' >
                            <CiSearch className='searchbtn'/>
                            </button>
                    </div>
                </div>
            </form>
            <div className='mic p-3'>
            <FaMicrophone />
            </div>
        </div>
            <div className='flex gap-8 items-center video-tube'>
            <RiVideoAddLine />
            <div className='relative'>
            <CiBellOn />
            <span className='absolute bottom-2 left-2 text-xs rounded-full px-1 bell-o'>15+</span>
            </div>
            <img src={logo}alt='logo-profile' className='rounded-full img-profile'/>
            </div>
    </div>
  )
}

export default Navbar
