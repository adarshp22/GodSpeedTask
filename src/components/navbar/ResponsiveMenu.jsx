import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className={`${showMenu ? "left-0" : "-left-[100%]"} h-screen w-[75%] bg-slate-700 fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8
    flex flex-col justify-between text-white`}>
        <div>
            <div className='flex items-center justify-start gap-3'>
                <FaUserCircle size={50} />
                <div>
                    <h1>God's Bot</h1>
                    <h1 className='text-sm text-slate-500'> Any Queries :) </h1>
                </div>
            </div>
            <nav  className='mt-11 '>
                <ul className='space-y-5 text-xl'>
                    <li>
                        <a href='#'> Home</a>
                    </li>
                      <li>
                        <a href='#'> Team</a>
                    </li>
                      <li>
                        <a href='#'> About Us</a>
                    </li>

                     
                </ul>
            </nav>
        </div>
        <div className='footer'>
            <h1> © 2025 All Rights Reserved  </h1>
            
        </div> 
    
    
    </div>
  )
}

export default ResponsiveMenu
