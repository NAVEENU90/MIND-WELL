import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-emerald-700 rounded-3xl shadow-lg px-6 sm:px-10 md:px-14 lg:px-16 my-20 md:mx-10">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -top-16 -left-10 w-52 h-52 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute bottom-0 right-1/3 w-32 h-32 rounded-full bg-white/5" />

      <div className="relative flex flex-col md:flex-row items-center">
        {/* Left side */}
        <div className="flex-1 py-10 sm:py-14 md:py-20 lg:py-24">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Book Appointment
            <br />
            With 100+ Trusted Doctors
          </p>
          <p className="mt-4 text-emerald-50/90 text-sm sm:text-base max-w-md">
            Find the right specialist and schedule your visit in minutes —
            simple, reliable healthcare booking whenever you need it.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                navigate("/doctors");
                scrollTo(0, 0);
              }}
              className="bg-white text-emerald-700 text-sm sm:text-base font-medium px-8 py-3 rounded-full hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              Book Appointment
            </button>
            <button
              onClick={() => {
                navigate("/login");
                scrollTo(0, 0);
              }}
              className="border border-white/40 text-white text-sm sm:text-base font-medium px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="hidden md:block md:w-1/2 lg:w-[370px] relative self-stretch">
          <img
            className="w-full absolute bottom-0 right-0 max-w-md"
            src={assets.appointment_img}
            alt="Doctor appointment"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;