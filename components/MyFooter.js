import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneVolume,
} from "react-icons/fa";
import Image from "next/image";

export default function MyFooter() {
  return (
    <div className="bg-[#191919] text-center">
      <div className="cus-container  text-gray-400 pt-8">
        <div className="py-6  grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 h-full">
          <div className="sm:text-left">
            <h2 className="text-white mb-4 font-bold text-3xl">Mo3az_Dv</h2>
            <div className="my-4 flex justify-center sm:justify-start">
              <FaFacebookF className="mr-3 bg-gray-700 text-4xl" />
              <FaTwitter className="mr-3 bg-gray-700 text-4xl" />
              <FaYoutube className="mr-3 bg-gray-700 text-4xl" />
            </div>
            <p className="mb-3 leading-7 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus nulla rem, dignissimos iste aspernatur
            </p>
          </div>

          <div className="text-center sm:text-left text-sm">
            <p className="pb-2 border-b border-gray-700 mb-4 foot-icon">
              Important Link 1
            </p>
            <p className="pb-2 border-b border-gray-700 mb-4 foot-icon">
              Important Link 2
            </p>
            <p className="pb-2 border-b border-gray-700 mb-4 foot-icon">
              Important Link 3
            </p>
            <p className="pb-2 border-b border-gray-700 mb-4 foot-icon">
              Important Link 4
            </p>
            <p className="foot-icon">Important Link 5</p>
          </div>

          <div className="text-center sm:text-left text-sm">
            <p className="mb-8 sm:flex sm:mr-2 items-center">
              <FaMapMarkerAlt className="text-2xl mx-auto sm:mr-2 sm:ml-0  main-color" />
              <br />
              <span>Egypt, Giza, Inside The Sphinx, Room Number 220</span>
            </p>
            <p className="mb-8 sm:flex sm:mr-2 items-center">
              <FaClock className="text-2xl mx-auto sm:mr-2 sm:ml-0  main-color" />
              <br />
              <span>Business Hours: From 10:00 To 18:00</span>
            </p>
            <p className="mb-8 sm:flex sm:mr-2 sm:items-center">
              <FaPhoneVolume className="text-2xl mx-auto sm:mr-2 sm:ml-0 main-color" />
              <br />
              <span>
                +20123456789
                <br />
                +20198765432
              </span>
            </p>
          </div>

          <div className="flex sm:flex-wrap justify-center md:justify-start md:col-span-3">
            <div className="border-2 border-gray-100 mr-2 mb-2">
              <Image
                className=""
                src="/gallery-01.png"
                width={75}
                height={75}
                alt="erroe"
              />
            </div>
            <div className="border-2 border-gray-100 mr-2 mb-2">
              <Image
                className=""
                src="/gallery-02.png"
                width={75}
                height={75}
                alt="erroe"
              />
            </div>
            <div className="border-2 border-gray-100 mr-2 mb-2">
              <Image
                className=""
                src="/gallery-03.jpg"
                width={75}
                height={75}
                alt="erroe"
              />
            </div>
            <div className="border-2 border-gray-100 mr-2 mb-2">
              <Image
                className=""
                src="/gallery-04.png"
                width={75}
                height={75}
                alt="erroe"
              />
            </div>
            <div className="border-2 border-gray-100 mr-2 mb-2">
              <Image
                className=""
                src="/gallery-05.jpg"
                width={75}
                height={75}
                alt="erroe"
              />
            </div>
            <div className="border-2 border-gray-100 mr-2 mb-2">
              <Image
                src="/gallery-06.png"
                width={75}
                height={75}
                alt="erroe"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-white w-full text-center p-3 border-t border-gray-600 ">
        Made With: Mo3az_Dv
      </p>
    </div>
  );
}
