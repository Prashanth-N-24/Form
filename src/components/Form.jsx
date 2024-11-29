import React from 'react'

const Form = () => {
  return (
    <div name='form' className='bg-gradient-to-b from-cyan-800 w-full h-screen text-white rounded-lg '>
      <div className=' flex flex-col mx-auto items-center justify-center max-w-screen-xl px-8 py-16 md:py-60'>
      
        <div className='flex flex-col md:flex-row  md:gap-16'>
          <div className='m-2'>
          <h2 className='text-4xl font-bold border-b-4  border-white-100 '>Contact </h2>
          <p className='py-4 text-justify max-w-screen-sm'>Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam exercitationem expedita amet? Obcaecati asperiores iure excepturi necessitatibus quibusdam, nam hic ex accusamus provident ratione.amet consectetur adipisicing elit. Possimus non minima excepturi, deserunt error id reiciendis! Voluptate perferendis corporis quam earum necessitatibus, dignissimos nobis?</p>
          </div>
          <div className=' p-10 rounded-xl bg-cyan-800  '>
            <input className='m-2 mr-2 w-full rounded-md p-2' placeholder='Name' type="Email" />
            <input className='m-2 w-full rounded-md p-2' placeholder='Email' type="Name" />
            <button className='bg-slate-500 px-10 py-2 m-2 rounded-lg  font-bold ' type="submit">Submit</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Form
