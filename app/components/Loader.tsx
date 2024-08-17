import React from 'react'

const Loader = () => {
  return (
    <div className='mt-[10rem] flex space-x-2 justify-center items-center bg-black h-[2rem] dark:invert'>
    <span className='sr-only'>Loading...</span>
     <div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
   <div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
   <div className='h-8 w-8 bg-white rounded-full animate-bounce'></div>
  </div>
  )
}

export default Loader