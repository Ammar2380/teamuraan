import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import arrow from "./Group 19.png";

const dummyProjects = [
  {
    id: 1,
    title: "The Stove Club",
    category: "Culinary Branding",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
    ],
  },
  {
    id: 2,
    title: "Naanstop",
    category: "Digital Strategy",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    ],
  },
  {
    id: 3,
    title: "Chai Deewari",
    category: "Content Creation",
    img: "https://images.unsplash.com/photo-1544787210-2213d2426687?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544787210-2213d2426687",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    ],
  },
  {
    id: 4,
    title: "Jazzy Foods",
    category: "Photography",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327",
    ],
  },
];

const ProjectsSection = () => {
  const [page, setPage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const totalPages = Math.ceil(dummyProjects.length / 2);
  const visibleProjects = dummyProjects.slice(page * 2, page * 2 + 2);

  const nextProject = () => setPage((p) => (p + 1) % totalPages);
  const prevProject = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  const nextMobile = () => setMobileIndex((prev) => (prev + 1) % dummyProjects.length);
  const prevMobile = () => setMobileIndex((prev) => (prev - 1 + dummyProjects.length) % dummyProjects.length);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;
    const interval = setInterval(() => {
      setActiveImage((i) => (i === selectedProject.gallery.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedProject]);

  return (
    <section className="py-16 md:py-28 bg-[#ffffff] overflow-hidden relative" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 md:px-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <span className="text-[#FE8535] font-bold tracking-[0.3em] text-[10px] uppercase block mb-2">Our Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-black text-[#111] leading-[0.9] tracking-tighter">
              FEATURED <br /> <span className="italic font-light">PROJECTS</span>
            </h2>
          </motion.div>

          {/* Desktop Only Page Counter */}
          <div className="hidden md:flex items-center gap-4 mb-2">
            <div className="h-[1px] w-20 bg-black/20" />
            <span className="text-xl font-medium">0{page + 1} / 0{totalPages}</span>
          </div>
        </div>

        {/* --- MAIN SHOWCASE CONTAINER --- */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Desktop Left Arrow */}
          <button onClick={prevProject} className="hidden md:flex w-16 h-16 rounded-full border border-black/10 items-center justify-center hover:bg-black hover:text-white transition-all">←</button>

          <div className="w-full">
            
            {/* 1. MOBILE ONLY SHOWCASE (Scroll UI) */}
            <div className="md:hidden relative w-full aspect-[4/5] max-h-[400px] mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileIndex}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset }) => {
                    if (offset.x < -40) nextMobile();
                    else if (offset.x > 40) prevMobile();
                  }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  onClick={() => { setSelectedProject(dummyProjects[mobileIndex]); setActiveImage(0); }}
                  className="relative w-full h-full rounded-[30px] overflow-hidden shadow-xl"
                >
                  <img src={dummyProjects[mobileIndex].img} className="w-full h-full object-cover" />
                  
                  {/* Top Progress Bar */}
                  <div className="absolute top-0 left-0 w-full flex gap-1 px-8 pt-6">
                    {dummyProjects.map((_, i) => (
                      <div key={i} className="flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden">
                        {i === mobileIndex && <motion.div layoutId="activeTab" className="w-full h-full bg-[#FE8535]" />}
                      </div>
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent p-8 flex flex-col justify-end">
                    <span className="text-white/60 text-[9px] tracking-[0.3em] uppercase mb-1">{dummyProjects[mobileIndex].category}</span>
                    <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-4">{dummyProjects[mobileIndex].title}</h3>
                    
                    {/* Visual Swipe Hint */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-[2px] bg-white/20 overflow-hidden">
                        <motion.div animate={{ x: [-50, 50] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="absolute inset-0 w-full h-full bg-[#FE8535]" />
                      </div>
                      <span className="text-white/40 text-[8px] font-bold uppercase tracking-[0.2em]">Swipe Project</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 2. DESKTOP ONLY SHOWCASE (Grid UI - Height Reduced to 400px) */}
            <div className="hidden md:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {visibleProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      onClick={() => { setSelectedProject(project); setActiveImage(0); }}
                      whileTap={{ scale: 0.96 }}
                      className="relative group h-[400px] rounded-[40px] overflow-hidden cursor-pointer shadow-sm"
                    >
                      <motion.img src={project.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/40 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex">
                        <span className="text-white text-xs tracking-widest border border-white/40 px-6 py-2 rounded-full uppercase">View Case</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Right Arrow */}
          <button onClick={nextProject} className="hidden md:flex w-16 h-16 rounded-full border border-black/10 items-center justify-center hover:bg-black hover:text-white transition-all">→</button>
        </div>

        {/* FOOTER CONTENT */}
        <div className="mt-12 md:mt-20 text-center max-w-4xl mx-auto px-4">
            
            {/* Mobile-Only Progress Counter */}
            <div className="md:hidden flex flex-col items-center mb-10">
               <span className="text-[10px] font-black tracking-widest text-[#111] mb-2 uppercase">
                 0{mobileIndex + 1} / 0{dummyProjects.length}
               </span>
               <div className="w-20 h-[1px] bg-black/10 relative overflow-hidden">
                  <motion.div animate={{ width: `${((mobileIndex + 1) / dummyProjects.length) * 100}%` }} className="absolute inset-0 bg-black" />
               </div>
            </div>

            <div className="text-[10px] md:flex gap-10 md:h-1 justify-center items-center md:text-sm text-[#888] tracking-tight mb-6 font-medium">
              <p>Content Creation</p> <p>Digital Marketing</p> <p>Video - Photography</p>
            </div>
            <div className="md:flex justify-center items-center">
              <h3 className="text-xl md:text-2xl md:h-9 font-black text-[#111] leading-[1.2] mb-8 ">
                The Stove Club, Naanstop, Chai Deewari, Jazzy Foods, Choolaah <br /> Yum Yum Hotpot, Misty Coffee Cafe, Shawarma Kaizer & More
              </h3>
              <motion.img src={arrow} className="h-8 md:h-15 inline ml-4" />
            </div>
            <p className="text-[#666] text-xs md:text-base leading-relaxed max-w-2xl mx-auto">
              We start by getting to know our clients...
            </p>
        </div>
      </div>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(_, info) => { if (info.offset.y > 100) setSelectedProject(null); }}
            initial={{ y: "100%", opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-gray-100 bg-white">
                <div>
                  <h4 className="text-black font-black uppercase text-lg">{selectedProject.title}</h4>
                  <p className="text-[10px] tracking-widest uppercase opacity-40">Slide {activeImage + 1} of {selectedProject.gallery.length}</p>
                </div>
                <button onClick={() => setSelectedProject(null)} className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">✕</button>
            </div>

            <div className="flex-1 relative flex items-center justify-center p-4 bg-[rgb(249,249,249)]">
                <div className="absolute top-0 left-0 right-0 flex gap-1 px-6 pt-4 z-10">
                   {selectedProject.gallery.map((_, i) => (
                     <div key={i} className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                        {i === activeImage && <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3 }} className="h-full bg-[#FE8535]" />}
                        {i < activeImage && <div className="w-full h-full bg-[#FE8535]" />}
                     </div>
                   ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={selectedProject.gallery[activeImage]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-h-[70vh] w-full object-contain rounded-xl"
                  />
                </AnimatePresence>
            </div>

            <div className="p-8 bg-white border-t border-gray-100 text-center">
                <button className="w-full py-4 bg-black text-white rounded-full font-black uppercase tracking-widest text-[10px]">
                  View Full Case Study
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;