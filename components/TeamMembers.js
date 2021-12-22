import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Heading from "./Heading";
import CardItem from "../card.json";
import Image from "next/image";

export default function TeamMembers() {
  return (
    <div className="py-16" id="members">
      <div className="cus-container">
        <Heading title="TEAM MEMBERS" />
        <div
          className=" w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          justify-items-end  grid-rows-3 gap-12 sm:gap-8"
        >
          {CardItem[4].members.map((e) => (
            <div
              key={e.id}
              className="relative col-span-1 w-[90%] rounded-xl p-2 pb-4 sm:p-5 sec-bg 
              grid grid-rows-3 gap-2 h-[500px]"
            >
              {/*icons*/}
              <div className="text-gray-600  cursor-pointer main-color row-span-1 row-start-2 flex flex-col items-end justify-between">
                <FaFacebookF className="hover:main-color" />
                <FaTwitter className="hover:main-color" />
                <FaYoutube className="hover:main-color" />
                <FaLinkedinIn className="hover:main-color" />
              </div>
              {/*text*/}
              <div className="h-full row-span-1 row-start-3 flex flex-col justify-end">
                <h3 className="main-color font-bold text-xl ">Name</h3>
                <p className="text-gray-700 text-sm">
                  Simple Short Description
                </p>
              </div>
                {/*image*/}
              <div
                className="h-[400px] overflow-hidden  absolute left-[-11.1111%] 
              right-[12%] sm:left-[-13%] sm:right-[17%]  
              bottom-[16%] top-[5%] sm:bottom-[20%] sm:top-[10%]"
              >
                <Image className="rounded-lg" src={`/${e.src}`} alt="error" width={512} height={512} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
