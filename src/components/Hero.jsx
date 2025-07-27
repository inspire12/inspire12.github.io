import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { personalData } from '../data/personalInfo'

const Hero = () => {
  const [currentHighlight, setCurrentHighlight] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const { name, title, keyPoints, highlights, socialLinks, stats } = personalData

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative py-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Info */}
          <div className="text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <motion.h1 
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
                whileHover={{ scale: 1.02 }}
              >
                {name}
              </motion.h1>
              <motion.h2 
                className="text-xl lg:text-2xl text-blue-600 font-semibold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {title}
              </motion.h2>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {keyPoints[0]}
              </p>
              
              <AnimatePresence mode="wait">
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {keyPoints.slice(1).map((point, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-gray-600 leading-relaxed"
                      >
                        {point}
                      </motion.p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium mt-4"
              >
                <span>{isExpanded ? '간단히 보기' : '더 자세히 보기'}</span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.div>
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 ${link.color} text-white px-4 py-2 rounded-lg transition-colors shadow-lg`}
                  >
                    <IconComponent />
                    <span className="hidden sm:inline">{link.name}</span>
                  </motion.a>
                )
              })}
            </motion.div>
          </div>

          {/* Right Side - Interactive Highlights */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                핵심 경험
              </h3>
              
              <div className="space-y-4">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon
                  return (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-xl cursor-pointer transition-all ${
                      currentHighlight === index
                        ? 'bg-blue-50 border-2 border-blue-200 shadow-md'
                        : 'bg-gray-50 border-2 border-transparent hover:bg-blue-25'
                    }`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    onClick={() => setCurrentHighlight(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`flex-shrink-0 p-2 rounded-lg ${
                          currentHighlight === index
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                        animate={currentHighlight === index ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="text-2xl" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          currentHighlight === index ? 'text-blue-900' : 'text-gray-900'
                        }`}>
                          {highlight.text}
                        </h4>
                        <p className={`text-sm mt-1 ${
                          currentHighlight === index ? 'text-blue-700' : 'text-gray-600'
                        }`}>
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  )
                })}
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {highlights.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentHighlight === index ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setCurrentHighlight(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-200"
            >
              <motion.div
                className={`text-2xl lg:text-3xl font-bold text-${stat.color}-600 mb-2`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero