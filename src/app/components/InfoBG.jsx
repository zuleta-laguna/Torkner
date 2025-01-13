import React from 'react'

function InfoBG() {
  return (
        <section className="flex max-[834px]:flex-col">
        <div className="bg-bgSection1 w-[50%] h-[500px] max-[834px]:bg-GroupMobile max-[834px]:w-full max-[600px]:h-[700px] bg-no-repeat bg-cover"></div>
        <div className="bg-white w-[50%] h-[500px] max-[834px]:w-full max-[834px]:h-[700px] max-[834px]:rounded-r-[250px] max-[834px]:rounded-l-none max-[834px]:rounded-br-[0]  rounded-l-[300px] rounded-bl-none flex items-center justify-center">
          <div className="w-2/3  max-[834px]:w-full relative top-14 flex flex-col gap-2">
          <h2 className="text-3xl font-bold">What makes us different?</h2>
          <p className="text-[#000000ba] font-bold">
            We would only launch tokens with the express permission of the
            creators.
          </p>
          <p className="text-[#000000b3]">
            There are several thousand celebrities and creators on twitter,
            tiktok, Instagram and YouTube with followings in the millions who we
            would be actively engaging before we go viral. We would get them on
            our platform and they would see the opportunity to create a fan
            driven digital economy where their digital content can be traded as
            NFTs and their most loyal fans can have the monetary value of their
            creator's currency increase significantly as they promote their
            digital currency across their channels while our native token
            holders benefit from the Weentar popularity.
          </p>
          </div>
        </div>
      </section>
  )
}

export default InfoBG
