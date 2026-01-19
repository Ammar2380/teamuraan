import { useState, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import img1 from './p2.jpg'
import img2 from './p1.jpg'
import img3 from './p4.jpg'
import img4 from './p3.jpg'
const services = [
  {
    id: 1,
    title: "Content Creation",
    desc: "From eye catching visuals to compelling captions, we turn your social media platforms into engagement engines that attract, convert, and retain customers. Our strategies go beyond likes and comments, focusing on lead generation, conversions, and sustainable growth.",
    image: img1
  
  },
  {
    id: 2,
    title: "Digital Marketing",
    desc: "We design performance-driven digital marketing campaigns using SEO, paid ads, and analytics to increase visibility, traffic, and measurable ROI.",
    image: img2
  },
  {
    id: 3,
    title: "Video & Photography",
    desc: "High-quality videos and photography that capture attention, tell stories, and elevate your brand across all platforms.",
    image: img3
  },
  {
    id: 4,
    title: "Restaurant POS",
    desc: "Smart POS solutions that streamline restaurant operations, manage orders efficiently, and enhance customer experience.",
    image: img4
  },
];

const Services = () => {
  const [active, setActive] = useState(services[0]);

  // Magnetic Effect Logic (Desktop Only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="py-16 md:py-24 cursor-default overflow-hidden" id="services">
      {/* Changed grid-cols to 1 by default, and md:grid-cols-3 for desktop */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        
        {/* LEFT COLUMN: NAVIGATION */}
        <div className="flex flex-col">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-6 text-[#222222] tracking-tighter uppercase leading-none"
          >
            Our <br /> <span className="text-[#FE8535]">Services</span>
          </motion.h3>

          <p className="font-medium text-[#222222]/60 leading-tight mb-8 md:mb-12 text-sm max-w-xs">
            We transform brands through strategic digital experiences. Select a service to explore our expertise.
          </p>

          <ul className="relative space-y-2 md:space-y-0">
            {services.map((item, i) => {
              const isActive = active.id === item.id;
              return (
                <motion.li
                  key={item.id}
                  // onClick for Mobile, onMouseEnter for Desktop
                  onClick={() => setActive(item)}
                  onMouseEnter={() => setActive(item)}
                  className={`relative py-4 group cursor-pointer border-b border-black/5 last:border-0 rounded-2xl transition-all duration-300 ${isActive ? 'bg-[#101010] px-4 md:px-0 md:bg-transparent' : ''}`}
                >
                  <div className="flex justify-between items-center h-5 relative z-10 md:px-4">
                    <div className="flex items-center gap-4">
                      <span className={`text-base font-bold transition-colors duration-500 ${isActive ? 'text-[#FE8535]' : 'text-black/20'}`}>
                        0{i + 1}
                      </span>
                      <span className={`text-lg md:text-xl font-bold uppercase tracking-tight transition-all duration-500 ${isActive ? 'text-[#FAF6EC] md:text-[#101010]' : 'text-black/30 md:group-hover:text-black/60'}`}>
                        {item.title}
                      </span>
                    </div>
                    
                    <motion.span 
                      animate={{ x: isActive ? 0 : -10, opacity: isActive ? 1 : 0 }}
                      className="text-[#FE8535] font-black"
                    >
                      →
                    </motion.span>
                  </div>
                  {/* Subtle highlight for desktop active state that doesn't use the black box */}
                  {isActive && <motion.div layoutId="tab" className="hidden md:block absolute inset-0 bg-black/5 rounded-xl -z-10" />}
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* MIDDLE COLUMN: THE REVEALER (Responsive Image & Text) */}
        <div className="relative group bg-amber-50/50 md:bg-amber-50 py-4 px-4 md:py-2 md:px-2 rounded-[32px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
              transition={{ duration: 0.4 }}
              className="h-full flex flex-col"
            >
              <div className="relative h-[250px] md:h-[300px] rounded-3xl overflow-hidden shadow-xl">
                <motion.div 
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full"
                >
                  <img src={active.image} alt={active.title} className="w-full h-full object-cover grayscale-[0.2] md:group-hover:grayscale-0 transition-all duration-700" />
                </motion.div>
                
                <div className="absolute bottom-4 right-4 bg-[#FE8535] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  Service Detail
                </div>
              </div>

              <div className="py-6 md:py-8">
                <motion.h4 className="text-2xl md:text-3xl font-black text-[#222222] mb-3 uppercase tracking-tighter">
                  {active.title}
                </motion.h4>
                <motion.p className="text-sm font-medium leading-relaxed text-[#222222]/70">
                  {active.desc}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: ACTION CARDS */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* PROCESS CARD */}
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
         
            className="bg-[#2B2B2B] rounded-[2.5rem] p-6 md:p-8 flex-1 flex flex-col justify-between group cursor-default relative overflow-hidden min-h-[200px]"
          >
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#FE8535] font-bold">Process</span>
              <p className="text-sm mt-3 text-[#FAF6EC]/80 font-medium max-w-[200px]">
                Transparent methodology built for radical results.
              </p>
            </div>

            <div className="flex items-end justify-between relative z-10">
              <h3 className="text-xl md:text-2xl text-[#FAF6EC] tracking-tighter font-black leading-none uppercase">
                See how <br /> we work
              </h3>
              
              <div className="flex gap-1 mb-1">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#FE8535] flex items-center justify-center text-[10px] text-[#FE8535] font-bold">
                    0{step}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#FE8535]/10 rounded-full blur-3xl" />
          </motion.div>

          {/* TEAM CARD */}
          <motion.div 
         
            className="bg-[#FE8535] rounded-[2.5rem] p-6 md:p-8 flex-1 flex flex-col justify-between group cursor-default relative overflow-hidden min-h-[200px]"
          >
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold">Experts</span>
              <p className="text-sm mt-3 text-[#2B2B2B] font-bold leading-tight max-w-[200px]">
                Crafting digital excellence with a creative approach.
              </p>
            </div>

            <div className="flex items-end justify-between relative z-10">
              <h3 className="text-xl md:text-2xl text-[#2B2B2B] tracking-tighter font-black leading-none uppercase">
                OUR <br /> TEAM
              </h3>
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path id="circlePathMobile" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[14px] font-black uppercase fill-[#2B2B2B]">
                    <textPath xlinkHref="#circlePathMobile">• Quality • Passion • Creative </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
                 style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Services;