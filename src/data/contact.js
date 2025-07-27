import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaBlog, FaMapMarkerAlt } from 'react-icons/fa'

export const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'seoyh@ncsoft.com',
    link: 'mailto:seoyh@ncsoft.com',
    color: 'bg-red-500'
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+82-10-XXXX-XXXX',
    link: 'tel:+82-10-XXXX-XXXX',
    color: 'bg-green-500'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/younghak-seo',
    link: 'https://linkedin.com/in/younghak-seo',
    color: 'bg-blue-600'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/younghak-seo',
    link: 'https://github.com/younghak-seo',
    color: 'bg-gray-800'
  },
  {
    icon: FaBlog,
    label: 'Tech Blog',
    value: 'younghak-dev.blog',
    link: 'https://younghak-dev.blog',
    color: 'bg-purple-600'
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: '대한민국, 서울',
    link: null,
    color: 'bg-orange-500'
  }
]

export const collaborationAreas = [
  {
    title: '기술 협업',
    description: '오픈소스 프로젝트나\n기술 스터디 참여',
    icon: '💻'
  },
  {
    title: '새로운 도전',
    description: '스타트업이나 새로운\n서비스 개발 기회',
    icon: '🚀'
  },
  {
    title: '지식 공유',
    description: '기술 발표, 멘토링,\n블로그 협업',
    icon: '📚'
  }
]