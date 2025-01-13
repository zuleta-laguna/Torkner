import React from "react";
import CardSection from "./CardSection";
import InfoBG from "./InfoBG";
import CardList from "./CardList";
import InfoArticle from "./InfoArticle";
import PresaleDetails from "./PresaleDetails";
import InfoBuy from "./InfoBuy";

function RestContent() {
  return (
    <>
      <CardSection />
      <InfoBG />
      <CardList />
      <InfoArticle/>
      <PresaleDetails/>
      <InfoBuy/>
      <footer className="w-full h-48 flex justify-between p-5 items-center max-[600px]:flex-col">
       <div><img src="image/logo_colored_sign_black_text.png" alt="" /></div> 
       <div><img src="image/Group 23.png" alt="" /></div> 
       <div><img src="image/Group 22.png" alt="" /></div>  
      </footer>
    </>
  );
}

export default RestContent;
