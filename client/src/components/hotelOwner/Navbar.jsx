import React from 'react'
<<<<<<< HEAD
import { assets } from '../../assets/assets'
import { UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
            <Link to="/">
                <img className="h-9 invert opacity-80" src={assets.logo} alt="logo" />
            </Link>
            <UserButton />
        </div>
    )
}

export default Navbar
=======
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import {UserButton} from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300
    py-3 bg-white transition-all duration-300'>

        <Link to='/'>
           
           <img src={assets.logo} alt="logo" className='h-9 invert opacity-80'/>
        
        </Link>

        <UserButton/>

    </div>
  )
}

export default Navbar
>>>>>>> d07792d39304ee2987ae2083b0117e9192edd37f
