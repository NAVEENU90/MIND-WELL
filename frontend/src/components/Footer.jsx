import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const IconCircle = ({ children, href, label }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white ring-1 ring-white/15 hover:bg-white hover:text-emerald-700 transition-colors duration-300"
  >
    {children}
  </a>
);

const InfoIcon = ({ children }) => (
  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white ring-1 ring-white/15 shrink-0">
    {children}
  </div>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.95.26-1.6 1.63-1.6H17V3.5c-.3-.04-1.3-.13-2.46-.13-2.44 0-4.1 1.49-4.1 4.22v2.35H8v3.3h2.44V22h3.06Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 3H22l-7.6 8.7L23 21h-6.9l-5.4-6.6L4.5 21H1.4l8.1-9.3L1 3h7l4.9 6.1L18.9 3Zm-1.2 16.2h1.7L7.4 4.7H5.6l12.1 14.5Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.6 4.78 6V21H18v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H10V9Z" />
  </svg>
);

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Doctors", to: "/doctors" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "My Appointments", to: "/my-appointments" },
  { label: "My Profile", to: "/my-profile" },
];

const Footer = () => {
  return (
    <footer className="relative mt-16 left-1/2 -ml-[50vw] w-screen overflow-hidden bg-emerald-700 text-white">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute bottom-0 -right-16 w-64 h-64 rounded-full bg-white/5" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.3fr_auto] gap-10">
          {/* Brand */}
          <div>
            <div className="inline-block bg-white rounded-lg px-3 py-2">
              <img className="w-32" src={assets.logo} alt="Logo" />
            </div>
            <p className="mt-5 text-emerald-50/90 text-sm leading-relaxed max-w-xs">
              We help patients find trusted doctors and book appointments
              easily, making healthcare simpler and more accessible for
              everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">Quick Links</p>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm text-emerald-50/90">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">Contact Info</p>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-emerald-50/90">
              <li className="flex items-start gap-3">
                <InfoIcon><MapPinIcon /></InfoIcon>
                <span>54709 Willms Station, Suite 350, Washington, USA</span>
              </li>
              <li className="flex items-start gap-3">
                <InfoIcon><PhoneIcon /></InfoIcon>
                <span>(415) 555-0132</span>
              </li>
              <li className="flex items-start gap-3">
                <InfoIcon><MailIcon /></InfoIcon>
                <span>wellcare@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <InfoIcon><ClockIcon /></InfoIcon>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">Follow Us</p>
            <div className="mt-5 flex gap-3">
              <IconCircle href="https://facebook.com" label="Facebook"><FacebookIcon /></IconCircle>
              <IconCircle href="https://instagram.com" label="Instagram"><InstagramIcon /></IconCircle>
              <IconCircle href="https://twitter.com" label="Twitter / X"><TwitterIcon /></IconCircle>
              <IconCircle href="https://linkedin.com" label="LinkedIn"><LinkedInIcon /></IconCircle>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/15">
          <p className="text-center text-xs text-emerald-50/80">
            © 2026 MindWell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;