import Heading from "./Heading";
import Time from "./Time";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Events() {
  const [days, setDays] = useState(10);
  const [hours, setHours] = useState(24);
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds === 0) {
      setSeconds(60);
      setMinutes(minutes - 1);
    }
    if (minutes === 0) {
      setMinutes(60);
      setHours(hours - 1);
    }
    if (hours === 0) {
      setHours(24);
      setDays(days - 1);
    }
    if (days === 0) {
      setDays(10);
    }
    let timerID = setInterval(function time() {
      setSeconds(seconds - 1);
    }, 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [seconds]);
  return (
    <div id="events" className="py-16">
      <div className="cus-container">
        <Heading title="LATEST EVENTS" />
        <div className="my-16 md:my-12 flex items-center">
          <div className="hidden md:flex">
            <Image src="/events.png" alt="" width={600} height={540} />
          </div>

          <div className="text-center flex flex-col items-center ">
            <div className="flex justify-evenly w-full mb-8 max-w-[320px]">
              <Time time={days} name="days" />
              <Time time={hours} name="hours" />
              <Time time={minutes} name="minutes" />
              <Time time={seconds} name="seconds" />
            </div>
            <h3 className="font-bold text-3xl mb-4">Tech Masters Event 2021</h3>
            <p
              className="text-gray-500 leading-7 sm:text-lg md:text-base sm:w-[620px] 
            md:w-[370px] lg:w-[600px]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              tenetur doloremque iusto ut adipisci quam ratione aliquam
              excepturi nulla in harum, veritatis porro
            </p>
          </div>
        </div>

        <form className="w-full sec-bg p-5 sm:p-7 sm:w-[500px] md:w-[600px] sm:flex items-center sm:rounded-full">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full mb-4 sm:mb-0 bg-white py-3 px-3 outline-none sm:rounded-full"
          />
          <button className="text-white py-3 w-full sm:px-2 sm:w-[125px] sm:rounded-full sm:ml-4 font-bold main-bg placeholder:text-xs placeholder:font-light">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
