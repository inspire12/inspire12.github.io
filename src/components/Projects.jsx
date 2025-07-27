import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaUsers, FaChartLine } from 'react-icons/fa'
import { projects } from '../data/projects'

const Projects = () => {
  const projectsData = [
    {
      title: 'NCSOFT 통합 계정 플랫폼',
      period: '2024',
      description: 'NCSOFT의 모든 게임과 서비스에서 사용되는 통합 계정 관리 및 인증 플랫폼',
      image: '🔐',
      technologies: ['Java', 'Spring Security', 'OAuth 2.0', 'JWT', 'MySQL', 'ElasticSearch'],
      achievements: [
        '동시 접속 사용자 100만명 지원',
        'OAuth 2.0 / JWT 기반 인증 시스템',
        'Multi-tenancy 아키텍처 구현',
        '보안 취약점 0건 달성'
      ],
      role: '통합 인증/인가 시스템 설계 및 개발',
      teamSize: 12
    },
    {
      title: '금융 투자 AI 플랫폼',
      period: '2023 - 2024',
      description: '금융 데이터 분석 및 투자 의사결정을 지원하는 AI 기반 플랫폼과 프랍 트레이딩 시스템',
      image: '📈',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'WebSocket', 'RabbitMQ', 'Airflow'],
      achievements: [
        '거래 처리 지연시간 10ms 이하 달성',
        'WebSocket 기반 실시간 알림 시스템',
        '고빈도 거래 시스템 구축',
        '데이터 파이프라인 자동화'
      ],
      role: '실시간 거래 시스템 및 알림 서비스 개발',
      teamSize: 8
    },
    {
      title: 'PAIGE - 프로야구 종합 플랫폼',
      period: '2019 - 2023',
      description: 'AI를 접목한 프로야구 종합 플랫폼으로 실시간 중계, 분석, 예측 서비스를 제공하는 대규모 서비스',
      image: '🏟️',
      technologies: ['Java', 'Spring Boot', 'Kubernetes', 'Kafka', 'Redis', 'MySQL', 'ElasticSearch'],
      achievements: [
        '일 평균 100만 요청 처리',
        'MSA 아키텍처로 서비스 분리',
        '실시간 야구 데이터 처리 시스템 구축',
        'AI 모델 서빙 플랫폼 개발'
      ],
      role: '백엔드 서버 개발 및 시스템 아키텍처 설계',
      teamSize: 15
    },
    {
      title: 'AI 모델 서빙 플랫폼',
      period: '2018 - 2019',
      description: 'NLP 센터의 AI 모델을 서비스화하기 위한 플랫폼으로 모델 배포, 버전 관리, 모니터링 기능 제공',
      image: '🤖',
      technologies: ['Python', 'Docker', 'Kubernetes', 'FastAPI', 'Redis', 'PostgreSQL'],
      achievements: [
        'AI 모델 배포 자동화',
        '플랫폼 안정성 99.9% 달성',
        'A/B 테스트 지원 시스템',
        'GPU 리소스 최적화'
      ],
      role: '플랫폼 아키텍처 설계 및 개발',
      teamSize: 6
    }
  ]

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

  return (
    <div className="space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12 text-gray-900"
      >
        주요 프로젝트
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{project.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-gray-500">{project.period}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <FaUsers />
                    <span>{project.teamSize}명</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">담당 역할</h4>
                <p className="text-gray-600">{project.role}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">주요 성과</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <FaChartLine className="text-green-500 text-sm" />
                      <span className="text-sm text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">기술 스택</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span>상세보기</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-4 text-gray-900">기술 블로그 & 문서화</h3>
        <p className="text-gray-600 mb-6">
          프로젝트 경험을 바탕으로 기술 블로그를 운영하며, 팀 내 기술 문서화를 통해<br />
          지식 공유와 개발 문화 개선에 기여하고 있습니다.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            기술 블로그 보기
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            발표 자료 보기
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Projects