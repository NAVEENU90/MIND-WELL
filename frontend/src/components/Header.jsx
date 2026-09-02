import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative overflow-hidden flex flex-col md:flex-row flex-wrap bg-emerald-700 rounded-3xl shadow-lg px-6 md:px-10 lg:px-20">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -top-14 -left-10 w-52 h-52 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-white/5" />

      {/* --------Left side---------- */}
      <div className="relative md:w-1/2 flex flex-col justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-emerald-50/90 text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex w-fit items-center gap-2 bg-white px-8 py-3 rounded-full text-emerald-700 font-medium text-sm m-auto md:m-0 hover:scale-105 hover:shadow-md transition-all duration-300"
        >
          Book Appointment <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* --------Right side---------- */}
      <div className="relative md:w-1/2">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-b-3xl md:rounded-3xl"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;