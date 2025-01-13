import React from 'react'

function CardList() {
  return (
    <section className="flex justify-center gap-4 max-[600px]:mt-11 mt-44 text-white p-5 max-[600px]:flex-col">
    <div className="w-1/4 max-[600px]:w-full relative ">
      <img src="image/Group 70.png" alt="" />
      <p className="absolute top-20 right-28">2021</p>
      <ul className="flex flex-col gap-3">
        <li>
          <span className="text-[#22A75D]">01</span> Team set-up
        </li>
        <li>
          <span className="text-[#22A75D]">02</span> Launch of informational website
        </li>
      </ul>
    </div>
    <div className="w-1/4 max-[600px]:w-full relative">
      <img src="image/Group 69.png" alt="" />
      <p className="absolute top-20 right-28">2021</p>
      <ul className="flex flex-col gap-3">
        <li>
          <span className="text-[#2278D4]">01</span> Presale and exchange listings
        </li>
        <li>
          <span className="text-[#2278D4]">02</span> Blockchain development and launch
        </li>
        <li>
          <span className="text-[#2278D4]">03</span> Launch of our MVP
        </li>
        <li>
          <span className="text-[#2278D4]">04</span> Influencer agency partnerships
        </li>
        <li>
          <span className="text-[#2278D4]">05</span> Marketing and promotion
        </li>
      </ul>
    </div>
    <div className="w-1/4 max-[600px]:w-full relative">
      <img src="image/Group 71.png" alt="" />
      <p className="absolute top-20 right-28" >2021</p>
      <ul className="flex flex-col gap-3">
        <li>
          <span className="text-[#FFD100]">01</span> Celebrity, Creator and Influencer partnerships
        </li>
        <li>
          <span className="text-[#FFD100]">02</span> Expansion of creator communities on our platform
        </li>
        <li>
          <span className="text-[#FFD100]">03</span> More Marketing and promotion
        </li>
      </ul>
    </div>
    <div className="w-1/4 max-[600px]:w-full relative">
      <img src="image/Group 72.png" alt="" />
      <p className="absolute top-20 right-28">2021</p>
      <ul className="flex flex-col gap-3">
        <li>
          <span className="text-[#E20613]">01</span> Mainstream partnerships
        </li>
        <li>
          <span className="text-[#E20613]">02</span> 500 active creator communities
        </li>
        <li>
          <span className="text-[#E20613]">03</span> 2Million active community members
        </li>
        <li>
          <span className="text-[#E20613]">04</span> More Marketing and promotion
        </li>
      </ul>
    </div>
  </section>
  )
}

export default CardList
