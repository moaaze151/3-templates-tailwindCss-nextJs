import Heading from "./Heading";
import Image from "next/image";
import CardItem from "../card.json";
export default function Features() {
  return (
    <div id="features" className="py-16">
      <div className="cus-container">
        <Heading title="FEATURES" />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 md:gap-11">
          {CardItem[2].features.map((e) => (
            <div
              key={e.id}
              className="box-features  border rounded-sm max-w-[400px] col-span-1"
            >
              <div className={`relative img-box main-hover ${e.bg} `}>
                <Image
                  src={`/${e.src}`}
                  width="700px"
                  height="700px"
                  alt="error"
                />
              </div>
              <div className="text-center py-4 px-5">
                <h3 className="text-3xl font-extrabold mb-2">{e.title}</h3>
                <hr
                  style={{ borderColor: e.color }}
                  className="h-0 border-2  w-20 mx-auto"
                />
                <p className="text-lg text-gray-500 my-6 leading-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  harum hic veniam eligendi minima
                </p>
                <button
                  style={{ color: e.color, borderColor: e.color }} data-color={e.color}
                  className="main-hover mt-4 py-2 px-8 border-[3px] rounded-md font-bold bg-white text-lg"
                >
                  More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
