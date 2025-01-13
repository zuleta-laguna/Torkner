import React from 'react'

function MainContent() {
  return (
    <section className='text-white flex items-center max-[600px]:flex-col '>
      <div className='relative left-20 flex flex-col gap-4 max-[600px]:left-0'>
        <p className='text-[#00B4EC] text-lg'>At Tokners we are</p>
        <h2 className='text-3xl font-semibold'>Reimagining social media through the power of the blockchain.</h2>
        <p className='text-lg text-[#ffffff80]'>We are creating social media 3.0 with influencers, celebrities and creators being able to launch their own digital currency by simply creating a profile with media content posted as Non fungible Tokens that can be owned and traded on the Tknrs network</p>
        <button className='bg-[#22A75D] w-28 h-10 rounded-3xl shadow-2xl shadow-[#22a75e] '>Learn More</button>
      </div>
        <img className='w-2/3 max-[600px]:w-4/5' src="image/Group 65.png" alt="" />
    </section>
  )
}

export default MainContent
