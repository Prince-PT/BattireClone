import React from 'react'
import BattReLogo from '../assets/Images/BattReLogo.png' 

function Nav() {
  return (
    <div className='bg-black w-screen p-0 m-0 overflow-x-hidden'>
    <ul className='bg-black text-white flex items-center text-sm p-0'>
        <li className='p-5'><img src={BattReLogo} alt="" style={{ maxWidth: '100%', height: 'auto' }} /></li>
        <li className='p-5'>Storie</li>
        <li className='p-5'>Loev</li>
        <li className='p-5'>One</li>
        <li className='mr-24 p-5'>Superbike</li><sup className=' bg-yellow-300 text-black'>new</sup>
        <li className='ml-auto p-5'>Book Now</li>
        <li className='p-5'>Book a Test Ride</li>
        <li className='p-5'>Become a Dealer</li>
    </ul>
</div>
  )
}

export default Nav