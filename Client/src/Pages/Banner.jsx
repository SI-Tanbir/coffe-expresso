
import React from 'react'
import banner from '../../images/more/3.png'

const Banner = () => {
  return (
    <div
    style={{ backgroundImage: `url(${banner})` }}
    className="h-[600px] w-full bg-cover bg-center flex"
  >
    <div></div>
        <div className='font-ranch text-white ml-[50%] mt-[20%] m-20'>

            <h3 className='text-4xl'>Would you like a cup of delicious coffee?</h3>
            <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='btn bg-[#E3B577] p-2 rounded mt-4'>Learn more</button>
        </div>


    </div>
  )
}

export default Banner