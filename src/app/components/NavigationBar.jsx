'use client'
import React, { useState } from "react";
import HiperLink from "./HiperLink";
import Burguersvg from "../svg/Burguersvg";

function NavigationBar() {
  const [Isopen, setIsopen] = useState(false);
  const handleburguerListchange = () => {
   const newstateList = setIsopen(!Isopen ? true:false)
   console.log(Isopen);
   
  }
  return (
    <nav className="w-full h-28 items-center flex justify-between  p-9">
      <section className=" flex w-[55%] h-full justify-between items-center">
        <div className="h-full">
          <img src="image/logo_colored_sign_black_text.png" alt="" />
        </div>
        <div  className="text-white flex gap-5 items-center max-[834px]:hidden">
          <HiperLink link="#">Our team</HiperLink>
          <HiperLink link="#">Tokens</HiperLink>
          <HiperLink link="#">Connect wallet</HiperLink>
          <HiperLink link="#">Light paper</HiperLink>
        </div>
      </section>
      <section className="text-white flex items-center gap-5 max-[834px]:hidden">
        <HiperLink link="#">Sign in</HiperLink>
        <div className="w-28 h-10 rounded-3xl flex items-center justify-center border border-[#22A75D] ">
          <HiperLink link="#">Sign up</HiperLink>
        </div>
      </section>
      <section className="hidden max-[834px]:block max-[830px]:fixed right-3">
       <button onClick={handleburguerListchange}><Burguersvg/></button> 
      </section>
      <div className={!Isopen ? "hidden":"flex text-white fixed top-24 w-1/3 h-96 z-10 right-4  flex-col justify-center items-center gap-7 text-2xl font-semibold bg-[#171B29] rounded-xl animate-fade-left max-[669px]:w-3/5"}>
          <HiperLink link="#">Our team</HiperLink>
          <HiperLink link="#">Tokens</HiperLink>
          <HiperLink link="#">Connect wallet</HiperLink>
          <HiperLink link="#">Light paper</HiperLink>
        </div>
    </nav>
  );
}

export default NavigationBar;
