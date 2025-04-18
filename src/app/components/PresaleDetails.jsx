import React from "react";

function PresaleDetails() {
  return (
    <section className="w-full bg-cover bg-top bg-no-repeat bg-Group6 max-[834px]:bg-Maskgroup h-[53rem] flex justify-center items-end gap-11 relative">
      <div className="flex gap-10 absolute top-[16.5rem] max-[834px]:top-64 max-[834px]:items-center w-full  max-[834px]:overflow-x-scroll  max-[834px]:h-[480px] max-[834px]:snap-x   p-40 max-[834px]:p-14">
        <div className="border border-white w-2/3 h-[23rem] max-[834px]:min-w-[300px] max-[834px]:snap-always max-[834px]:snap-center bg-white rounded-lg flex flex-col justify-center items-center gap-4 ">
          <img src="image/Group 44.png" alt="" />
          <h2 className="text-2xl font-bold">Phase One</h2>
          <p className="text-sm font-semibold">0/04/2021 - 16/04/2021</p>
          <p>1 BNB = 100000 WNTR</p>
          <p>Soft cap: 5000 BNB</p>
          <p>Hard cap: 10000 BNB</p>
        </div>
        <div className="border border-white w-2/3  max-[834px]:min-w-[300px] max-[834px]:snap-center  h-[23rem] bg-white rounded-lg relative max-[834px]:top-0 top-11 flex flex-col justify-center items-center gap-4 ">
          <img src="image/Group 43.png" alt="" />
          <h2 className="text-2xl font-bold">Phase Two</h2>
          <p className="text-sm font-semibold">0/04/2021 - 16/04/2021</p>
          <p>1 BNB = 100000 WNTR</p>
          <p>Soft cap: 5000 BNB</p>
          <p>Hard cap: 10000 BNB</p>
        </div>
        <div className="border border-white w-2/3 max-[834px]:snap-start  max-[834px]:min-w-[300px] max-[834px]:scroll-ml-6  h-[23rem] bg-white rounded-lg flex flex-col justify-center items-center gap-4">
          <img src="image/Group 42.png" alt="" />
          <h2 className="text-2xl font-bold">Phase Three</h2>
          <p className="text-sm font-semibold">0/04/2021 - 16/04/2021</p>
          <p>1 BNB = 100000 WNTR</p>
          <p>Soft cap: 5000 BNB</p>
          <p>Hard cap: 10000 BNB</p>
        </div>
      </div>
    </section>
  );
}

export default PresaleDetails;
