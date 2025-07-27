import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaBlog, FaMapMarkerAlt } from 'react-icons/fa'
import { collaborationAreas } from '../data/contact'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'seoyh@ncsoft.com',
      link: 'mailto:seoyh@ncsoft.com',
      color: 'bg-red-500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+82-10-XXXX-XXXX',
      link: 'tel:+82-10-XXXX-XXXX',
      color: 'bg-green-500'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/younghak-seo',
      link: 'https://linkedin.com/in/younghak-seo',
      color: 'bg-blue-600'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/younghak-seo',
      link: 'https://github.com/younghak-seo',
      color: 'bg-gray-800'
    },
    {
      icon: FaBlog,
      label: 'Tech Blog',
      value: 'younghak-dev.blog',
      link: 'https://younghak-dev.blog',
      color: 'bg-purple-600'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: '대한민국, 서울',
      link: null,
      color: 'bg-orange-500'
    }
  ]

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
        연락처
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {contactInfo.map((contact, index) => {
          const IconComponent = contact.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                <div className={`${contact.color} p-3 rounded-lg text-white mr-4`}>
                  <IconComponent className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{contact.label}</h3>
                </div>
              </div>
              
              {contact.link ? (
                <motion.a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="text-blue-600 hover:text-blue-800 break-all"
                >
                  {contact.value}
                </motion.a>
              ) : (
                <span className="text-gray-600">{contact.value}</span>
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
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">함께 일하고 싶으시다면</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            새로운 도전과 혁신적인 프로젝트에 관심이 있습니다. 
            백엔드 개발, 시스템 아키텍처, AI 서비스 개발 등 다양한 주제로 대화하며 
            서로 성장할 수 있는 기회를 만들어가고 싶습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
          { icon: '🚀', title: '백엔드 개발', description: 'Spring Boot, Node.js\n대규모 시스템 아키텍처' },
          { icon: '🤖', title: 'AI/ML 서비스', description: '모델 서빙 플랫폼\nMLOps 시스템 구축' },
          { icon: '⚡', title: '성능 최적화', description: '시스템 성능 튜닝\n대용량 트래픽 처리' }
        ].map((area, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{area.icon}</div>
              <h4 className="font-semibold text-gray-900 mb-2">{area.title}</h4>
              <p className="text-sm text-gray-600 whitespace-pre-line">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <motion.a
            href="mailto:seoyh@ncsoft.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            <FaEnvelope />
            <span>이메일로 연락하기</span>
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-gray-500 text-sm mt-8"
      >
        <p>© 2024 서영학. 모든 권리 보유.</p>
        <p className="mt-2">이 포트폴리오는 React + Vite + Tailwind CSS + Framer Motion으로 제작되었습니다.</p>
      </motion.div>
    </div>
  )
}

export default Contact