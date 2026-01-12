import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const CTASection = () => {
  const whatsappNumber = "1234567890";
  const calendlyLink = "https://calendly.com/your-profile";

  return (
    <>
      {/* ============================================================
          DESKTOP VERSION (YOUR ORIGINAL - 100% UNTOUCHED)
          ============================================================ */}
      <section className="hidden md:block bg-[#FAF7F2] py-24 px-6 text-center">
        <h2 className="text-7xl font-extrabold tracking-wide mb-8 ">
          DESIGN <span className="text-[#FE8535] font-extrabold text-6xl text-center ">✦</span> CAPTURE <span className="text-[#FE8535] text-6xl text-center ">✦</span> CREATE
        </h2>

        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-0.5 w-131 bg-black"></div>
          <span className="text-black text-3xl">✦</span>
          <div className="h-0.5 w-131 bg-black"></div>
        </div>

        <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl h-[260px] mb-8" />

        <p className="max-w-2xl mx-auto text-[#000000] mb-8">
          Finding the right team for your business can be overwhelming.
          Let Team Uraan take the guesswork out of the process and help
          you find the perfect fit for your brand.
        </p>

        <div className="flex justify-center items-center gap-4">
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-[#222222] text-white px-10 cursor-pointer py-3 rounded-full hover:bg-[#FE8535] transition-all duration-300 flex items-center gap-2 font-semibold">
            <FaWhatsapp className="text-xl" /> Hire Us Now
          </a>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="border border-black cursor-pointer px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 font-semibold">
            <FiCalendar className="text-xl" /> Book a Free Discovery Call
          </a>
        </div>
      </section>

      {/* ============================================================
          MOBILE/TABLET VERSION (AWWWWARDS CUSTOM HANDCRAFTED)
          ============================================================ */}
      <section className="block md:hidden bg-[#FAF7F2] py-16 px-4 overflow-hidden">
        <div className="relative">
          {/* Awwwards Kinetic Ticker - Headlines move slightly on scroll */}
          <motion.div 
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-0 mb-8"
          >
            <h2 className="text-[14vw] font-black leading-[0.85] tracking-tighter text-[#111]">
              DESIGN <span className="text-[#FE8535] italic font-light lowercase text-[10vw]">✦</span>
            </h2>
            <h2 className="text-[14vw] font-black leading-[0.85] tracking-tighter text-[#111] self-end">
              CAPTURE <span className="text-[#FE8535] italic font-light lowercase text-[10vw]">✦</span>
            </h2>
            <h2 className="text-[14vw] font-black leading-[0.85] tracking-tighter text-[#111]">
              CREATE
            </h2>
          </motion.div>

          {/* Minimalist divider for mobile */}
          <div className="w-full flex items-center gap-2 mb-10 opacity-30">
             <div className="h-[1px] flex-grow bg-black" />
             <span className="text-xs">✦</span>
             <div className="h-[1px] w-12 bg-black" />
          </div>

          {/* Immersive Video/Image Anchor */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full bg-gray-900 rounded-[2rem] aspect-video mb-10 shadow-2xl relative overflow-hidden"
          >
            {/* Soft Grain Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div 
                 animate={{ scale: [1, 1.1, 1] }} 
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md"
               >
                 <div className="w-2 h-2 bg-[#FE8535] rounded-full" />
               </motion.div>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lg leading-[1.4] text-black font-medium mb-12 px-2 border-l-2 border-[#FE8535] ml-2"
          >
            Finding the right team shouldn't be overwhelming. Let <span className="font-bold">Team Uraan</span> take the guesswork out.
          </motion.p>

          {/* Fixed-Position / High-Contrast Action Buttons */}
          <div className="flex flex-col gap-4 px-2">
            <motion.a 
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${whatsappNumber}`}
              className="bg-[#111] text-white py-5 rounded-2xl flex items-center justify-center gap-4 shadow-xl shadow-black/10 transition-colors active:bg-[#FE8535]"
            >
              <FaWhatsapp className="text-2xl text-[#FE8535]" />
              <span className="font-bold uppercase tracking-widest text-sm">Hire Us Now</span>
            </motion.a>

            <motion.a 
              whileTap={{ scale: 0.95 }}
              href={calendlyLink}
              className="bg-transparent border-2 border-black py-5 rounded-2xl flex items-center justify-center gap-4 transition-colors active:bg-black active:text-white"
            >
              <FiCalendar className="text-2xl" />
              <span className="font-bold uppercase tracking-widest text-sm">Free Discovery Call</span>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;