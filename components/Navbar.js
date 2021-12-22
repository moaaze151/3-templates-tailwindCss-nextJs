import React, { useState ,useEffect} from "react";
import Image from "next/image";
import {
  FaRegComments,
  FaUserTie,
  FaTaxi,
  FaCheckCircle,
  FaBriefcase,
  FaCalendarAlt,
  FaBars,
  FaVideo,
  FaPercent,
  FaSignal,
} from "react-icons/fa";

import Link from "next/link";
export default function Navbar() {
  const [activeLink, setActiveLink] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setActiveLink(false);
    });
   
  }, [])
  return (
    <header className=" py-2 sm:py-3">
      <div className="cus-container relative  sm:flex-row sm:justify-between">
        {/*logo*/}
        <h2 className="flex-1 text-xl  main-color mb-3 sm:mb-0 font-bold">
          <Link href="/">Mo3az_Dv</Link>
        </h2>
        {/*list*/}
        <ul className="flex text-sm sm:text-base md:flex-1 justify-between">
          <li className="list-items mr-1">
            <Link href="#articles">Articles</Link>
          </li>
          <li className="list-items mr-1">
            <Link href="#gallery">Gallery</Link>
          </li>
          <li className="list-items mr-1">
            <Link href="#features">Features</Link>
          </li>
          <li onClick={() => setActiveLink(!activeLink)} className="list-items">
            <Link href="#">Other Links</Link>
          </li>
          {/*Hidden items */}
          {activeLink && (
            <div className="hidden-box">
              {/*first part*/}
              <div className="hidden md:block md:w-[40%] lg:w-[32%]">
                <Image
                  src="/megamenu.png"
                  alt="error"
                  width="300px"
                  height="240px"
                />
              </div>
              {/*second part*/}
              <ul className="px-2 sm:w-[42%] md:w-[28%] lg:w-[32%]">
                <li className="list-hidden">
                  <FaRegComments />{" "}
                  <Link href="#testimonials"> Testimonials</Link>
                </li>
                <li className="list-hidden">
                  <FaUserTie /> <Link href="#members">Team Members</Link>
                </li>
                <li className="list-hidden">
                  <FaTaxi /> <Link href="#services">Services</Link>
                </li>
                <li className="list-hidden">
                  <FaCheckCircle /> <Link href="#skills">Our Skills</Link>
                </li>
                <li className="list-hidden sm:border-0">
                  <FaBriefcase /> <Link href="#how-works">How It Works</Link>
                </li>
              </ul>
              {/*third part*/}
              <ul className="px-2 sm:w-[42%] md:w-[28%] lg:w-[32%]">
                <li className="list-hidden">
                  <FaCalendarAlt /> <Link href="#events">Events</Link>
                </li>
                <li className="list-hidden">
                  <FaBars /> <Link href="#pricing">Pricing Plans</Link>
                </li>
                <li className="list-hidden">
                  <FaVideo /> <Link href="#videos">Top Videos</Link>
                </li>
                <li className="list-hidden">
                  <FaSignal /> <Link href="#state">State</Link>
                </li>
                <li className="list-hidden sm:border-0">
                  <FaPercent /> <Link href="#discount">Request A Discount</Link>
                </li>
              </ul>
            </div>
          )}
        </ul>
      </div>
    </header>
  );
}
