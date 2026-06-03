import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile2.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-[90%] pb-16 sm:pb-32 border-b-2 border-gray-200 mx-auto"
    >
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="cousine w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-white text-base sm:text-lg font-thin pt-2"
      >
        <p>About</p>
        <p className="sm:mt-0 mt-2">
          02/<span className="text-gray-400">05</span>
        </p>
      </motion.div>

      {/* Main Content Section */}
      <div className="w-full pt-8 sm:pt-14">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-[45%] relative"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 border-2 border-gray-600 rounded-lg transform rotate-12" />
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 border-2 border-gray-600 rounded-lg transform -rotate-12" />
              
              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square max-w-[280px] sm:max-w-md mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl transform -rotate-3" />
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full lg:w-[55%]"
          >
            {/* Title */}
            <h1 className="text-white text-[10vw] sm:text-[8vw] lg:text-[6vw] kanit-extrabold text-center lg:text-left mb-6 sm:mb-8">
              ABOUT ME
            </h1>

            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed">
                I'm a dedicated software developer with a strong foundation in
                full-stack web development. With expertise in technologies like React,
                Node.js, MongoDB, and Express, I specialize in building dynamic and
                responsive web applications.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed">
                I am driven by a passion for problem-solving, constantly exploring new tools 
                and technologies to enhance my skills and create innovative digital solutions.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed">
                Whether it's designing intuitive user interfaces or optimizing backend
                performance, I thrive on delivering high-quality, scalable projects
                that meet both business needs and user expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
