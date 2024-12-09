import React from "react";
import banner from "../../images/more/3.png";

import icon1 from "../../images/icons/1.png";
import icon2 from "../../images/icons/2.png";
import icon3 from "../../images/icons/3.png";
import icon4 from "../../images/icons/4.png";

const Banner = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="h-[600px] w-full bg-cover bg-center flex"
      >
        <div></div>
        <div className="font-ranch text-white ml-[50%] mt-[20%] m-20">
          <h3 className="text-4xl">
            Would you like a cup of delicious coffee?
          </h3>
          <p>
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#E3B577] p-2 rounded mt-4">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex bg-[#ECEAE3] justify-center font-ranch">
        <div className="w-[300px]">

          <img src={icon1} alt="" className=" w-[50px] h-[50px] " />
          <p>Awesome Aroma</p>
          <p>You will definitely be a fan of the design & aroma of your coffee</p>
        </div>

        <div className="w-[300px]">

          <img src={icon2} alt="" className=" w-[50px] h-[50px] "/>
          <p>High Quality</p>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>

        <div className="w-[300px]">

          <img src={icon3} alt="" className=" w-[50px] h-[50px] "/>
          <p>Pure Grades </p>
          <p>The coffee is made of the green coffee beans which you will love </p>
        </div>

        <div className="w-[300px]">

          <img src={icon4} alt="" className=" w-[50px] h-[50px] "/>
          <p>Proper Roasting</p>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>

      </div>
    </div>
  );
};

export default Banner;
