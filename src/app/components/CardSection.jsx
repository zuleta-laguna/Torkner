import React from 'react'
import HiperLink from "./HiperLink";

function CardSection() {
  return (
    <section className="p-28 w-full text-white max-[8340px]:p-2 max-[834px]:mt-20 ">
    <div className="w-full h-[400px] flex gap-3 max-[834px]:flex-col">
      <div className="w-1/2 h-80 rounded-2xl bg-[#171B29] p-7 max-[834px]:min-h-[400px] ">
        <img className="w-1/6" src="image/Group 67.png" alt="" />
        <h2 className="text-2xl font-medium">For <span className="text-[#22A75D] underline">Creators</span></h2>
        <p className="text-[#ffffff80]">
          Creators can gain independence through a decentralised digital
          currency system that is dependent on growing and engaging with the
          community and also their star power. They own 10-15% of the total
          value of the tokens minted.
        </p>
        <HiperLink link="#"><span className="text-[#22A75D]">Learn More</span></HiperLink>
      </div>
      <div className="w-1/2 h-80 rounded-2xl self-end bg-[#171B29] p-7  max-[834px]:min-h-[400px]">
        <img className="w-1/6" src="image/Group 68.png" alt="" />
        <h2 className="text-2xl font-medium">For <span className="text-[#2278D4] underline">Holders</span></h2>
        <p className="text-[#ffffff80]">
          Holding social tokens allows the individual to gain access to
          benefits including unreleased content, private communities, direct
          access to celebrity, early- access to tickets and more as well as
          the ability to trade with other communities in order to gain access
          to more creator content with early token buyers being the biggest
          winners as the value of the token increases with more buyers.
        </p>
        <HiperLink link="#"><span className="text-[#2278D4]">Learn More</span></HiperLink>
      </div>
    </div>
  </section>
  )
}

export default CardSection
