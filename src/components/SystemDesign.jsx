import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { architectures, designPrinciples } from '../data/systemDesign'
import MermaidDiagram from './MermaidDiagram'

const SystemDesign = () => {
  const [activeView, setActiveView] = useState({}) // architecture id를 키로 하는 객체

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const toggleView = (archId, view) => {
    setActiveView(prev => ({
      ...prev,
      [archId]: view
    }))
  }

  return (
    <div className="space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12 text-gray-900"
      >
        시스템 아키텍처 & 설계
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {architectures.map((arch, index) => {
          const currentView = activeView[index] || 'components'
          
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="text-4xl mr-4">{arch.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{arch.title}</h3>
                    <p className="text-gray-600">{arch.description}</p>
                  </div>
                </div>
                
                {/* View Toggle Buttons */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => toggleView(index, 'components')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      currentView === 'components'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    구성요소
                  </button>
                  <button
                    onClick={() => toggleView(index, 'diagram')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      currentView === 'diagram'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    다이어그램
                  </button>
                </div>
              </div>

              {currentView === 'components' ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">시스템 구성요소</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {arch.components.map((component, idx) => {
                        const IconComponent = component.icon
                        return (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="text-blue-600 mr-3">
                              <IconComponent />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{component.name}</div>
                              <div className="text-sm text-gray-600">{component.tech}</div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">주요 특징</h4>
                    <div className="space-y-3">
                      {arch.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">시스템 아키텍처 다이어그램</h4>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <MermaidDiagram 
                      chart={arch.diagram} 
                      id={`arch-${index}`}
                      className="min-h-[400px]"
                    />
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    💡 <strong>팁:</strong> 각 노드와 연결선은 실제 시스템의 데이터 흐름을 나타냅니다.
                  </div>
                </div>
              )}
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8"
      >
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
          아키텍처 설계 원칙
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{principle.icon}</div>
              <h4 className="font-bold text-gray-900 mb-2">{principle.title}</h4>
              <p className="text-sm text-gray-600">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  )
}

export default SystemDesign