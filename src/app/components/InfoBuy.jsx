import React from 'react'

function InfoBuy() {
  return (
    <section className="max-[834px]:min-h-[1000px] max-[834px]:mt-6 mt-40 text-white">
    <h2 className="font-bold text-3xl text-center">How to Buy</h2>
    <div className="flex gap-2 max-[834px]:gap-6 justify-center h-80 mt-20 max-[834px]:flex-col max-[834px]:mt-[300px]">
    <div className="bg-[#171B29] w-[30%] max-[834px]:min-h-[270px] h-[280px] max-[834px]:w-full rounded-xl relative flex justify-center items-center">
        <div className="w-1/2 max-[834px]:w-full max-[834px]:p-6 ">
          <p className="font-medium text-xl">First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.</p>
        </div>
    </div>
    <div className="bg-[#171B29] w-[30%] max-[834px]:min-h-[270px] max-[834px]:w-full h-[280px] rounded-xl self-end relative flex justify-center items-center">
         <div className="w-1/2 max-[834px]:w-full max-[834px]:p-6">
          <p className="font-medium text-xl">Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale wallet</p>
         </div>   
    </div>
    <div className="bg-[#171B29] w-[30%] max-[834px]:min-h-[270px] max-[834px]:w-full h-[280px] rounded-xl flex justify-center items-center">
      <div className="w-1/2 max-[600px]:w-full max-[834px]:p-6">
        <p className="font-medium text-xl">Then after you will received your $WNTR to your address within 24hours. </p>
      </div>
    </div>
  </div>
  </section>
  )
}

export default InfoBuy
