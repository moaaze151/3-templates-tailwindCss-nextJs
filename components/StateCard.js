export default function StateCard({ icon, num, title}) {
  return (
    <div className="relative card-state bg-white rounded-lg py-10 
    text-center border text-gray-800">
     {icon}
      <p className="text-5xl font-bold my-2">{num}</p>
      <p className="main-color text-lg font-semibold">{title}</p>
    </div>
  );
}
