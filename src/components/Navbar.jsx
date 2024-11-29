import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'Home'
    },
    {
      id: 2,
      link: 'Product'
    },
    {
      id: 3,
      link: 'About'
    },
    {
      id: 4,
      link: 'Contact'
    },
  ]

  return (
    <div className='w-full  flex flex-col'>

      <div className='flex justify-between ml-5'>

        <img className='w-12 rounded-xl m-2' src="/images/logo192.png" alt="logo_picture" />

        <ul className=' hidden md:flex  m-2 pr-10 gap-10 justify-center items-center '>

          {links.map(({ id, link }) => (

            <li key={id} className='cursor-pointer'>
              {link}
            </li>

          ))}
        </ul>










        <div onClick={() => setNav(!nav)} className='cursor-pointer mr-3 p-3 text-gray-500   md:hidden'>
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {nav && (
        <ul className='flex flex-col absolute right-0  w-[75%] h-screen bg-gradient-to-b via-gray-600  from-slate-800 text-white'>

          {links.map(({ id, link }) => (
            <li key={id} className='px-8 cursor-pointer capitalize py-3 text-2xl'>
              {link}
            </li>
          ))}

        </ul>
        )}


      </div>
    </div>
  )
}

export default Navbar
