import React from 'react'
import { motion } from 'framer-motion'
import { techCategories, coreExperiences } from '../data/techStack'

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12 text-gray-900"
      >
        기술 스택
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {techCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon
          return (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className={`${category.color} p-3 rounded-lg text-white mr-4`}>
                  <IconComponent className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIconComponent = skill.icon
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`${skill.color} p-2 rounded-lg text-white`}>
                          <SkillIconComponent className="text-lg" />
                        </div>
                        <span className="font-medium text-gray-900">{skill.name}</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8"
      >
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
          핵심 경험 영역
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{experience.icon}</div>
              <h4 className="font-bold text-gray-900 mb-2">{experience.title}</h4>
              <p className="text-sm text-gray-600">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default TechStack