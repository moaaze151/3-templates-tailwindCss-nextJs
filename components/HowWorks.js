import Image from "next/image";
import Heading from "./Heading";
import CardItem from "../card.json";
export default function HowWorks() {
  return (
    <div id="how-works" className="py-16 sec-bg">
      <div className="cus-container">
        <Heading title="HOW IT WORKS" />
        <div className="items-center grid grid-cols-1 lg:grid-cols-2 mt-16 gap-8">
          <div className="text-center lg:text-left">
            <Image src="/work-steps.png" alt="error" width={469} height={450} />
          </div>
          <div className="">
            {CardItem[6].works.map((e) => (
              <div
                className="relative z-10 card-work bg-[#f5f5f5] mb-6 px-2 py-4 sm:p-6 rounded-md flex flex-col sm:flex-row 
                items-center text-center sm:text-left border-2 border-white"
                key={e.id}
              >
                <div className="max-w-[60px] sm:max-w-[80px] sm:mr-8 mb-1 sm:mb-0">
                  <Image
                    src={`/${e.src}`}
                    alt="error"
                    width={512}
                    height={512}
                  />
                </div>
                <div className="">
                  <h3 className="mb-1 font-bold text-lg sm:text-xl">
                    {e.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base leading-7 sm:leading-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Enim nesciunt obcaecati quisquam quis laborum recusandae
                    debitis vel
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
