import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/favicon-v3.svg'

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'testimonial', label: 'Testimonials' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const sections = navItems
            .map(item => document.getElementById(item.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
        );

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const desktopLinkClass = (id) =>
        `hover:text-[#D4AF37] hover:border-b-2 hover:border-[#D4AF37] ${
            active === id ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : ''
        }`;

    const mobileLinkClass = (id) =>
        `flex justify-between items-center w-full px-4 py-2 rounded-xl bg-[#1f1f1f] border transition hover:text-[#D4AF37] ${
            active === id ? 'text-[#D4AF37] border-[#D4AF37]' : 'border-gray-700'
        }`;

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
            <div>
                <ul className="md:flex md:gap-10 hidden">
                    {navItems.map(item => (
                        <li key={item.id} className="hover:cursor-pointer">
                            <a href={`#${item.id}`} className={desktopLinkClass(item.id)}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <button
                className="md:hidden text-2xl"
                onClick={() => setOpen(!open)}
            >
                {open ? <FaTimes /> : <FaBars />}
            </button>

            {open && (
                <ul className="absolute top-17 right-2 w-56 rounded-2xl bg-[linear-gradient(160deg,#0d0c0a,#19150e)] border border-[#D4AF37]/10 p-2 flex flex-col gap-2 md:hidden shadow-2xl">
                    {navItems.map(item => (
                        <li key={item.id} className="hover:cursor-pointer">
                            <a
                                href={`#${item.id}`}
                                className={mobileLinkClass(item.id)}
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                                <span className="text-[#D4AF37] text-xl">›</span>
                            </a>
                        </li>
                    ))}
                </ul>
            )}

            <a
                href="tel:+911111111111"
                className="hidden md:block md:text-white md:hover:text-[#D4AF37] transition"
            >
                📞 +91 1111111111
            </a>
        </nav>
    )
}

export default Navbar