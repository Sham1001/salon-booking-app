import { useState } from 'react'
import Reveal from '../component/Reveal.jsx'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Haircut',
        preferredTime: '',
        notes: '',
    })
    const [isRedirecting, setIsRedirecting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsRedirecting(true)

        const message =
            `New booking request%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Service:* ${formData.service}%0A` +
            `*Preferred time:* ${formData.preferredTime}%0A` +
            (formData.notes ? `*Notes:* ${formData.notes}%0A` : '')

        const whatsappNumber = '8828628219' 

        setTimeout(() => {
            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
            setIsRedirecting(false)
        }, 600)
    }

    return (
        <section id="contact" className="bg-amber-100 flex flex-col md:flex-row min-h-screen p-6 md:px-24 lg:px-48 py-12 md:py-16 gap-12">
            <div className="space-y-4 md:w-2/4">
                <Reveal>
                    <div className="space-y-4">
                        <p className="tracking-[0.25em] text-amber-300 text-sm font-semibold">CONTACT AND BOOKING</p>
                        <h1 className="text-4xl md:text-5xl font-serif leading-tight">Book your next grooming session</h1>
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-gray-600">Fill in your details and we'll open WhatsApp so you can confirm your slot directly with us.</p>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="w-full md:w-3/4 md:h-3/12 p-6 flex flex-col justify-center rounded-3xl space-y-4 bg-amber-50 text-gray-600 hover:shadow-2xl">
                        <p>Phone: +12 34 3456 7890</p>
                        <p>Email: hello@gemsalon.com</p>
                        <p>Hours: Mon-Sat, 9:00 AM - 8:00 PM</p>
                    </div>
                </Reveal>
            </div>

            <Reveal className="md:w-2/4" delay={0.15}>
                <form
                    onSubmit={handleSubmit}
                    className="bg-amber-50 rounded-3xl p-8 space-y-5"
                >
                    <Reveal delay={0.25}>
                        <div className="space-y-2">
                            <label htmlFor="name" className="block font-bold text-gray-900" >
                                Name
                            </label>
                            <input
                                required
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-5 py-3.5 rounded-full border-2 border-gray-900 bg-white text-gray-900 placeholder-gray-400 focus:outline-none"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block font-bold text-gray-900">
                                Phone
                            </label>
                            <input
                                required
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-5 py-3.5 rounded-full border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.35}>
                        <div className="space-y-2">
                            <label htmlFor="service" className="block font-bold text-gray-900">
                                Service
                            </label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-5 py-3.5 rounded-full border border-gray-200 bg-white text-gray-900 font-bold focus:outline-none focus:border-gray-900 appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1.25rem_center] bg-[length:1.25rem]"
                            >
                                <option value="Haircut">Haircut</option>
                                <option value="Beard Trim">Beard Trim</option>
                                <option value="Hair Color">Hair Color</option>
                                <option value="Facial">Facial</option>
                                <option value="Full Grooming">Full Grooming</option>
                            </select>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div className="space-y-2">
                            <label htmlFor="preferredTime" className="block font-bold text-gray-900">
                                Preferred time
                            </label>
                            <input
                                required
                                id="preferredTime"
                                name="preferredTime"
                                type="text"
                                placeholder="For example: Friday evening"
                                value={formData.preferredTime}
                                onChange={handleChange}
                                className="w-full px-5 py-3.5 rounded-full border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.45}>
                        <div className="space-y-2">
                            <label htmlFor="notes" className="block font-bold text-gray-900">
                                Notes
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                rows={4}
                                placeholder="Tell us what kind of style you want"
                                value={formData.notes}
                                onChange={handleChange}
                                className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 resize-y"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.5}>
                        <button
                            type="submit"
                            disabled={isRedirecting}
                            className="w-full py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-800 transition disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isRedirecting ? 'Opening WhatsApp...' : 'Book an appointment'}
                        </button>
                    </Reveal>
                </form>
            </Reveal>
        </section>
    )
}

export default Contact