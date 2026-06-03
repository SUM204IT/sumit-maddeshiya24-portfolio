import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillSections = [
    {
      title: "SOFTWARE DEVELOPMENT",
      skills: ["ReactJs", "NextJs", "Redux", "React Native", "GSAP", "HTML", "CSS", "JavaScript","Node.js", "Express.js", "MongoDB", "MySQL", "Socket.io","Redis"]
    },
    {
      title: "PROGRAMMING LANGUAGES",
      skills: ["C++", "C", "JavaScript", "TypeScript", "Python"]
    },
    {
      title: "DEVELOPER TOOLS",
      skills: ["GitHub", "VsCode", "Android Studio","Cursor", "Postman", "Claude", "ChatGPT", "GenAI"]
    }
  ];

  return (
    <div id="skills" className="w-[90%] border-b-2 border-gray-200 pb-10">
      {/* Header Section */}
      <div className="cousine w-full flex justify-between items-center text-white text-base sm:text-lg font-thin pt-2">
        <p>Skills</p>
        <p>
          04/<span className="text-gray-400">05</span>
        </p>
      </div>

      {/* Intro Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-end mt-14 sm:mt-28 mb-6 sm:mb-10"
      >
        <h1
          className="text-xl sm:text-5xl w-full sm:w-[70%] text-white"
          style={{
            lineHeight: "1.5em",
          }}
        >
          <span className="text-gray-400">
            My experience and vast range of services <br className="hidden sm:block" /> help
          </span>{" "}
          <br /> solve complex business problems with a <br className="hidden sm:block" /> personalized
          approach to each task.
        </h1>
      </motion.div>

      {/* Skill Sections */}
      {skillSections.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          viewport={{ once: true }}
          className="w-full text-white flex flex-col sm:flex-row justify-center items-center py-20 sm:py-44 border-t-2 border-gray-600 relative group hover:bg-gray-900/10 transition-all duration-300"
        >
          <h1 className="absolute top-2 left-2 text-sm sm:text-lg cousine text-gray-400">
            0{idx + 1}
          </h1>
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-8">
            <h1 className="text-3xl sm:text-7xl kanit-extrabold mb-6 text-white">
              {section.title}
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {section.skills.map((skill, skillIdx) => (
                <motion.span
                  key={skillIdx}
                  whileHover={{ scale: 1.02 }}
                  className="px-4 py-2 border border-gray-600 rounded-sm text-sm sm:text-base text-gray-300 hover:border-gray-400 hover:text-gray-100 transition-all duration-300 text-center"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
