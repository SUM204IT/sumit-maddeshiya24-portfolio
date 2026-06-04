import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import video1 from "../assets/video-1.mp4";

const Hero = ({ onVideoLoad }) => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu on mobile after navigating
  };

  return (
    <section
      id="hero"
      className="relative w-[90%] mx-auto min-h-screen border-b border-zinc-800 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
      </div>

      {/* Top Label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-10 flex justify-between items-center"
      >
        <p className="text-white text-sm md:text-lg font-light tracking-widest">
          SOFTWARE
        </p>

        <div className="flex items-center gap-2 border border-zinc-700 px-4 py-2 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-zinc-300 text-sm">
            Available for Internship
          </span>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-[16vw]
          sm:text-[15vw]
          leading-none
          font-black
          tracking-tighter
          mt-6
          bg-gradient-to-r
          from-white
          via-zinc-400
          to-white
          text-transparent
          bg-clip-text
        "
      >
        DEVELOPER
      </motion.h1>

      {/* Sub Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col md:flex-row justify-between mt-3 text-zinc-400 text-sm md:text-base"
      >
        <p>Based in Madhya Pradesh, India</p>

        <div className="flex gap-10 mt-2 md:mt-0">
          <p>
            01/<span className="text-zinc-600">05</span>
          </p>
          <p>Scroll to explore ↓</p>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mt-24 pb-24">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:w-[58%]"
        >
          <h2 className="text-3xl md:text-5xl leading-tight text-white">
            Building
            <span className="text-zinc-500 font-light">
              {" "}
              scalable web applications,
            </span>
            <br />
            modern digital experiences,
            <br />
            and products people
            <span className="text-zinc-500 font-light">
              {" "}
              actually use.
            </span>
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="group px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2" onClick={() => scrollToSection("works")}>
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>

            <button className="px-6 py-3 border border-zinc-700 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300" onClick={() => scrollToSection("contacts")}>
              Contact Me
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 flex-wrap">
            <div>
              <h3 className="text-3xl font-bold text-white">3+</h3>
              <p className="text-zinc-500">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">2+</h3>
              <p className="text-zinc-500">Years Learning</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">MERN</h3>
              <p className="text-zinc-500">Primary Stack</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{
            scale: 1.03,
            rotate: 1,
          }}
          className="
            relative
            lg:w-[38%]
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            shadow-2xl
          "
        >
          {/* Badge */}
          {/* <div className="absolute top-4 left-4 z-10 backdrop-blur-md bg-black/40 border border-zinc-700 px-3 py-2 rounded-full">
            <p className="text-xs text-white">
              Featured Project
            </p>
          </div> */}

          <video
            src={video1}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={onVideoLoad}
            className="w-full h-full object-cover"
          />

          {/* Bottom Info */}
          {/* <div className="absolute bottom-4 left-4 backdrop-blur-md bg-black/40 border border-zinc-700 px-4 py-2 rounded-xl">
            <p className="text-sm text-white">
              React • Node • MongoDB • AWS
            </p>
          </div> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-zinc-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;