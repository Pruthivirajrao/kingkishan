import React from 'react'

const Banner = () => {
  return (
    <div className='relative px-4 md:p-0'>
        <img className='w-screen h-44 rounded md:h-[22rem]' src="https://res.cloudinary.com/dexterous-technology/image/upload/v1725451415/Meat_Banner_1444x500_pvei4s.jpg" alt="" />
        <div className="flex absolute left-[50%] bottom-5 gap-4">
            <button className="bg-white h-6 w-6 rounded-full"></button>
            <button className="bg-white h-6 w-6 rounded-full"></button>
            <button className="bg-white h-6 w-6 rounded-full"></button>
        </div>
    </div>
  )
}

export default Banner