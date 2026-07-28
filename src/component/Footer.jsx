import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import logo from '../assets/favicon-v3.svg'

const Footer = () => {
  return (
    <footer className="relative bg-[linear-gradient(135deg,#0d0c0a_0%,#19150e_100%)] text-white border-t border-[#D4AF37]/15 overflow-hidden">

  
      <div className="pointer-events-none absolute -bottom-32 -left-20 w-[350px] h-[350px] bg-[#D4AF37]/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

     
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-3">
            <img className="w-9 h-9" src={logo} alt="Haire Salon logo" />
            <span className="font-serif text-2xl">
              Haire <span className="text-[#D4AF37]">Salon</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            A premium grooming studio built for appointments, services, and
            client trust — precision cuts, expert stylists, and a calm,
            elevated space.
          </p>
          <ul className="flex gap-3 pt-2">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-base text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-base text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-base text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="mailto:yourmail@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-base text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>

      
        <div className="space-y-3">
          <h4 className="text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
            Explore
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-[#D4AF37] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#D4AF37] transition">About</a></li>
            <li><a href="#testimonial" className="hover:text-[#D4AF37] transition">Testimonials</a></li>
            <li><a href="#gallery" className="hover:text-[#D4AF37] transition">Gallery</a></li>
            <li><a href="#contact" className="hover:text-[#D4AF37] transition">Contact</a></li>
          </ul>
        </div>

       
        <div className="space-y-3">
          <h4 className="text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
            Visit Us
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>+91 1111111111</li>
            <li>yourmail@gmail.com</li>
            <li>Mon – Sat: 10am – 8pm</li>
          </ul>
        </div>
      </div>

     
      <div className="relative z-10 border-t border-[#D4AF37]/10 py-5 px-6 text-center text-xs text-gray-500 tracking-wide">
        © {new Date().getFullYear()} Haire Salon. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer