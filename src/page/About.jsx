import logo1 from '../assets/salon-img-1.avif'
import logo2 from '../assets/salon-img-2.avif'
import logo3 from '../assets/salon-img-3.avif'
import Reveal from '../component/Reveal.jsx'

const packages = [
    { index: '01', style: 'Consultation', desc: 'We talk through your hair, your lifestyle, and the look you\'re after before a single cut is made.' },
    { index: '02', style: 'Precision cut', desc: 'Every line is measured and shaped by hand, built to hold its form long after you leave the chair.' },
    { index: '03', style: 'Final styling', desc: 'We finish with a style that photographs beautifully and still looks sharp on day five.' },
]

const About = () => {
    return (
        <div id="about" className="relative flex flex-col items-center bg-[#FAF6EE] min-h-screen px-4 md:px-12 py-16 space-y-20 overflow-hidden">

           
            <div className="pointer-events-none absolute -top-20 -right-32 w-[450px] h-[450px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 -left-32 w-[400px] h-[400px] bg-[#D4AF37]/8 rounded-full blur-[120px]" />

          
            <Reveal className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between md:w-5/6 gap-10">
                <Reveal className="space-y-4 md:w-2/4 text-center md:text-left">
                    <span className="block tracking-[0.25em] text-sm font-bold text-[#D4AF37] uppercase">
                        About the studio
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl leading-tight text-neutral-900">
                        Craft, patience, and an eye for detail
                    </h2>
                    <p className="text-neutral-700 leading-relaxed">
                        We're a small studio built around one idea: a great cut should feel effortless
                        to wear and look intentional in every light. No rushed appointments, no
                        guesswork — just a steady hand and a chair you'll want to come back to.
                    </p>
                </Reveal>

                <Reveal className="bg-white md:w-1/3 p-8 rounded-3xl border border-[#D4AF37]/20 shadow-[0_10px_30px_rgba(212,175,55,0.08)]">
                    <h3 className="font-serif text-xl mb-4 text-neutral-900">Why clients choose us</h3>
                    <ul className="list-disc pl-5 marker:text-[#D4AF37] space-y-2 text-neutral-700">
                        <li>Cuts shaped around your face, not a template</li>
                        <li>Years of hands-on grooming experience</li>
                        <li>Premium products used in every service</li>
                        <li>Easy, no-hassle online booking</li>
                    </ul>
                </Reveal>
            </Reveal>

           
            <Reveal className="relative z-10 w-full flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[logo1, logo2, logo3, logo1].map((img, i) => (
                        <div key={i} className="overflow-hidden rounded-2xl w-40 h-40 md:w-56 md:h-56 lg:w-65 lg:h-65 border border-[#D4AF37]/15">
                            <img
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                src={img}
                                alt={`Salon work ${i + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </Reveal>

          
            <Reveal className="relative z-10 w-full md:w-5/6 space-y-8">
                <h3 className="font-serif text-2xl md:text-3xl text-center text-neutral-900">Our process</h3>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    {packages.map((pack) => (
                        <div
                            key={pack.index}
                            className="w-full md:w-1/3 bg-white rounded-2xl p-6 space-y-3 border border-[#D4AF37]/20 shadow-[0_10px_30px_rgba(212,175,55,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                        >
                            <span className="text-3xl font-serif text-[#D4AF37] font-bold">{pack.index}</span>
                            <p className="font-semibold text-xl font-serif text-neutral-900">{pack.style}</p>
                            <p className="text-neutral-600 leading-relaxed">{pack.desc}</p>
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
    )
}

export default About