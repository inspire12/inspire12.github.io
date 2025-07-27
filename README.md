# 서영학 - 백엔드 개발자 포트폴리오

[![Deploy to GitHub Pages](https://github.com/inspire12/inspire12.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/inspire12/inspire12.github.io/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-inspire12.github.io-blue)](https://inspire12.github.io)

NCSOFT에서 대용량 트래픽을 처리하는 백엔드 시스템을 개발하는 서버 개발자의 포트폴리오 웹사이트입니다.

## ✨ 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 환경에서 최적화된 UI
- **모던 기술 스택**: React 18 + Vite + Tailwind CSS + Framer Motion
- **인터랙티브 애니메이션**: 부드러운 스크롤 애니메이션과 마이크로 인터랙션
- **성능 최적화**: Vite의 빠른 빌드와 코드 스플리팅으로 최적화된 성능
- **GitHub Pages 배포**: 자동화된 CI/CD 파이프라인

## 🚀 주요 섹션

### 1. 소개 (Hero)
- 핵심 포인트와 전문 분야 소개
- 연락처 정보와 소셜 링크

### 2. 기술 스택 (Tech Stack)
- **백엔드**: Java, Kotlin, Python, Spring Boot, FastAPI
- **데이터베이스**: MySQL, PostgreSQL, Redis, Elasticsearch
- **인프라**: Docker, Kubernetes, Kafka, RabbitMQ, Airflow
- **프론트엔드**: React, Vue.js

### 3. 주요 프로젝트 (Projects)
- **NCSOFT 통합 계정 플랫폼**: 100만 동시 접속 사용자 지원
- **금융 투자 AI 플랫폼**: 10ms 이하 거래 처리 지연시간 달성
- **PAIGE 프로야구 플랫폼**: 일 평균 100만 요청 처리
- **AI 모델 서빙 플랫폼**: 99.9% 플랫폼 안정성 달성

### 4. 경력 (Experience)
- NCSOFT 플랫폼센터 - Account Platform팀 (2024.01 - 2024.12)
- NCSOFT 금융AI실 - 서버팀 (2023.01 - 2024.01)
- NCSOFT PAIGE팀 (2019 - 2023)

### 5. 기술 블로그 & 아티클 (Articles)
- MSA, Kafka, Redis, Kubernetes 등 실무 경험 공유
- 시스템 아키텍처 설계 및 성능 최적화 경험

### 6. 연락처 (Contact)
- 이메일, LinkedIn, GitHub 등 연락 정보
- 협업 관심 분야 소개

## 🛠️ 기술 스택

### Frontend
- **React 18**: 최신 React 훅과 컴포넌트 사용
- **Vite**: 빠른 개발 서버와 번들링
- **Tailwind CSS**: 유틸리티 퍼스트 CSS 프레임워크
- **Framer Motion**: 부드러운 애니메이션과 트랜지션
- **React Icons**: 다양한 아이콘 라이브러리

### Development Tools
- **ESLint**: 코드 품질 관리
- **PostCSS**: CSS 처리 및 최적화
- **Autoprefixer**: 브라우저 호환성 자동 처리

### Deployment
- **GitHub Pages**: 정적 사이트 호스팅
- **gh-pages**: 자동화된 배포 도구

## 📦 설치 및 실행

### 요구사항
- Node.js 16.0.0 이상
- npm 또는 yarn

### 설치
```bash
# 저장소 클론
git clone https://github.com/inspire12/inspire12.github.io.git
cd inspire12.github.io

# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
npm run dev
```
개발 서버가 `http://localhost:3000`에서 실행됩니다.

### 빌드
```bash
npm run build
```
프로덕션 빌드가 `dist` 폴더에 생성됩니다.

### 배포
```bash
npm run deploy
```
GitHub Pages에 자동으로 배포됩니다.

## 📱 반응형 디자인

- **모바일** (< 768px): 단일 컬럼 레이아웃
- **태블릿** (768px - 1024px): 2컬럼 그리드
- **데스크톱** (> 1024px): 3컬럼 그리드

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Blue (파란색 계열)
- **Secondary**: Green (초록색 계열)
- **Accent**: Purple, Orange (강조색)
- **Neutral**: Gray 톤 (텍스트 및 배경)

### 타이포그래피
- **헤딩**: Inter 폰트, 다양한 웨이트
- **본문**: 가독성 좋은 라인 높이와 간격

## 🔧 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Articles.jsx    # 기술 블로그 섹션
│   ├── Contact.jsx     # 연락처 섹션
│   ├── Hero.jsx        # 메인 히어로 섹션
│   ├── Projects.jsx    # 프로젝트 섹션
│   ├── TechStack.jsx   # 기술 스택 섹션
│   └── Timeline.jsx    # 경력 타임라인
├── data/               # 정적 데이터
│   ├── articles.js     # 블로그 아티클 데이터
│   ├── contact.js      # 연락처 정보
│   ├── experience.js   # 경력 정보
│   ├── personalInfo.js # 개인 정보
│   ├── projects.js     # 프로젝트 정보
│   └── techStack.js    # 기술 스택 정보
├── hooks/              # 커스텀 훅
│   └── useScrollAnimation.js
├── lib/                # 유틸리티
│   └── utils.js
├── App.jsx             # 메인 앱 컴포넌트
└── main.jsx           # 앱 진입점
```

## 🚀 성능 최적화

- **코드 스플리팅**: Vite의 동적 import 활용
- **이미지 최적화**: WebP 포맷 사용
- **CSS 최적화**: Tailwind CSS의 purge 기능
- **번들 크기 최소화**: Tree shaking으로 사용하지 않는 코드 제거

## 📈 SEO 최적화

- **메타 태그**: 적절한 title, description 설정
- **구조화된 데이터**: JSON-LD 스키마 마크업
- **시맨틱 HTML**: 접근성을 고려한 마크업
- **사이트맵**: 검색 엔진 크롤링 최적화

## 🤝 기여하기

1. 이 저장소를 Fork 합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 Push 합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 연락처

- **이메일**: ox4443@naver.com
- **LinkedIn**: [https://www.linkedin.com/in/inspire12/](https://www.linkedin.com/in/inspire12/)
- **GitHub**: [https://github.com/inspire12](https://github.com/inspire12)
- **포트폴리오**: [https://inspire12.github.io](https://inspire12.github.io)

---

⭐ 이 프로젝트가 도움이 되었다면 별표를 눌러주세요!