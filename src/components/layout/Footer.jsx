import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-black text-white">
            Designora <span className="text-violet-500">Labs</span>
          </h2>

          <p className="mt-5 text-gray-400">
            Creative branding, graphic design and modern websites that help businesses grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Services
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Logo Design</li>
            <li>Poster Design</li>
            <li>Brand Identity</li>
            <li>Website Design</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">
            <p className="flex items-center gap-2">
              <Mail size={18} />
              sys7379883936@gmail.com
            </p>

          <div className="flex gap-4 pt-2">
  <FaFacebook className="cursor-pointer text-xl text-gray-400 hover:text-violet-400" />
  <FaInstagram className="cursor-pointer text-xl text-gray-400 hover:text-violet-400" />
  <FaLinkedin className="cursor-pointer text-xl text-gray-400 hover:text-violet-400" />
</div>
          </div>
        </div>

      </div>

      <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-500">
        © 2026 Designora Labs. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;