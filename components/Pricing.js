import Heading from "./Heading";
import CardItem from "../card.json";
import Image from "next/image";
import {FaCheck} from "react-icons/fa"
export default function Events() {
  return (
    <div id="pricing" className="py-16 sec-bg">
      <div className="cus-container">
        <Heading title="PRICING PLAN" />
        <div className="w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CardItem[7].pricing.map((e) => (
            <div key={e.id} className="z-10 card-pricing relative px-5 pt-6 pb-8 shadow-xl text-center bg-white">
              <h3 className="font-bold text-xl">{e.title} </h3>
              <div className="w-[70px] mx-auto my-6">
                <Image className="" src={`/${e.src}`} width={256} height={256} alt="error" />
              </div>
              <p className="main-color font-bold text-6xl mb-1">${e.price}</p>
              <p className="text-sm text-gray-500">Per Month</p>
              <ul className="my-4 text-left">
                {e.info.map((li,i) => (
                  <li className="text-sm flex items-center py-3 border-t border-gray-200" key={i}><FaCheck className="main-color mr-2"/> {li}</li>
                ))}
              </ul>
              <button type="button" className="border main-border main-color text-sm bg-white font-bold w-[130px] h-[43px] rounded-lg">Choose Plane</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
