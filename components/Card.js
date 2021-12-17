import Image from "next/image";
export default function Card({ title, text, src }) {
  return (
    <div className="card-item">
      <Image src={`/${src}`} width="600px" height="384px" alt="error" />
      <div className="p-2 border border-y-0">
        <h4 className="text-base font-bold mb-2">{title}</h4>
        <p className="text-sm text-gray-400">{text} </p>
      </div>
      <div className="border border-b-0">
        <p className="p-2 text-sm main-color font-semibold">Read More</p>
      </div>
    </div>
  );
}
