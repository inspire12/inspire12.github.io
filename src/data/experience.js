import { FaCog, FaRobot, FaChartLine, FaUsers } from 'react-icons/fa'

export const timelineData = [
  {
    id: 4,
    period: '2024.01 - 2024.12',
    title: '플랫폼센터 - Account Platform팀',
    company: 'NCSOFT',
    icon: FaUsers,
    color: 'bg-orange-500',
    description: 'NCSOFT 통합 계정 플랫폼의 백엔드 시스템을 담당했습니다.',
    details: [
      '통합 인증/인가 시스템 설계 및 개발',
      'OAuth 2.0 / JWT 기반 보안 시스템 구현',
      'Multi-tenancy 아키텍처 설계',
      'ElasticSearch를 활용한 사용자 검색 시스템',
      '대용량 사용자 데이터 처리 최적화',
      'Spring Security 커스터마이징',
      'MySQL 샤딩 전략 수립 및 구현'
    ],
    achievements: [
      '동시 접속 사용자 100만명 지원',
      '인증 처리 시간 200ms 이하',
      '보안 취약점 0건 달성'
    ]
  },
  {
    id: 3,
    period: '2023.01 - 2024.01',
    title: '금융AI실 - 서버팀',
    company: 'NCSOFT',
    icon: FaChartLine,
    color: 'bg-purple-500',
    description: '금융 투자 AI 플랫폼과 프랍 트레이딩 시스템을 개발했습니다.',
    details: [
      'WebSocket 기반 실시간 알림 시스템 구축',
      '고빈도 거래를 위한 저지연 시스템 설계',
      'Spring Boot 기반 마이크로서비스 개발',
      'PostgreSQL 성능 튜닝 및 최적화',
      'FastAPI를 활용한 AI 모델 서빙',
      'RabbitMQ 메시지 큐 시스템 구축',
      'Airflow를 활용한 데이터 파이프라인 자동화'
    ],
    achievements: [
      '거래 처리 지연시간 10ms 이하 달성',
      '실시간 알림 전송률 99.8%',
      '데이터 파이프라인 안정성 향상'
    ]
  },
  {
    id: 2,
    period: '2019.01 - 2023.01',
    title: 'AI서비스실 - 서버팀',
    company: 'NCSOFT',
    icon: FaRobot,
    color: 'bg-green-500',
    description: 'PAIGE 프로야구 플랫폼의 핵심 백엔드 시스템을 개발하고 운영했습니다.',
    details: [
      'MSA 아키텍처 설계 및 구현',
      'Kubernetes 기반 인프라 구축',
      'Apache Kafka를 활용한 실시간 데이터 처리',
      'Redis 캐싱 전략 및 성능 최적화',
      'AI 모델 배포 자동화 시스템 구축',
      'CQRS 패턴 적용으로 읽기/쓰기 성능 최적화',
      '실시간 야구 중계 데이터 처리 시스템 개발',
      'ELK 스택을 활용한 로그 수집 및 모니터링'
    ],
    achievements: [
      '일 평균 100만 요청 처리',
      'API 응답 시간 50% 개선',
      '시스템 가용성 99.95% 달성',
      '팀 내 기술 문서화 100% 달성'
    ]
  },
  {
    id: 1,
    period: '2018.01 - 2019.01',
    title: 'NLP센터 - 플랫폼팀',
    company: 'NCSOFT',
    icon: FaCog,
    color: 'bg-blue-500',
    description: '자연어 처리 기술의 플랫폼화를 담당하며 초기 AI 서비스 기반을 구축했습니다.',
    details: [
      'AI 모델 서빙을 위한 플랫폼 아키텍처 설계',
      'RESTful API 개발 및 문서화',
      'Docker 기반 컨테이너화 작업',
      'CI/CD 파이프라인 구축'
    ],
    achievements: [
      '플랫폼 안정성 99.9% 달성',
      '개발 생산성 30% 향상'
    ]
  }
]