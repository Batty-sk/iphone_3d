import React from 'react'
import Image from 'next/image'
import { appleImg } from '../utils'
import { bagImg,searchImg } from '../utils'
const Header = () => {
  return (
    <header>
      <nav className='flex md:justify-between'>
        <div>
          <Image src={appleImg} height={30} width={30} />
        </div>

        <div className='md:flex sm:hidden gap-7 '>
          <span className='text-gray-300 hover:text-white cursor-pointer '>Store</span>
          <span className='text-gray-300 hover:text-white cursor-pointer'>Mac</span>
          <span className='text-gray-300 hover:text-white cursor-pointer'>IPhone</span>
          <span className='text-gray-300 hover:text-white cursor-pointer'>Support</span>

        </div>

        <div className='flex gap-7'>
          <div className='cursor-pointer opacity-80 hover:opacity-100'>
            <Image src={searchImg} height={30} width={30}/>
          </div>
          <div className='cursor-pointer opacity-80 hover:opacity-100'>
          <Image src={bagImg} height={30} width={30}/>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header