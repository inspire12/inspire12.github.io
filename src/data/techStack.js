import { 
  FaJava, 
  FaPython, 
  FaReact, 
  FaVuejs, 
  FaDocker, 
  FaDatabase,
  FaServer,
  FaCloud,
  FaCogs
} from 'react-icons/fa'
import { 
  SiSpring, 
  SiKotlin, 
  SiMysql, 
  SiElasticsearch, 
  SiKubernetes, 
  SiApachekafka, 
  SiRedis, 
  SiFastapi, 
  SiApacheairflow,
  SiRabbitmq,
  SiPostgresql
} from 'react-icons/si'

export const techCategories = [
  {
    title: '백엔드 언어',
    icon: FaServer,
    color: 'bg-blue-500',
    skills: [
      { name: 'Java', icon: FaJava, level: 95, color: 'bg-orange-500' },
      { name: 'Kotlin', icon: SiKotlin, level: 85, color: 'bg-purple-500' },
      { name: 'Python', icon: FaPython, level: 90, color: 'bg-green-500' },
    ]
  },
  {
    title: '프레임워크',
    icon: FaCogs,
    color: 'bg-green-500',
    skills: [
      { name: 'Spring Boot', icon: SiSpring, level: 95, color: 'bg-green-600' },
      { name: 'FastAPI', icon: SiFastapi, level: 85, color: 'bg-teal-500' },
      { name: 'MSA', icon: FaServer, level: 90, color: 'bg-blue-600' },
    ]
  },
  {
    title: '데이터베이스',
    icon: FaDatabase,
    color: 'bg-purple-500',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 90, color: 'bg-blue-500' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 85, color: 'bg-blue-700' },
      { name: 'Elasticsearch', icon: SiElasticsearch, level: 80, color: 'bg-yellow-500' },
      { name: 'Redis', icon: SiRedis, level: 85, color: 'bg-red-500' },
    ]
  },
  {
    title: '인프라 & DevOps',
    icon: FaCloud,
    color: 'bg-orange-500',
    skills: [
      { name: 'Docker', icon: FaDocker, level: 90, color: 'bg-blue-400' },
      { name: 'Kubernetes', icon: SiKubernetes, level: 85, color: 'bg-blue-600' },
      { name: 'Kafka', icon: SiApachekafka, level: 80, color: 'bg-gray-700' },
      { name: 'RabbitMQ', icon: SiRabbitmq, level: 75, color: 'bg-orange-600' },
      { name: 'Airflow', icon: SiApacheairflow, level: 75, color: 'bg-blue-300' },
    ]
  },
  {
    title: '프론트엔드',
    icon: FaReact,
    color: 'bg-cyan-500',
    skills: [
      { name: 'React', icon: FaReact, level: 75, color: 'bg-cyan-500' },
      { name: 'Vue.js', icon: FaVuejs, level: 70, color: 'bg-green-400' },
    ]
  }
]

export const coreExperiences = [
  {
    title: 'AI 서비스 개발',
    description: 'GPT 이전부터 자체 AI 기술을 실제 서비스에 적용',
    icon: '🤖'
  },
  {
    title: '대용량 트래픽 처리',
    description: '일 평균 100만 요청을 처리하는 시스템 설계 및 운영',
    icon: '⚡'
  },
  {
    title: '실시간 데이터 처리',
    description: 'Kafka 기반 실시간 스트리밍 및 중계 데이터 처리',
    icon: '📊'
  },
  {
    title: 'MSA 아키텍처',
    description: '마이크로서비스 설계부터 운영까지 전체 사이클 경험',
    icon: '🏗️'
  },
  {
    title: '성능 최적화',
    description: 'CQRS, 캐싱 전략을 통한 시스템 성능 개선',
    icon: '🚀'
  },
  {
    title: '금융 시스템',
    description: '고빈도 거래 및 실시간 알림 시스템 개발',
    icon: '💰'
  }
]