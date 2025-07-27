import React from 'react'
import { motion } from 'framer-motion'
import { FaBlog, FaExternalLinkAlt, FaCalendar, FaEye, FaHeart } from 'react-icons/fa'
import { articles, blogStats } from '../data/articles'

const Articles = () => {
  const articlesData = []

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
        기술 블로그 & 아티클
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">기술 블로그 운영</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            개발하면서 겪은 문제들과 해결 과정, 학습한 내용들을 정리하여 공유하고 있습니다. 
            특히 대규모 서비스 개발 경험과 시스템 아키텍처 설계에 대한 실무 중심의 글을 작성합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {articlesData.map((article, index) => (
          <motion.article
            key={index}
            variants={itemVariants}
            className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow ${
              article.featured ? 'ring-2 ring-blue-200 bg-gradient-to-r from-blue-50 to-white' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  {article.featured && (
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs mr-2">
                      추천
                    </span>
                  )}
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.summary}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center space-x-1">
                    <FaCalendar />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaEye />
                    <span>{article.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaHeart />
                    <span>{article.likes}</span>
                  </div>
                  <span>읽기 {article.readTime}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaExternalLinkAlt />
                <span>아티클 읽기</span>
              </motion.button>
              
              <div className="flex items-center space-x-2 text-gray-500">
                <FaBlog />
                <span className="text-sm">기술 블로그</span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">더 많은 글 보기</h3>
        <p className="text-gray-600 mb-6">
          개발 관련 더 많은 아티클과 기술 인사이트를 블로그에서 확인하세요.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="https://inspire12.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaBlog />
            <span>기술 블로그 방문</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}

export default Articles