import  { useEffect, useState, useRef } from 'react'


const Reveal = ({ children, delay = 0, className = '' })=> {
    const ref = useRef(null)
       const [visible, setVisible] = useState(false)
   
       useEffect(() => {
           const el = ref.current
           if (!el) return
   
           const observer = new IntersectionObserver(
               ([entry]) => {
                   if (entry.isIntersecting) {
                       setVisible(true)
                       observer.unobserve(el)
                   }
               },
               { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
           )
   
           observer.observe(el)
           return () => observer.disconnect()
       }, [])
  
    
    
   
       return (
           <div
               ref={ref}
               style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
               className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
           >
               {children}
           </div>
       )
   
   
  
}

export default Reveal