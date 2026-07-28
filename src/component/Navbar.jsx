import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/favicon-v3.svg'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='h-20 bg-[#19150e]/30 backdrop-blur-lg border-b border-[#D4AF37]/15 flex justify-around md:justify-between items-center text-white md:px-20 sticky top-0 z-50'>
            <Link to={'/'} className="flex gap-3 items-center group">
                <img
                    className='w-11 h-11 drop-shadow-[0_0_10px_rgba(212,175,55,0.35)] transition-transform duration-300 group-hover:scale-105'
                    src={logo}
                    alt="Haire Salon logo"
                />
                <div className="flex flex-col leading-none">
                    <span className="font-serif text-2xl tracking-wide text-white">
                        Haire <span className="text-[#D4AF37]">Salon</span>
                    </span>
                    <span className="text-[10px] tracking-[0.3em] text-[#D4AF37]/70 font-semibold uppercase mt-1">
                        Premium Grooming
                    </span>
                </div>
            </Link>
            <div >
                <ul className="md:flex md:gap-10 hidden  ">
                    <li className="hover:cursor-pointer">
                        <a
                            href="#home"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#D4AF37]  border-b-2 border-[#D4AF37]"
                                    : "hover:text-[#D4AF37] hover:border-b-2 hover:border-[#D4AF37] "
                            }
                        >
                            Home
                        </a>
                    </li>
                    <li className="hover:cursor-pointer">
                        <a
                            href='#about'
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#D4AF37]  border-b-2 border-[#D4AF37]"
                                    : "hover:text-[#D4AF37] hover:border-b-2 hover:border-[#D4AF37] "
                            }
                        >
                            About
                        </a>

                    </li>

                    <li className="hover:cursor-pointer">
                        <a
                            href='#testimonial'
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#D4AF37]  border-b-2 border-[#D4AF37]"
                                    : "hover:text-[#D4AF37] hover:border-b-2 hover:border-[#D4AF37] "
                            }
                        >
                            Testimonials
                        </a>

                    </li>
                    

                    <li className="hover:cursor-pointer">
                        <a
                            href="#gallery"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#D4AF37]  border-b-2 border-[#D4AF37]"
                                    : "hover:text-[#D4AF37] hover:border-b-2 hover:border-[#D4AF37] "
                            }
                        >
                            Gallery
                        </a>

                    </li>
                    <li className="hover:cursor-pointer">
                        <a
                            href="#contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#D4AF37]  border-b-2 border-[#D4AF37]"
                                    : "hover:text-[#D4AF37] hover:border-b-2 hover:border-[#D4AF37] "
                            }
                        >
                            Contact
                        </a>

                    </li>


                </ul>

            </div>

                    <button 
                className="md:hidden text-2xl"
                onClick={() => setOpen(!open)}
            >
                {open ? <FaTimes /> : <FaBars />}
            </button>


             {open && (

                <ul className=" absolute 
        top-17 
        right-2
        w-56
        rounded-2xl
        bg-[linear-gradient(160deg,#0d0c0a,#19150e)]
        border
        border-[#D4AF37]/10
        p-2
        flex 
        flex-col 
        gap-2
        md:hidden
        shadow-2xl">

                    <li className="hover:cursor-pointer">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex 
                        justify-between 
                        items-center
                        w-full
                        px-4
                        py-2
                        rounded-xl
                        bg-[#1f1f1f]
                        border
                        border-gray-700
                        transition
                                ${isActive
                                    ? "text-[#D4AF37]  border-b-2 border-[#D4AF37]"
                                    : "hover:text-[#D4AF37] hover:border-b-2 hover:border-[#D4AF37] "}`
                            }
                        >
                            Home
                               <span className="text-[#D4AF37] text-xl">
                        ›
                    </span>
                        </NavLink>
                    </li>
                    <li className="hover:cursor-pointer">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                 `flex 
                        justify-between 
                        items-center
                        w-full
                        px-4
                        py-2
                        rounded-xl
                        bg-[#1f1f1f]
                        border
                        border-gray-700
                        transition
                                ${isActive
                                    ? "text-[#D4AF37]  border-b-2 border-[#D4AF37]"
                                    : "hover:text-[#D4AF37] hover:border-b-2 hover:border-[#D4AF37] "}`
                            }
                        >
                            About
                           <span className="text-[#D4AF37] text-xl">
                        ›
                    </span>
                        </NavLink>

                    </li>

                    <li className="hover:cursor-pointer">
                        <NavLink
                            to="/testimonials"
                            className={({ isActive }) =>
                                
                                `flex 
                        justify-between 
                        items-center
                        w-full
                        px-4
                        py-2
                        rounded-xl
                        bg-[#1f1f1f]
                        border
                        border-gray-700
                        transition
                                ${isActive
                                    ? "text-[#D4AF37]  border-b-2 border-[#D4AF37]"
                                    : "hover:text-[#D4AF37] hover:border-b-2 hover:border-[#D4AF37] "}`
                            }
                        >
                            Testimonials
                             <span className="text-[#D4AF37] text-xl">
                        ›
                    </span>
                        </NavLink>

                    </li>
                    <li className="hover:cursor-pointer">
                        <NavLink
                            to="/pricing"
                            className={({ isActive }) =>
                                 `flex 
                        justify-between 
                        items-center
                        w-full
                        px-4
                        py-2
                        rounded-xl
                        bg-[#1f1f1f]
                        border
                        border-gray-700
                        transition
                                ${isActive
                                    ? "text-[#D4AF37]  border-b-2 border-[#D4AF37]"
                                    : "hover:text-[#D4AF37] hover:border-b-2 hover:border-[#D4AF37] "}`
                            }
                        >
                            Pricing
                          <span className="text-[#D4AF37] text-xl">
                        ›
                    </span>
                        </NavLink>

                    </li>

                    <li className="hover:cursor-pointer">
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                                 `flex 
                        justify-between 
                        items-center
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        bg-[#1f1f1f]
                        border
                        border-gray-700
                        transition
                                ${isActive
                                    ? "text-[#D4AF37]  border-b-2 border-[#D4AF37]"
                                    : "hover:text-[#D4AF37] hover:border-b-2 hover:border-[#D4AF37] "}`
                            }
                        >
                            Gallery
                            <span className="text-[#D4AF37] text-xl">
                        ›
                    </span>
                        </NavLink>

                    </li>
                    <li className="hover:cursor-pointer">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `flex 
                        justify-between 
                        items-center
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        bg-[#1f1f1f]
                        border
                        border-gray-700
                        transition
                                ${isActive
                                    ? "text-[#D4AF37]  border-b-2 border-[#D4AF37]"
                                    : "hover:text-[#D4AF37] hover:border-b-2 hover:border-[#D4AF37] "}`
                            }
                        >
                            Contact
                          <span className="text-[#D4AF37] text-xl">
                        ›
                    </span>
                        </NavLink>

                    </li>


                

                </ul>

            )}


            <a
                href="tel:+911111111111"
                className="hidden md:block md:text-white md:hover:text-[#D4AF37] transition "
            >
                📞 +91 1111111111
            </a>
        </nav>
    )
}

export default Navbar