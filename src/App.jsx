import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import SystemDesign from './components/SystemDesign'
import Articles from './components/Articles'
import Contact from './components/Contact'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import './App.css'

function App() {
  useScrollAnimation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Hero />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="experience">경력</TabsTrigger>
              <TabsTrigger value="tech">기술 스택</TabsTrigger>
              <TabsTrigger value="projects">프로젝트</TabsTrigger>
              <TabsTrigger value="design">시스템 디자인</TabsTrigger>
              <TabsTrigger value="articles">기술 블로그</TabsTrigger>
              <TabsTrigger value="contact">연락처</TabsTrigger>
            </TabsList>
            
            <TabsContent value="experience" className="mt-8">
              <Timeline />
            </TabsContent>
            
            <TabsContent value="tech" className="mt-8">
              <TechStack />
            </TabsContent>
            
            <TabsContent value="projects" className="mt-8">
              <Projects />
            </TabsContent>
            
            <TabsContent value="design" className="mt-8">
              <SystemDesign />
            </TabsContent>
            
            <TabsContent value="articles" className="mt-8">
              <Articles />
            </TabsContent>
            
            <TabsContent value="contact" className="mt-8">
              <Contact />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

export default App