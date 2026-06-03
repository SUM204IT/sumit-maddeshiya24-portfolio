import React from "react";
import { motion } from "framer-motion";
import video1 from "../assets/video-1.mp4";

const Hero = ({ onVideoLoad }) => {
  return (
    <div
      id="hero"
      className="w-[90%] pt-8 sm:pt-14 pb-16 sm:pb-32 border-b-2 border-gray-200 mx-auto"
    >
      {/* Section 1: Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <p className="text-white text-base sm:text-lg font-thin pl-2">SOFTWARE</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-white kanit-extrabold leading-[12vw] sm:leading-[11vw] text-[16vw] sm:text-[16.5vw]">
          DEVELOPER
        </h1>
      </motion.div>

      {/* Section 2: Subtext */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 sm:pt-4 cousine"
      >
        <p className="text-white text-base sm:text-lg font-thin pl-2 text-center sm:text-left">
          Based in Madhya Pradesh, India
        </p>
        <div className="flex sm:hidden justify-between w-full mt-2">
          <p className="text-white text-base font-thin text-center">
            01/<span className="text-gray-400">05</span>
          </p>
          <p className="text-white text-base font-thin text-center">
            Scroll to explore
          </p>
        </div>
        <p className="hidden sm:block text-white text-lg font-thin text-center sm:text-left">
          01/<span className="text-gray-400">05</span>
        </p>
        <p className="hidden sm:block text-white text-lg font-thin text-center sm:text-left">
          Scroll to explore
        </p>
      </motion.div>

      {/* Section 3: Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col-reverse lg:flex-row justify-between pt-12 sm:pt-20 items-center gap-8 sm:gap-10"
      >
        {/* Text Section */}
        <div className="w-full lg:w-[60%] text-center lg:text-left">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed">
            <span className="text-gray-400 font-thin">
              Bringing together strategy, creativity{" "}
              <br className="hidden lg:block" />
              and technology to
            </span>{" "}
            build digital products, websites, and apps that{" "}
            <br className="hidden lg:block" />
            make sense to businesses and people.
          </h1>
        </div>

        {/* Video Section */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-full lg:w-[35%] flex justify-center"
        >
          <video
            src={video1}
            className="w-full h-full object-cover rounded-lg shadow-2xl"
            autoPlay
            muted
            loop
            onLoadedData={onVideoLoad}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
