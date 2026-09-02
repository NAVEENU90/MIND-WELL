import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const HeartShape = ({ className }) => (
  <svg viewBox="0 0 32 29" className={className} fill="currentColor">
    <path d="M16 28.5C7 22.7 1 17.2 1 10.7 1 5.9 4.8 2 9.4 2c2.7 0 5.2 1.3 6.6 3.5C17.4 3.3 19.9 2 22.6 2 27.2 2 31 5.9 31 10.7c0 6.5-6 12-15 17.8Z" />
  </svg>
);

const PlusShape = ({ className, style }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={style}
    fill="currentColor"
  >
    <path d="M10 2h4v8h8v4h-8v8h-4v-8H2v-4h8V2Z" />
  </svg>
);

const IconCircle = ({ children, tone = "light" }) => (
  <div
    className={
      tone === "light"
        ? "flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white group-hover:ring-emerald-600 group-hover:scale-110"
        : "flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-emerald-600 ring-1 ring-white/60"
    }
  >
    {children}
  </div>
);

const ShieldCheckIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const CalendarCheckIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

const HeartPulseIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.8 8.6c0 4.6-8.8 10.4-8.8 10.4S3.2 13.2 3.2 8.6a4.6 4.6 0 0 1 8.3-2.7A4.6 4.6 0 0 1 20.8 8.6Z" />
    <path d="M4 11h3l1.5-3L11 14l1.5-4H15" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="10" width="16" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const ClickIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 3v3M4.2 6.2l2.1 2.1M3 13h3M18 13h3M17.7 8.3l2.1-2.1M13 3v3" />
    <path d="M12 12v9l2.5-2.2L16 22l1.6-.8-1.9-3.8L19 16Z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.3 2.3L16 10" />
  </svg>
);

const features = [
  {
    icon: <ShieldCheckIcon />,
    title: "Trusted Doctors",
    text: "Every doctor on our platform is verified, so you can book with confidence.",
  },
  {
    icon: <CalendarCheckIcon />,
    title: "Easy Appointment Booking",
    text: "Find a time that works for you and book in just a few taps.",
  },
  {
    icon: <HeartPulseIcon />,
    title: "Convenient Healthcare",
    text: "Manage appointments and records from anywhere, anytime.",
  },
  {
    icon: <LockIcon />,
    title: "Secure & Reliable",
    text: "Your health information is protected with industry-standard security.",
  },
];

const steps = [
  {
    icon: <SearchIcon />,
    title: "Search & Compare",
    text: "Browse doctors by specialty, location, and availability to find the right fit.",
  },
  {
    icon: <ClickIcon />,
    title: "Book Instantly",
    text: "Choose a convenient time slot and confirm your appointment in seconds.",
  },
  {
    icon: <CheckCircleIcon />,
    title: "Get Care, Stress-Free",
    text: "Receive reminders and manage your visit details all in one place.",
  },
];

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden bg-white">
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(14px, -22px) scale(1.06); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-18px, 16px) scale(1.08); }
        }
        @keyframes floatGentle {
          0%, 100% { transform: translate(0, 0) rotate(var(--rot, 0deg)); }
          50% { transform: translate(8px, 10px) rotate(var(--rot, 0deg)); }
        }
        .bg-blob-1 { animation: floatSlow 9s ease-in-out infinite; }
        .bg-blob-2 { animation: floatSlower 11s ease-in-out infinite; }
        .bg-cross { animation: floatGentle 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .bg-blob-1, .bg-blob-2, .bg-cross { animation: none; }
        }
      `}</style>

      {/* Decorative background */}
      <HeartShape className="bg-blob-1 pointer-events-none absolute -top-10 -left-16 w-64 h-64 text-emerald-50 blur-sm" />
      <HeartShape className="bg-blob-2 pointer-events-none absolute top-1/4 -right-20 w-72 h-72 text-emerald-50 blur-sm" />
      <PlusShape className="bg-cross pointer-events-none absolute top-56 right-16 w-5 h-5 text-emerald-200/60" />
      <PlusShape
        className="bg-cross pointer-events-none absolute bottom-32 left-10 w-4 h-4 text-emerald-200/50"
        style={{ "--rot": "20deg" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10">
        {/* Hero / Introduction */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            About Us
          </h1>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            We help patients easily discover trusted doctors and book
            appointments online, making healthcare simpler, faster, and more
            accessible for everyone.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
          <img
            className="w-full md:max-w-[360px] rounded-2xl shadow-sm"
            src={assets.about_image}
            alt="Our team"
          />
          <div className="flex flex-col justify-center gap-5 md:w-2/4 text-sm text-gray-600 leading-relaxed">
            <p>
              Our platform connects patients with verified healthcare
              professionals, removing the hassle from scheduling appointments
              and managing health records.
            </p>
            <p>
              We're committed to building a healthcare experience that feels
              effortless, whether you're booking your first visit or managing
              ongoing care.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mt-20 rounded-3xl bg-emerald-600 px-8 py-12 md:px-16 md:py-14 text-center relative overflow-hidden">
          <HeartShape className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 text-white/10" />
          <HeartShape className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 text-white/10" />
          <p className="relative text-emerald-100 text-xs font-medium tracking-wide uppercase">
            Our Mission
          </p>
          <p className="relative mt-3 text-white text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            To make healthcare more accessible, convenient, and easy to manage —
            so patients can spend less time searching and more time being cared
            for.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Why Choose Us
            </h2>
            <p className="mt-3 text-gray-500 text-sm">
              A platform built around trust, convenience, and your peace of
              mind.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6 flex flex-col gap-4 hover:shadow-xl hover:shadow-emerald-100 hover:-translate-y-1.5 hover:ring-emerald-200 transition-all duration-300 ease-out"
              >
                <IconCircle>{item.icon}</IconCircle>
                <div>
                  <p className="font-semibold text-gray-700 text-sm transition-colors duration-300 group-hover:text-emerald-700">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Help */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              How We Help
            </h2>
            <p className="mt-3 text-gray-500 text-sm">
              Booking an appointment takes just three simple steps.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-4"
              >
                <IconCircle>{step.icon}</IconCircle>
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    {step.title}
                  </p>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-20 text-center max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Ready when you are
          </h2>
          <p className="mt-3 text-gray-500 text-sm leading-relaxed">
            Find a trusted doctor and book your appointment in minutes — your
            care, made simple.
          </p>
          <button
            onClick={() => {
              navigate("/doctors");
              scrollTo(0, 0);
            }}
            className="mt-6 bg-emerald-600 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors duration-300"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
