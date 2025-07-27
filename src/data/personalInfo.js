import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaRocket } from 'react-icons/fa'

export const personalData = {
  name: "서영학",
  title: "백엔드 서버 개발자",
  email: "ox4443@naver.com",
  
  keyPoints: [
    "다양한 문제를 가리지않고 해결하며, 탐구심으로 노력하는 백엔드 서버 개발자입니다.",
    "GPT 이전부터 회사 자체 AI 기술을 실제 서비스에 적용하기 위한 다양한 시도를 했습니다.",
    "PAIGE 프로야구 플랫폼에 팀 빌딩부터 참여해 4년간 개발의 전 사이클을 경험했습니다.",
    "금융 투자 AI 플랫폼과 웹소켓 기반 실시간 알림 시스템을 개발했습니다.",
    "다양한 도메인에서 초기 설계부터 안정화된 서비스 운영까지 경험했습니다."
  ],

  highlights: [
    {
      icon: FaCode,
      text: "7년간 NCSOFT에서 백엔드 개발",
      description: "다양한 도메인과 서비스 개발 및 운영 경험"
    },
    {
      icon: FaServer,
      text: "MSA, Kafka, K8s 전문가",
      description: "MSA 시스템 구축 경험"
    },
    {
      icon: FaRocket,
      text: "AI 서비스 플랫폼 선도 개발",
      description: "GPT 이전부터 AI 기술 상용화"
    }
  ],

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: FaGithub,
      color: "bg-gray-900 hover:bg-gray-800"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com",
      icon: FaLinkedin,
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Email",
      url: "mailto:ox4443@naver.com",
      icon: FaEnvelope,
      color: "bg-green-600 hover:bg-green-700"
    }
  ],

  stats: [
    { number: "7년", label: "경력", color: "blue" },
    { number: "다양한 도메인", label: "금융, 계정, 프로야구, AI 등", color: "green" },
    { number: "정보 공유", label: "기술 블로그 등 꾸준한 공부와 공유", color: "purple" },
    { number: "4개", label: "주요 프로젝트", color: "orange" }
  ]
}