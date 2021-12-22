import Image from "next/image";
import Heading from "./Heading";
import CardItem from "../card.json";
export default function Skills() {
  return (
    <div id="skills" className="py-16">
      <div className="cus-container">
        <Heading title="OUR SKILLS" />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-24">
          <div className="hidden sm:block sm:col-span-1">
            <Image src="/skills.png" width={500} height={365} alt="error" />
          </div>
          <div className="col-span-1 w-full">
            {CardItem[5].skills.map((e) => (
              <div
                className="skill-prog relative bg-gray-300 w-[100%] h-7 md:h-8 mb-12 md:mb-14 lg:mb-16"
                key={e.id}
                title={e.title}
                prog={e.progress + "%"}
              >
                <span
                  className=" block h-full main-bg"
                  style={{ width: e.progress + "%" }}
                ></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
