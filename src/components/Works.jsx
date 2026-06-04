import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkCard from "./WorkCard";
import Bankify from "../assets/Bankify.png";
import GENAI from "../assets/GENAI.png";



const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      name: "Bankify",
      description:"A full-stack banking platform supporting account management, deposits, withdrawals, fund transfers, and transaction tracking. ",
      tech: "ReactJs, NodeJs, MongoDb, ExpressJs",
      image: Bankify,
      web: "https://bank-transaction-system-nu.vercel.app/",
      git: "https://github.com/SUM204IT/Bank-Transaction-system",
      color: ""
    },
    {
      id: 2,
      name: "GENAI",
      description: "An AI-powered interview preparation platform leveraging Google Gemini for personalized interview assistance.",
      tech: "React, Node, MongoDb, Express, GenAi, Gemini API",
      image: GENAI,
      web: "https://genai-interviewhelp.vercel.app/",
      git: "https://github.com/SUM204IT/GENAI-INTERVIEWHELP",
      color: ""
    }
  ];

  return (
    <div id="works" className="min-h-screen bg-black py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-light text-gray-400 mb-4">Selected Works</h2>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Creative Portfolio
            {/* <span className="mt-2">Portfolio</span> */}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            A showcase of innovative projects that demonstrate technical expertise and creative problem-solving
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.slice(0, 3).map((project) => (
            <WorkCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
          >
            <div className="min-h-screen px-4 text-center">
              {/* Modal Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="inline-block w-full max-w-7xl p-6 my-8 text-left align-middle transition-all transform"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-white">All Projects</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(false)}
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {projects.map((project) => (
                    <WorkCard key={project.id} {...project} />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Works;
