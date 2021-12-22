import Image from "next/image";
export default function Discount() {
  return (
    <div id="discount" className="discount">
      <div className="cus-container grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="h-full main-bg text-center text-white w-full p-4 sm:p-12">
          <h2 className="font-bold text-xl sm:text-3xl">We Have A Discount</h2>
          <p className="mt-4 mb-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            asperiores consectetur, recusandae ratione provident necessitatibus,
            cumque delectus commodi fuga praesentium beatae. Totam vel similique
            laborum dicta aperiam odit doloribus corporis.
          </p>
          <div className="relative mx-auto">
            <Image src="/discount.png" alt="error" width={250} height={250} />
          </div>
        </div>
        <div className="h-full bg-white text-center w-full p-4 sm:p-12 flex flex-col items-center justify-between">
           <h2 className="w-full sm:w-[80%] font-bold text-xl sm:text-3xl mb-6">Request A Discount</h2>
           <input className="w-full sm:w-[80%] outline-none sec-bg border-gray-400 border-b p-3" type="text" placeholder="Your Name"/>
           <input className="my-4 w-full sm:w-[80%] outline-none sec-bg border-gray-400 border-b p-3" type="email" placeholder="Your Email"/>
           <input className="w-full sm:w-[80%] outline-none sec-bg border-gray-400 border-b p-3" type="number" placeholder="Your Phone"/>
           <textarea className="my-4 h-[170px] w-full sm:w-[80%] outline-none sec-bg border-gray-400 border-b p-3" type="text" placeholder="Tell Us About Your Needs"></textarea>
           <button className="w-full sm:w-[80%] text-white main-bg p-4">Send</button>
        </div>
      </div>
    </div>
  );
}
