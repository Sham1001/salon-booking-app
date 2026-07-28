import Reveal from '../component/Reveal.jsx'

const reviews = [
    { review: 'The cut held its shape for weeks, not just the first few days. Worth every rupee.', clientName: 'Rahul S.', clientType: 'Regular client' },
    { review: 'Booked for my wedding and they nailed it on the first try — no redo, no stress.', clientName: 'Arjun K.', clientType: 'Wedding client' },
    { review: 'Walked in without an appointment expecting the usual rush job. Got the opposite — patient, precise, genuinely good.', clientName: 'Nikhil P.', clientType: 'First-time visitor' },
]

const Testimonial = () => {
    return (
        <section id="testimonial" className="flex flex-col bg-amber-100 min-h-screen p-6 md:px-24 lg:px-48 py-12 md:py-16 space-y-12">
            <Reveal className="w-full md:w-3/6 space-y-3">
                <p className="tracking-[0.25em] text-amber-500 text-sm font-semibold">
                    TESTIMONIALS
                </p>
                <h1 className="text-4xl md:text-6xl font-serif leading-tight">
                    Don't take our word for it
                </h1>
            </Reveal>

            <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    reviews.map((rev, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col justify-between space-y-4 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="space-y-3">
                                <div className="flex gap-1 text-amber-400 text-lg">
                                    {'★★★★★'.split('').map((star, i) => (
                                        <span key={i}>{star}</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 leading-relaxed">{rev.review}</p>
                            </div>

                            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-200 text-amber-700 font-bold text-sm shrink-0">
                                    {rev.clientName.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-sm">{rev.clientName}</p>
                                    <p className="text-gray-500 text-xs">{rev.clientType}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Reveal>

            <Reveal className="bg-amber-300 rounded-2xl py-10 px-8 flex flex-col md:flex-row md:items-center gap-6 md:justify-between">
                <div className="space-y-2">
                    <p className="tracking-[0.25em] text-sm text-amber-700 font-bold">READY WHEN YOU ARE</p>
                    <h2 className="text-lg font-bold leading-snug">
                        Most of our chairs fill up a week out — grab your slot before it does
                    </h2>
                </div>
                <a href='#contact' className="bg-black text-white rounded-full px-6 py-3 font-medium whitespace-nowrap hover:shadow-2xl transition-shadow duration-300 z-30 self-start md:self-center">
                    Request an appointment
                </a>
            </Reveal>
        </section>
    )
}

export default Testimonial