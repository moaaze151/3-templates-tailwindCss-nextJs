import { FaStar } from "react-icons/fa";
import Heading from "./Heading";
import Image from "next/image";
import CardItem from "../card.json";
export default function Testimonials() {
  return (
    <div className="py-16 sec-bg" id="testimonials">
      <div className="cus-container">
        <Heading title="TESTIMONIALS" />
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mt-16">
          {CardItem[3].testimonials.map((e) => (
            <div key={e.id} className="bg-white rounded-lg p-4 relative">
              <h3 className="font-bold text-xl mb-2">{e.name}</h3>
              <p className="text-gray-600 my-2">{e.title}</p>
              <div className=" flex">
                {[...Array(e.stars).keys()].map((k) => (
                  <FaStar key={k} className="text-[#ffc107] mr-1" />
                ))}
                {[...Array(5 - e.stars).keys()].map((k) => (
                  <FaStar key={k} className="mr-1" />
                ))}
              </div>
              <p className="text-gray-600 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                et reiciendis voluptatum, amet est natus quaerat ducimus
              </p>
              <div className="rounded-full w-[100px] h-[100px] absolute top-[-48px] right-[-8px] border-8 border-[#ececec]">
                <Image
                  width="100px"
                  height="100px"
                  src={`/${e.src}`}
                  alt="error"
                  className="rounded-full "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
