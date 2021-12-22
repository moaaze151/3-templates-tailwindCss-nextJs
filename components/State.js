import StateCard from "./StateCard";
import {
  FaUserAlt,
  FaCode,
  FaGlobeAfrica,
  FaMoneyBillAlt,
} from "react-icons/fa";

export default function State() {
  return (
    <div
      id="state"
      className="state"
      style={{
        background: "url(./stats.jpg) center no-repeat",
        backgroundSize: "cover",
        zIndex: "10",
        position: "relative",
      }}
    >
      <div className="cus-container py-16">
        <h2 className="text-center font-bold text-3xl sm:text-4xl">Our Awsome State </h2>
        <div className="w-full mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <StateCard
            num="150"
            title="Clients"
            icon={<FaUserAlt className="mx-auto text-2xl" />}
          />
          <StateCard
            num="135"
            title="Projects"
            icon={<FaCode className="mx-auto text-2xl" />}
          />
          <StateCard
            num="50"
            title="Countries"
            icon={<FaGlobeAfrica className="mx-auto text-2xl" />}
          />
          <StateCard
            num="500"
            title="Money"
            icon={<FaMoneyBillAlt className="mx-auto text-2xl" />}
          />
        </div>
      </div>
    </div>
  );
}
