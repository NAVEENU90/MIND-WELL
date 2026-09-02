import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";

const IconCircle = ({ children }) => (
  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white group-hover:ring-emerald-600 group-hover:scale-110 group-hover:rotate-6">
    {children}
  </div>
);

const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const HeadsetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
    <path d="M21 15a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h3v3Z" />
    <path d="M3 15a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H3v3Z" />
    <path d="M15 20a2 2 0 0 1-2 2h-2" />
  </svg>
);

const contactDetails = [
  {
    icon: <MapPinIcon />,
    title: "Our Address",
    lines: ["54709 Willms Station, Suite 350", "Washington, USA"],
  },
  {
    icon: <PhoneIcon />,
    title: "Phone Number",
    lines: ["(415) 555-0132", "Mon - Sat, 9am - 6pm"],
  },
  {
    icon: <MailIcon />,
    title: "Email Address",
    lines: ["wellcare@gmail.com", "We reply within 24 hours"],
  },
  {
    icon: <ClockIcon />,
    title: "Working Hours",
    lines: ["Monday - Saturday: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 2:00 PM"],
  },
  {
    icon: <HeadsetIcon />,
    title: "Customer Support",
    lines: ["Our care team is here to help", "with bookings and general queries"],
  },
];

const PlusShape = ({ className, style }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
    <path d="M10 2h4v8h8v4h-8v8h-4v-8H2v-4h8V2Z" />
  </svg>
);

const HeartShape = ({ className, style }) => (
  <svg viewBox="0 0 32 29" className={className} style={style} fill="currentColor">
    <path d="M16 28.5C7 22.7 1 17.2 1 10.7 1 5.9 4.8 2 9.4 2c2.7 0 5.2 1.3 6.6 3.5C17.4 3.3 19.9 2 22.6 2 27.2 2 31 5.9 31 10.7c0 6.5-6 12-15 17.8Z" />
  </svg>
);

const Contact = () => {
  const pulsePathRef = useRef(null);

  useEffect(() => {
    const path = pulsePathRef.current;
    if (!path) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const length = path.getTotalLength();
    const dashLength = 150;
    path.style.strokeDasharray = `${dashLength} ${length}`;

    if (reduceMotion) {
      path.style.strokeDashoffset = 0;
      return;
    }

    const speed = 220; // path units per second
    const cycle = length + dashLength;
    let frameId;
    let start;

    const step = (timestamp) => {
      if (start === undefined) start = timestamp;
      const elapsed = (timestamp - start) / 1000;
      const offset = -((elapsed * speed) % cycle);
      path.style.strokeDashoffset = offset;
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

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

      {/* Decorative background: soft heart glows */}
      <HeartShape className="bg-blob-1 pointer-events-none absolute -top-10 -left-16 w-72 h-72 text-emerald-50 blur-sm" />
      <HeartShape className="bg-blob-2 pointer-events-none absolute top-1/3 -right-20 w-80 h-80 text-emerald-50 blur-sm" />

      {/* Decorative background: EKG / heartbeat pulse line */}
      <svg
        className="pointer-events-none absolute top-64 left-0 w-full h-24"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* faint static baseline */}
        <path
          d="M0 50 H360 L400 50 L430 15 L460 85 L490 50 L520 50 H600 L640 50 L665 30 L690 70 L715 50 L740 50 H1200"
          stroke="#059669"
          strokeOpacity="0.08"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* animated traveling highlight */}
        <path
          ref={pulsePathRef}
          d="M0 50 H360 L400 50 L430 15 L460 85 L490 50 L520 50 H600 L640 50 L665 30 L690 70 L715 50 L740 50 H1200"
          stroke="#059669"
          strokeOpacity="0.35"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Decorative background: scattered medical crosses */}
      <PlusShape className="bg-cross pointer-events-none absolute top-40 right-16 w-6 h-6 text-emerald-200/70" />
      <PlusShape className="bg-cross pointer-events-none absolute bottom-24 left-10 w-5 h-5 text-emerald-200/60" style={{ "--rot": "20deg" }} />
      <PlusShape className="bg-cross pointer-events-none absolute bottom-40 right-1/3 w-4 h-4 text-emerald-200/50" style={{ "--rot": "-15deg" }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            We're here to help with appointments, questions, and anything else
            you need. Reach out to our team through any of the details below.
          </p>
        </div>

        {/* Image + intro strip */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
          <img
            className="rounded-2xl w-full max-w-[340px] shadow-sm"
            src={assets.contact_image}
            alt="Our clinic"
          />
          <div className="flex-1">
            <p className="text-lg font-semibold text-gray-700">Visit or reach us anytime</p>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-md">
              Whether you'd like to stop by our office, give us a call, or
              send an email, our team is ready to assist you with scheduling
              and any care-related questions.
            </p>
          </div>
        </div>

        {/* Contact detail cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactDetails.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6 flex flex-col gap-4 hover:shadow-xl hover:shadow-emerald-100 hover:-translate-y-1.5 hover:ring-emerald-200 transition-all duration-300 ease-out"
            >
              <IconCircle>{item.icon}</IconCircle>
              <div>
                <p className="font-semibold text-gray-700 text-sm transition-colors duration-300 group-hover:text-emerald-700">
                  {item.title}
                </p>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-gray-500 text-sm mt-1">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;