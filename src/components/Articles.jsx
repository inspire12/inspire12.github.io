import React from 'react'
import { motion } from 'framer-motion'
import { FaBlog, FaExternalLinkAlt, FaCalendar, FaEye, FaHeart } from 'react-icons/fa'
import { articles, blogStats } from '../data/articles'

const Articles = () => {
  const articlesData = [
    {
      title: 'MSA 환경에서의 분산 트랜잭션 패턴: Saga Pattern 적용기',
      summary: 'PAIGE 프로젝트에서 복잡한 비즈니스 로직을 처리하기 위해 Saga Pattern을 도입한 경험과 학습 내용을 공유합니다.',
      date: '2023-11-15',
      category: '시스템 아키텍처',
      readTime: '8분',
      views: 2450,
      likes: 89,
      tags: ['MSA', 'Saga Pattern', '분산시스템', 'Spring Boot'],
      featured: true
    },
    {
      title: 'Kafka를 활용한 실시간 데이터 스트리밍 구축하기',
      summary: '대용량 실시간 야구 데이터를 처리하기 위한 Kafka 기반 스트리밍 아키텍처 설계와 성능 최적화 경험을 다룹니다.',
      date: '2023-09-22',
      category: '데이터 처리',
      readTime: '12분',
      views: 3200,
      likes: 156,
      tags: ['Apache Kafka', '실시간 처리', '스트리밍', '성능 최적화'],
      featured: true
    },
    {
      title: 'Redis 캐싱 전략으로 API 응답 시간 50% 개선하기',
      summary: 'Write-Through, Write-Behind 등 다양한 캐싱 전략을 적용하여 대용량 트래픽 환경에서 성능을 획기적으로 향상시킨 방법을 소개합니다.',
      date: '2023-07-10',
      category: '성능 최적화',
      readTime: '10분',
      views: 4100,
      likes: 203,
      tags: ['Redis', '캐싱', '성능 최적화', 'Spring Boot'],
      featured: false
    },
    {
      title: 'Kubernetes 환경에서의 무중단 배포 전략',
      summary: 'Rolling Update, Blue-Green, Canary 배포 전략을 실제 운영 환경에 적용하며 얻은 인사이트와 모범 사례를 공유합니다.',
      date: '2023-05-18',
      category: 'DevOps',
      readTime: '15분',
      views: 2890,
      likes: 124,
      tags: ['Kubernetes', '무중단 배포', 'DevOps', 'CI/CD'],
      featured: false
    },
    {
      title: 'WebSocket을 활용한 실시간 알림 시스템 구축',
      summary: '금융 트레이딩 시스템에서 저지연 실시간 알림을 구현하기 위한 WebSocket 기반 아키텍처와 최적화 기법을 다룹니다.',
      date: '2024-02-14',
      category: '실시간 시스템',
      readTime: '11분',
      views: 1850,
      likes: 78,
      tags: ['WebSocket', '실시간', '알림시스템', 'Spring Boot'],
      featured: false
    },
    {
      title: 'ElasticSearch 검색 성능 튜닝: 인덱싱부터 쿼리 최적화까지',
      summary: '대용량 사용자 데이터에서 빠른 검색을 위한 ElasticSearch 설정, 인덱싱 전략, 쿼리 최적화 방법을 상세히 설명합니다.',
      date: '2024-01-20',
      category: '검색 엔진',
      readTime: '13분',
      views: 2650,
      likes: 142,
      tags: ['ElasticSearch', '검색', '성능 튜닝', '인덱싱'],
      featured: false
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
          <div className="bg-white rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
            <p className="text-gray-600">작성한 아티클</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">18K</div>
            <p className="text-gray-600">총 조회수</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">792</div>
            <p className="text-gray-600">받은 좋아요</p>
          </div>
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
            href="https://your-tech-blog.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaBlog />
            <span>기술 블로그 방문</span>
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors"
          >
            <span>RSS 구독</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Articles