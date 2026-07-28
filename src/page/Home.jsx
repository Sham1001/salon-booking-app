import logo1 from '../assets/salon-img-1.avif'
import logo2 from '../assets/salon-img-2.avif'
import logo3 from '../assets/salon-img-3.avif'
import Reveal from '../component/Reveal.jsx'

const stats = [
    { value: '12+', label: 'Years shaping modern looks' },
    { value: '500+', label: 'Happy clients' },
    { value: '50+', label: 'Awards won' },
]

const services = [
    { price: '$40', name: 'Haircut', desc: 'Sharp classic cuts, modern fades, and a clean finish tailored to your look.' },
    { price: '$25', name: 'Beard Trim', desc: 'Precision shaping and a hot towel finish for a sharp, groomed beard.' },
    { price: '$60', name: 'Hair & Beard Combo', desc: 'The full package — haircut and beard grooming in one seamless session.' },
]

const packages = [
    { name: 'Classic Cut', price: '₹1,200', desc: 'Haircut, wash, and finishing style.' },
    { name: 'Beard Care', price: '₹800', desc: 'Trim, line-up, shaping, and detail work.' },
    { name: 'Full Groom', price: '₹2,500', desc: 'Haircut, beard trim, and premium styling.' },
]



const Home = () => {
    return (
        <section id="home" className="relative bg-[#0a0806] min-h-screen flex flex-col items-center py-10 px-4 font-sans overflow-hidden">

           
            <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-[120px]" />

            <div className="relative z-10 w-full flex flex-col items-center">

            <div className="w-full max-w-7xl mx-auto rounded-2xl bg-[linear-gradient(135deg,#0d0c0a_0%,#1f180d_55%,#241a0c_100%)] border border-[#D4AF37]/10 flex flex-col lg:flex-row items-center px-6 md:px-10 gap-10 py-10 min-h-[calc(100svh-5rem)]">

                <div className="w-full lg:w-1/2 space-y-5 flex flex-col justify-center">
                    <p className="text-[#D4AF37] font-bold text-sm tracking-[0.2em]">PREMIUM GROOMING STUDIO</p>
                    <h1 className="font-serif text-4xl md:text-7xl text-white font-bold leading-tight">
                        We make your hair look perfect
                    </h1>
                    <p className="text-gray-300 max-w-md">
                        A polished salon experience with expert stylists, precision cuts, and a calm,
                        elevated space to unwind while we work.
                    </p>
                    <div className="flex gap-3 pt-2">
                        <a href='#about' className="py-3 px-6 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors cursor-pointer">
                            Read More
                        </a>
                        <a href='#contact' className="py-3 px-6 rounded-full bg-[#D4AF37] text-black font-semibold hover:bg-[#c19d2e] transition-colors cursor-pointer">
                            Book Now
                        </a>
                    </div>
                </div>

                <div className="flex gap-4 w-full lg:w-1/2 justify-center">
    <div className="w-1/2 md:w-64 overflow-hidden rounded-2xl">
        <img
            className="w-full h-76 md:h-[29rem] rounded-2xl object-cover transition-transform duration-500 hover:scale-110"
            src={logo1}
            alt="salon interior"
        />
    </div>
    <div className="flex flex-col gap-4 w-1/2 md:w-64">
        <div className="overflow-hidden rounded-2xl">
            <img
                className="w-full h-36 md:h-56 rounded-2xl object-cover transition-transform duration-500 hover:scale-110"
                src={logo3}
                alt="haircut style"
            />
        </div>
        <div className="overflow-hidden rounded-2xl">
            <img
                className="w-full h-36 md:h-56 rounded-2xl object-cover transition-transform duration-500 hover:scale-110"
                src={logo2}
                alt="salon service"
            />
        </div>
    </div>
</div>
            </div>

            <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 mt-8">
                {stats.map((stat, i) => (
                    <Reveal key={stat.label} delay={i * 120} className="flex-1 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                        <div className="flex flex-col items-center justify-center gap-1 bg-[#19150e] border border-[#D4AF37]/30 h-28 rounded-3xl text-white">
                            <h2 className="text-2xl font-bold text-[#D4AF37]">{stat.value}</h2>
                            <p className="text-sm text-gray-300 text-center px-2">{stat.label}</p>
                        </div>
                    </Reveal>
                ))}
            </div>

         
            <div className="w-full max-w-7xl mx-auto my-10 px-6 md:px-10 bg-[linear-gradient(135deg,#070708db,#19150ead)] rounded-4xl">

                <Reveal>
                    <h2 className="font-bold text-sm text-[#D4AF37] mt-8 mb-3 tracking-[0.2em]">SIGNATURE SERVICES</h2>
                    <p className="font-serif font-bold text-3xl text-white mb-10">Simple, premium grooming choices</p>
                </Reveal>

                <div className="flex flex-col md:flex-row gap-6 pb-10 ">
                    {services.map((service, i) => (
                        <Reveal key={service.name} delay={i * 120} className="flex-1 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                            <div className="flex flex-col gap-2 bg-amber-950 rounded-2xl p-6 text-white h-full">
                                <h3 className="text-3xl font-bold text-[#D4AF37]">{service.price}</h3>
                                <h4 className="text-xl font-semibold">{service.name}</h4>
                                <p className="text-sm text-gray-300">{service.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

           
            <div className="w-full max-w-7xl mx-auto bg-[#D4AF37] p-6 md:p-10 rounded-3xl space-y-8">

                <Reveal>
                    <p className="text-black/70 font-bold text-sm tracking-[0.2em]">PRICING</p>
                </Reveal>

                <Reveal delay={100}>
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-black leading-snug">
                            Clear package pricing for a complete salon experience
                        </h2>
                        <p className="text-black/70 max-w-sm text-sm">
                            A pricing block makes the salon feel more complete and gives the layout a stronger business structure.
                        </p>
                    </div>
                </Reveal>

                <div className="flex flex-col md:flex-row gap-6">
                    {packages.map((pkg, i) => (
                        <Reveal key={pkg.name} delay={i * 120} className="w-full md:w-1/3">
                            <div className="rounded-3xl bg-black/90 px-5 py-8 space-y-4 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-xl text-white">{pkg.name}</h3>
                                    <h3 className="font-bold text-xl text-[#D4AF37]">{pkg.price}</h3>
                                </div>
                                <p className="text-gray-300 text-sm">{pkg.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            </div>

        </section>
    )
}

export default Home