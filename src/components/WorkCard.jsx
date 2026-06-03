import React from "react";
import { motion } from "framer-motion";

const WorkCard = ({ name, description, tech, image, web, git, color }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-lg bg-gray-900"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.split(", ").map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={web}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm transition-colors duration-300"
          >
            Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-gray-600 hover:border-gray-400 px-4 py-2 rounded-full text-sm transition-colors duration-300"
          >
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;

