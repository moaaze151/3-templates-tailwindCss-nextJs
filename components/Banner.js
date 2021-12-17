import { useRouter } from 'next/router'; 
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
export default function Banner() {
    const router = useRouter();
  return (
    <div className="px-2 bg-[#ececec] relative h-[85.5vh] sm:h-[90.5vh]  overflow-hidden">
      <div
        className="cus-container h-full -mt-16  flex flex-col md:flex-row
      items-center justify-center md:justify-between text-center md:text-left"
      >
        {/*First Part*/}
        <div className="md:flex-1">
          <h1 className="mb-2 md:mb-4 font-bold text-lg sm:text-2xl md:text-3xl text-black">
            Welcome, To Mo3az_Dv World
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-7 sm:leading-8  md:leading-9 text-gray-600 w-[270px] sm:w-[500px] md:w-[90%]">
            Here Iam gonna share everything about my life. Books Iam reading,
            Games Iam Playing, Stories and Events
          </p>
        </div>
        {/*Second Part*/}
        <div className="hidden md:flex flex-1 photo-anime">
          <Image
            src="/landing-image.png"
            alt="error"
            width="1200px"
            height="757px"
          />
        </div>
      </div>
      <div className="w-[150%] rotate-[353deg] lg:rotate-[355deg] absolute -bottom-16 bg-white h-40 lg:h-60 lg:-bottom-28"></div>
      <div
        onClick={() =>   router.push("#articles")}
        className="icon-anime font-bold cursor-pointer main-color absolute left-[50%] text-gl translate-x-[-50%]"
      >
        <FaChevronDown className="-mb-2" />
        <FaChevronDown />
      </div>
    </div>
  );
}
