'use client'

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, ChevronLeft, ChevronRight } from 'lucide-react'

type TeamMember = {
  name: string
  designation: string
  image: string
}

export function EliteTeamCardComponent() {
  const [teamMembers] = useState<TeamMember[]>([
    {
      name: 'Aqsa Shah',
      designation: 'President',
      image: '/assets/member/aqsa.jpeg',
    },
    {
      name: 'Mudassir',
      designation: 'Technical lead',
      image: '/assets/member/1.png',
    },
    {
      name: 'Anish',
      designation: 'Member',
      image: '/assets/member/anish.png',
    },
    {
      name: 'Yamini Jadav',
      designation: 'Finance Lead',
      image: '/assets/member/yamini.jpeg',
    },
    {
      name: 'Faizan',
      designation: 'Finance Lead',
      image: '/assets/member/faizan.jpeg',
    },
    {
      name: 'Umar',
      designation: 'Member',
      image: '/umar.jpeg',
    },
  ])

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        setShowLeftArrow(scrollLeft > 0)
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
      }
    }

    scrollContainerRef.current?.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => scrollContainerRef.current?.removeEventListener('scroll', handleScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-lightblue-100 to-white relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-midnightblue mb-12 flex items-center justify-center"
        >
          <Briefcase className="mr-3" size={36} />
          Core Members
        </motion.h2>
        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-custom-light hover:shadow-custom-heavy transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="text-blue" size={24} />
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-custom-light hover:shadow-custom-heavy transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="text-blue" size={24} />
            </button>
          )}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <Card className="w-72 bg-white shadow-custom-light hover:shadow-custom-heavy transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-32 h-32 mb-4 ring-4 ring-blue ring-opacity-50">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="bg-blue text-white text-2xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold text-midnightblue mb-1">{member.name}</h3>
                      <p className="text-bluegrey mb-4 flex items-center">
                        <Briefcase className="mr-2" size={16} />
                        {member.designation || 'Team Member'}
                      </p>
                      <div className="w-16 h-1 bg-blue rounded-full mb-4"></div>
                      <p className="text-sm text-bluegray">
                        Dedicated member of our elite team, contributing to the success of our projects and initiatives.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}