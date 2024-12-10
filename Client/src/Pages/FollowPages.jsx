
import React from 'react'
import fol1 from '../../images/cups/Rectangle 9.png'
import fol2 from '../../images/cups/Rectangle 10.png'
import fol3 from '../../images/cups/Rectangle 11.png'
import fol4 from '../../images/cups/Rectangle 12.png'
import fol5 from '../../images/cups/Rectangle 13.png'
import fol6 from '../../images/cups/Rectangle 14.png'
import fol7 from '../../images/cups/Rectangle 15.png'
import fol8 from '../../images/cups/Rectangle 16.png'

const FollowPages = () => {
  return (
    <div className='py-10'>

      <div className='text-center font-ranch'>
        <p>Follow Us Now</p>
        <p className="font-extrabold text-4xl mb-3">Follow on Instagram</p>
      </div>



<div className='grid grid-cols-4 place-items-center  gap-10' >

 <img src={fol1} className='' alt="" />
 
  <img src={fol2} className='' alt="" />

  <img src={fol3} className='' alt="" />
  
  <img src={fol4} className='' alt="" />
  
  <img src={fol5} className='' alt="" />
  
  <img src={fol6} className='' alt="" />
  
  <img src={fol7} className='' alt="" />
  
  <img src={fol8} className='' alt="" />
</div>



    </div>
  )
}

export default FollowPages