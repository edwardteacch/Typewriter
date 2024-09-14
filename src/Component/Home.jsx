// Import necessary components and dependencies
import React from 'react'
import Header  from './Header'
import { Create } from './Create'
import { Collect } from './Collect'

// Home component definition
export const Home = () => {
  return (
    <>
        {/* Render the Header component */}
        <Header />
      
        {/* Main content of the Home page */}
        <div className='Home min-h-screen bg-amber-50 bg-[url(../assets/sepia-plasterboard-texture.jpg)] bg-cover bg-center'>
            <div className='container mx-32 px-24 pt-40'>
                {/* Presenting label */}
                <p className='bg-yellow-300 w-24 font-mono'>Presenting</p>
                {/* Main title */}
                <h1 className='font-bold text-6xl'>Typewriter</h1>
                {/* Description of the app */}
                <p className='pt-5 font-mono text-lg font-light'>Create your custom pen pal letter,
                  add stickers <br></br> and images and send it to your loved ones! <br></br>Download your creations
                  and share them with the people who matter. <br></br>
                  Collect postcards and create new memories!<br></br>
                  Love in just a letter away :)
                </p>
                {/* Call-to-action button */}
                <button onClick={() => document.querySelector('.create-section').scrollIntoView({ behavior: 'smooth' })} className="mt-8 bg-black text-amber-50 font-mono px-6 py-3 rounded-md hover:scale-105 hover:shadow-md transition-all duration-200">
                    Write Now!
                </button>
            </div>
            
        </div>
    </>
  )
}
