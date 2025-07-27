import { FaServer, FaDatabase, FaCloud, FaNetworkWired, FaCogs, FaShieldAlt } from 'react-icons/fa'

export const architectures = [
  {
    title: 'PAIGE 프로야구 플랫폼 아키텍처',
    description: 'MSA 기반 대규모 실시간 서비스 아키텍처',
    image: '🏗️',
    diagram: `
      graph TD
        A[Client App] --> B[API Gateway]
        B --> C[User Service]
        B --> D[Game Service] 
        B --> E[AI Service]
        B --> F[Notification Service]
        
        C --> G[(MySQL Cluster)]
        D --> G
        E --> H[(Redis Cluster)]
        F --> I[WebSocket]
        
        D --> J[Apache Kafka]
        E --> J
        F --> J
        
        subgraph "Kubernetes Cluster"
          C
          D
          E
          F
        end
        
        J --> K[Data Processing]
        K --> L[AI Research Team]
        
        style A fill:#e1f5fe
        style B fill:#f3e5f5
        style G fill:#fff3e0
        style H fill:#ffebee
        style J fill:#e8f5e8
    `,
    components: [
      { name: 'API Gateway', tech: 'Spring Cloud Gateway', icon: FaNetworkWired },
      { name: 'User Service', tech: 'Spring Boot', icon: FaServer },
      { name: 'Game Service', tech: 'Spring Boot', icon: FaServer },
      { name: 'AI Service', tech: 'FastAPI', icon: FaCogs },
      { name: 'Notification', tech: 'WebSocket', icon: FaNetworkWired },
      { name: 'Database', tech: 'MySQL Cluster', icon: FaDatabase },
      { name: 'Cache', tech: 'Redis Cluster', icon: FaDatabase },
      { name: 'Message Queue', tech: 'Apache Kafka', icon: FaNetworkWired },
      { name: 'Container', tech: 'Kubernetes', icon: FaCloud }
    ],
    features: [
      '일 평균 100만 요청 처리',
      '실시간 데이터 스트리밍',
      'Auto Scaling 지원',
      '99.95% 가용성 달성'
    ]
  },
  {
    title: '금융 트레이딩 시스템 아키텍처',
    description: '저지연 고빈도 거래를 위한 실시간 시스템',
    image: '💰',
    diagram: `
      graph LR
        A[Market Data Feed] --> B[Trading Engine]
        B --> C[Order Management]
        C --> D[Risk Management]
        
        B --> E[PostgreSQL]
        C --> E
        
        B --> F[RabbitMQ]
        F --> G[Notification Service]
        G --> H[WebSocket]
        H --> I[Client Dashboard]
        
        D --> J[Risk Alerts]
        
        K[Airflow] --> L[Data Pipeline]
        L --> M[Analytics DB]
        
        style A fill:#ffebee
        style B fill:#e8f5e8
        style D fill:#fff3e0
        style F fill:#f3e5f5
        style H fill:#e1f5fe
    `,
    components: [
      { name: 'Trading Engine', tech: 'Spring Boot', icon: FaServer },
      { name: 'Order Management', tech: 'Spring Boot', icon: FaServer },
      { name: 'Risk Management', tech: 'Python', icon: FaShieldAlt },
      { name: 'Market Data', tech: 'WebSocket', icon: FaNetworkWired },
      { name: 'Notification', tech: 'WebSocket', icon: FaNetworkWired },
      { name: 'Database', tech: 'PostgreSQL', icon: FaDatabase },
      { name: 'Message Queue', tech: 'RabbitMQ', icon: FaNetworkWired },
      { name: 'Data Pipeline', tech: 'Apache Airflow', icon: FaCogs }
    ],
    features: [
      '거래 처리 지연시간 10ms 이하',
      '실시간 리스크 관리',
      '고가용성 설계',
      '실시간 알림 시스템'
    ]
  },
  {
    title: '통합 계정 플랫폼 아키텍처',
    description: 'Multi-tenancy 기반 대규모 사용자 인증 시스템',
    image: '🔐',
    diagram: `
      graph TB
        A[Load Balancer - NGINX] --> B[API Gateway]
        
        B --> C[Auth Service]
        B --> D[User Service]
        
        C --> E[Spring Security]
        C --> F[(Redis Session)]
        
        D --> G[(MySQL Sharding)]
        D --> H[ElasticSearch]
        
        subgraph "Multi-tenant Architecture"
          I[Tenant A]
          J[Tenant B] 
          K[Tenant C]
        end
        
        C --> I
        C --> J
        C --> K
        
        L[OAuth 2.0] --> C
        M[JWT Token] --> C
        
        style A fill:#f3e5f5
        style C fill:#e8f5e8
        style F fill:#ffebee
        style G fill:#fff3e0
        style H fill:#e1f5fe
    `,
    components: [
      { name: 'Auth Service', tech: 'Spring Security', icon: FaShieldAlt },
      { name: 'User Service', tech: 'Spring Boot', icon: FaServer },
      { name: 'Session Manager', tech: 'Redis', icon: FaDatabase },
      { name: 'API Gateway', tech: 'Spring Cloud Gateway', icon: FaNetworkWired },
      { name: 'Search Engine', tech: 'ElasticSearch', icon: FaDatabase },
      { name: 'Database', tech: 'MySQL Sharding', icon: FaDatabase },
      { name: 'Load Balancer', tech: 'NGINX', icon: FaNetworkWired }
    ],
    features: [
      '동시 접속 100만명 지원',
      'OAuth 2.0 / JWT 인증',
      'Multi-tenancy 지원',
      '보안 취약점 0건'
    ]
  }
]

export const designPrinciples = [
  {
    title: '확장성',
    description: '대용량 트래픽과 데이터를 처리할 수 있는 확장 가능한 아키텍처',
    icon: '📈'
  },
  {
    title: '가용성',
    description: '99.9% 이상의 서비스 가용성을 보장하는 고가용성 설계',
    icon: '🛡️'
  },
  {
    title: '성능',
    description: '저지연, 고처리량을 위한 성능 최적화된 시스템 설계',
    icon: '⚡'
  },
  {
    title: '보안',
    description: '다층 보안 구조와 인증/인가 시스템을 통한 보안 강화',
    icon: '🔒'
  },
  {
    title: '모니터링',
    description: '실시간 모니터링과 알림 시스템을 통한 운영 효율성 확보',
    icon: '📊'
  },
  {
    title: '유지보수성',
    description: '모듈화된 설계와 문서화를 통한 유지보수성 향상',
    icon: '🔧'
  }
]