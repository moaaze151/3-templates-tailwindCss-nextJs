import Heading from "./Heading";
import Border from "./Border";
import Image from "next/image";
import {
  FaUserShield,
  FaTools,
  FaMapMarkedAlt,
  FaDesktop,
  FaPalette,
  FaBullhorn,
} from "react-icons/fa";
export default function Services() {
  const cards = [
    { id: 1, src: FaUserShield, title: "Security" },
    { id: 2, src: FaTools, title: "Fixing Issues" },
    { id: 3, src: FaMapMarkedAlt, title: "Location" },
    { id: 4, src: FaDesktop, title: "Coding" },
    { id: 5, src: FaPalette, title: "Art" },
    { id: 6, src: FaBullhorn, title: "Marketing" },
  ];
  return (
    <div
      id="services"
      className="sec-bg py-16 relative overflow-x-clip"
    >
      <Border />
      <div className="cus-container">
        <Heading title="SERVICES" />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {cards.map((e) => (
            <div key={e.id} className="ser-cards relative hover:-translate-y-3 main-hover shadow-xl w-full bg-white">
              <div className="p-4 text-center">
                {<e.src className="text-7xl mx-auto text-gray-300" />}
                <h3 className="text-xl main-color font-bold mt-4">{e.title}</h3>
              </div>
              <div className="bg-gray-100 h-12 flex justify-between items-center">
                <div className="relative main-bg h-full flex items-center w-28">
                  <span className="after-span text-white font-semibold text-3xl inline-block p-6">
                    0{e.id}
                  </span>
                  
                </div>
                <p className="pr-4 main-color text-sm cursor-pointer">Details</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
