import { useState, useEffect } from 'react'
import img1 from '../assets/salon-img-1.avif'
import img2 from '../assets/salon-img-2.avif'
import img3 from '../assets/salon-img-3.avif'
import img4 from '../assets/salon-img-4.avif'
import Reveal from '../component/Reveal.jsx'


const Gallery = () => {
  const images = [img1, img2, img3, img4]
  const [activeIndex, setActiveIndex] = useState(null)

  const isOpen = activeIndex !== null

  const closeLightbox = () => setActiveIndex(null)
  const showPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const showNext = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))


  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <section id="gallery" className="min-h-screen p-6 md:px-24 lg:px-48 py-12 md:py-16 space-y-8 bg-amber-50 relative">
      <Reveal>
        <div className="w-full md:w-2/6 space-y-4">
          <p className="tracking-[0.25em] text-amber-300 font-semibold text-sm">
            GALLERY
          </p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight">
            A closer look at our work
          </h1>
        </div>
      </Reveal>


      <div className="flex gap-4 h-72 md:h-[420px]">
        <Reveal className="w-3/5 h-full">
          <div className="w-full h-full overflow-hidden rounded-3xl cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
              src={img1}
              alt="Precision haircut styled by our team"
              onClick={() => setActiveIndex(0)}
            />
          </div>
        </Reveal>
        <Reveal className="w-2/5 h-full" delay={0.1}>
          <div className="w-full h-full overflow-hidden rounded-3xl cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
              src={img2}
              alt="Precision haircut styled by our team"
              onClick={() => setActiveIndex(1)}
            />
          </div>
        </Reveal>
      </div>


      <div className="flex gap-4 h-56 md:h-72">
        <Reveal className="w-2/5 h-full">
          <div className="w-full h-full overflow-hidden rounded-3xl cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
              src={img3}
              alt="Precision haircut styled by our team"
              onClick={() => setActiveIndex(2)}
            />
          </div>
        </Reveal>
        <Reveal className="w-3/5 h-full" delay={0.1}>
          <div className="w-full h-full overflow-hidden rounded-3xl cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
              src={img4}
              alt="Precision haircut styled by our team"
              onClick={() => setActiveIndex(0)}
            />
          </div>
        </Reveal>
      </div>


      <Reveal>
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="h-40 w-15 md:w-20 md:h-60 rounded-full overflow-hidden border-2 border-transparent hover:border-amber-300 transition"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                src={img}
                alt={`thumbnail ${i + 1}`}
              />
            </button>
          ))}
        </div>
      </Reveal>


      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >

          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl leading-none hover:text-amber-300 transition"
          >
            &times;
          </button>


          <button
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            className="absolute left-4 md:left-8 text-white text-4xl hover:text-amber-300 transition"
          >
            &#8249;
          </button>


          <img
            src={images[activeIndex]}
            alt=""
            className="max-h-[85vh] max-w-[85vw] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />


          <button
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            className="absolute right-4 md:right-8 text-white text-4xl hover:text-amber-300 transition"
          >
            &#8250;
          </button>


          <div className="absolute bottom-6 text-white/70 text-sm tracking-widest">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery