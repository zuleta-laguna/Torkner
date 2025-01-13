import React from 'react'

function InfoArticle() {
  return (
    <section className="text-white mt-20 max-[834px]:p-4 flex gap-7 p-24 max-[600px]:flex-col">
        <div>
          <div className="flex gap-3 items-center max-[600px]:flex-col max-[600px]:items-start">
            <img className='max-[600px]:hidden' src="image/Group 3.png" alt="" />
            <img className='opacity-0 max-[600px]:opacity-[1]' src="image/Group 37.png" alt="" />
            <h2 className="font-bold text-2xl  max-[600px]:hidden w-full">Tokner is coming</h2>
            <h2 className="font-bold text-2xl opacity-0 max-[600px]:opacity-[1]">Weentar is coming</h2>
          </div>

          <p className="mt-5">
            <span className="font-bold">
              Cryptocurrency adoption is at less than 1% of the global world
              population with some countries and entities actively fighting
              against its mass adoption and the smartest developers and nerds
              holding the fort.
            </span>
            <br />
            <br /> Bitcoin was the first, and it has since grown to thousands of
            tokens launched all aiming to fix one problem or the other with some
            quite simply FOMOing the moment. Our goal is to bring mass adoption
            to the cryptocurrency space by dumbing it down. How far down? So
            down that even a celebrity can explain it in simple words to their
            followers and have them download an app, buy into the social
            currency of their favourite person and watch their investment as is
            with other crypto currency project. <br />
            <br />
            We are trying to do to this space what investment apps did for the
            "nonexistent retail investors". We are gamefying digital currency,
            bringing in popular faces instead of hard to understand projects to
            make it the norm and inadvertently being the "gateway drug" for a
            lot of people to finally give this space a real look. <br /> <br />
            <span className="font-bold">
              {" "}
              A new digital economy is coming. People would be just as powerful
              as countries and creators would be paid beyond the peanuts that
              conventional social media platforms can offer. There would be new
              markets and advertisers with little to offer would not find home
              there. Like Kanye said,
            </span>
            <br />
            <br />
            <span className="text-[#FFD100] font-bold text-xl">"</span>{" "}
            Personalities would become the new currency, and services would be
            built on top of them". <br />
            <br />
            Well, Kanye didn't exactly say that, but it sounds like something we
            hope he would say. Currency is digital, it has been that way for a
            while now, but this time there would be no dead presidents on the
            money, there would people like you on the money, and you would own
            it because it would make the most sense in the world.
          </p>
          <button className='w-28 h-10 border mt-7 border-[#22A75D] rounded-3xl '>Read More</button>
        </div>
        <img className="w-1/2 max-[600px]:w-full max-[834px]:h-[900px]" src="image/Group 73.png" alt="" />
      </section>
  )
}

export default InfoArticle
