import Heading from "./Heading";
import CardItem from "../card.json";
import Image from "next/image";
import { FaRandom } from "react-icons/fa";
export default function Videos() {
  return (
    <div id="videos" className="py-16">
      <div className="cus-container">
        <Heading title="TOP VIDEOS" />
        <div className="w-full mt-16 grid grid-cols-1 lg:grid-cols-3">
          <ul className="border border-gray-300">
            <li className="p-4 w-full sec-bg font-bold flex justify-between">
              Top Videos <FaRandom />
            </li>
            {CardItem[8].videos.map((e) => (
              <li
                key={e.id}
                className="hovered w-full main-hover p-4 text-gray-800 border-t border-gray-200"
              >
                <span className="main-hover mb-1 block font-medium">{e.title}</span>
                <span className="text-gray-500">{e.time}</span>
              </li>
            ))}
          </ul>
          <div className="col-span-2 border-[10px] border-[#ececec] sec-bg flex flex-col justify-between">
            <Image
              src="/video-preview.jpg"
              alt="error"
              width={976}
              height={549}
            />
            <p className="p-4 bg-white border-t-[10px] border-[#ececec]">Everything About The Virtual Hosts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
