import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { timelineData } from '../data/experience'

const Timeline = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <div className="relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12 text-gray-900"
      >
        경력 타임라인
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gray-300"></div>

        {timelineData.map((item, index) => {
          const IconComponent = item.icon
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Timeline node */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white z-10 shadow-lg`}>
                <IconComponent className="text-2xl" />
              </div>

              {/* Content */}
              <motion.div
                className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{item.company}</p>
                    <p className="text-sm text-gray-500">{item.period}</p>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{item.description}</p>

                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t pt-4 mt-4">
                          <h4 className="font-semibold text-gray-900 mb-2">주요 업무</h4>
                          <ul className="text-sm text-gray-600 mb-4">
                            {item.details.map((detail, idx) => (
                              <li key={idx} className="mb-1">• {detail}</li>
                            ))}
                          </ul>

                          <h4 className="font-semibold text-gray-900 mb-2">주요 성과</h4>
                          <ul className="text-sm text-green-600">
                            {item.achievements.map((achievement, idx) => (
                              <li key={idx} className="mb-1">✓ {achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Timeline