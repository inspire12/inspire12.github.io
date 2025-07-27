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
      { name: 'Java', icon: FaJava, color: 'bg-orange-500' },
      { name: 'Kotlin', icon: SiKotlin, color: 'bg-purple-500' },
      { name: 'Python', icon: FaPython, color: 'bg-green-500' },
    ]
  },
  {
    title: '프레임워크',
    icon: FaCogs,
    color: 'bg-green-500',
    skills: [
      { name: 'Spring Boot', icon: SiSpring, color: 'bg-green-600' },
      { name: 'FastAPI', icon: SiFastapi, color: 'bg-teal-500' },
      { name: 'MSA', icon: FaServer, color: 'bg-blue-600' },
    ]
  },
  {
    title: '데이터베이스',
    icon: FaDatabase,
    color: 'bg-purple-500',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: 'bg-blue-500' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'bg-blue-700' },
      { name: 'Elasticsearch', icon: SiElasticsearch, color: 'bg-yellow-500' },
      { name: 'Redis', icon: SiRedis, color: 'bg-red-500' },
    ]
  },
  {
    title: '인프라 & DevOps',
    icon: FaCloud,
    color: 'bg-orange-500',
    skills: [
      { name: 'Docker', icon: FaDocker, color: 'bg-blue-400' },
      { name: 'Kubernetes', icon: SiKubernetes, color: 'bg-blue-600' },
      { name: 'Kafka', icon: SiApachekafka, color: 'bg-gray-700' },
      { name: 'RabbitMQ', icon: SiRabbitmq, color: 'bg-orange-600' },
      { name: 'Airflow', icon: SiApacheairflow, color: 'bg-blue-300' },
    ]
  },
  {
    title: '프론트엔드',
    icon: FaReact,
    color: 'bg-cyan-500',
    skills: [
      { name: 'React', icon: FaReact, color: 'bg-cyan-500' },
      { name: 'Vue.js', icon: FaVuejs, color: 'bg-green-400' },
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
    title: 'MSA 아키텍처',
    description: '프로야구 시스템에 마이크로서비스 설계부터 운영까지 전체 사이클 경험',
    icon: '🏗️'
  },
  {
    title: '지식 공유 및 기술 전파',
    description: '기술 블로그 작성과 새로운 기술 습득을 통한 팀 성장 및 지식 공유',
    icon: '⚡'
  },
  {
    title: '실시간 데이터 처리',
    description: '유저 보안 데이터 Kafka Airflow 기반 ETL 수집 및 대시보드 구축',
    icon: '📊'
  },

  {
    title: '성능 최적화',
    description: 'AI 연동을 위한 CQRS, 캐싱 전략을 통한 시스템 성능 개선',
    icon: '🚀'
  },
  {
    title: '금융 시스템',
    description: 'Prop Trading과 실시간 알림 시스템 개발',
    icon: '💰'
  }
]