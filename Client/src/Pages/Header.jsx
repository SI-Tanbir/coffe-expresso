
import React from 'react'
import img from '../../images/more/15.jpg'
import cup from '../../images/more/logo1.png'

const Header = () => {
  return (
    <div className='relative'>
        <img className='h-[60px] w-[100%]' src={img} alt="" />

        <div className='flex justify-center absolute top-[0px] left-[40%]'>
            <img src={cup} className='h-[60px]' alt="" />
            <p className='text-white font-extrabold text-3xl mt-3 font-ranch'>Espresso Emporium</p>
        </div>

    </div>
    
  )
}

export default Header