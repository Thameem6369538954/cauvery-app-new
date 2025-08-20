import React from 'react'
import bnr from "../Images/bnr.jpg"
import ponni from "../Images/ponni.png"
const Bennar = () => {
  return (
    <div>
        <div className=' w-full min-h-auto flex items-center justify-center '>
            <div className='relative bg-red-800'>
                <img src={bnr} alt="" />
                <div className="absolute -top-21 md:-top-5 md:left-40 right-40 flex" >
                <img src={ponni} className=' md:w-100' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bennar