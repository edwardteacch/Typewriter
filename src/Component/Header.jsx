import React from 'react'
import { Create } from './Create'
import { Home } from './Home'
import { Collect } from './Collect'
import { Send } from './Send'


const Header = () => {
  return (
    <div>
      <div className='Header bg-amber-50 sticky top-0 z-10'>
        <div className='flex justify-between items-center mt-3 bg-black h-10 py-10 px-10 w-[1400px] m-auto rounded-md font-mono text-amber-50 text-lg'>
          <p className="text-2xl font-bold">Typewriter</p>
          <div className='flex gap-20'>
            <p onClick={() => window.location.href = '/'} className="hover:text-xl hover:shadow-md transition-all duration-200 cursor-pointer">Home</p>
            <p onClick={() => window.location.href = '/create'} className="hover:text-xl hover:shadow-md transition-all duration-200 cursor-pointer">Create</p>
            <p onClick={() => window.location.href = '/collect'} className="hover:text-xl hover:shadow-md transition-all duration-200 cursor-pointer">Collect</p>
            <p onClick={() => window.location.href = '/send'} className="hover:text-xl hover:shadow-md transition-all duration-200 cursor-pointer">Send</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header