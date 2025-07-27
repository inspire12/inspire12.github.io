export const projects = [
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