import { FaCog, FaRobot, FaChartLine, FaUsers } from 'react-icons/fa'

export const timelineData = [
  {
    id: 4,
    period: '2024.01 - 2024.12',
    title: '플랫폼센터 - Account Platform팀',
    company: 'NCSOFT',
    icon: FaUsers,
    color: 'bg-orange-500',
    description: 'NCSOFT 글로벌 통합 계정 플랫폼의 백엔드 시스템을 담당했습니다.',
    details: [
      'NC 보안 서비스 대시보드 지표 설계 및 ETL 시스템 구축',
      '배틀크러쉬 런칭 지원 및 트위치 드랍스 연동',
    ],
    achievements: [
      '30분 당 100만 건 이상의 요청 처리',
      'Airflow 를 통한 ETL 시스템 개발',
    ]
  },
  {
    id: 3,
    period: '2022.11 - 2023.12',
    title: '금융AI실 - 서버팀',
    company: 'NCSOFT',
    icon: FaChartLine,
    color: 'bg-purple-500',
    description: '금융 투자 AI 플랫폼과 프랍 트레이딩 시스템을 개발.',
    details: [
      'WebSocket 기반 실시간 체결 알림 시스템 구축',
      '금융 데이터 플랫폼 개발',
      'Airflow를 활용한 주식 시장별 워크플로우 개발',
    ],
    achievements: [
      'Scale out을 위한 Rabbit MQ Relay 형태 Websocket 시스템 개발',
      '주식 시장 흐름에 따른 워크플로우 개발',
      '데이터 파이프라인 안정성 향상'
    ]
  },
  {
    id: 2,
    period: '2018.01 - 2022.11',
    title: 'AI서비스실 - 서버팀',
    company: 'NCSOFT',
    icon: FaRobot,
    color: 'bg-green-500',
    description: 'PAIGE 프로야구 플랫폼의 핵심 백엔드 시스템을 개발하고 운영.',
    details: [
      'MSA 아키텍처 개발 및 Kubernetes 인프라 구축',
      '실시간 야구 중계 데이터 처리 및 테스팅 시스템 개발',
      '피드, 커뮤니티, 투표, 푸시 알림, 비디오, 퀴즈, 챗봇, 이벤트, 채팅 등 다양한 시스템 개발',
      '개인화 AI 추천 데이터 캐싱 전략 및 성능 최적화',
      'CQRS 패턴 적용으로 AI 연동 최적화',
      'AI 모델 API 포팅 및 CI/CD 배포 자동화 시스템 구축',
      'ELK 스택을 활용한 로그 수집 및 모니터링'
    ],
    achievements: [
      '프로야구 앱스토어 1위 달성'
    ]
  }
]