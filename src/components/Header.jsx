import React from 'react'
import Image from 'next/image'
import { appleImg } from '../utils'
import { bagImg,searchImg } from '../utils'
const Header = () => {
  return (
    <header >
      <nav className='flex justify-between w-full'>
        <div>
          <Image src={appleImg} height={20} width={20} alt='applelogo' />
        </div>

        <div className='md:flex hidden gap-7 '>
          <span className='text-gray-300 hover:text-white cursor-pointer '>Store</span>
          <span className='text-gray-300 hover:text-white cursor-pointer'>Mac</span>
          <span className='text-gray-300 hover:text-white cursor-pointer'>IPhone</span>
          <span className='text-gray-300 hover:text-white cursor-pointer'>Support</span>

        </div>

        <div className='flex md:gap-7 gap-5'>
          <div className='cursor-pointer opacity-80 hover:opacity-100'>
            <Image src={searchImg} height={20} width={20} alt='searchlogo'/>
          </div>
          <div className='cursor-pointer opacity-80 hover:opacity-100'>
          <Image src={bagImg} height={20} width={20} alt='baglogo'/>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header