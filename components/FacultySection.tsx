'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Book, Award } from 'lucide-react'

type FacultyMember = {
  name: string
  role: string
  department: string
  isHOD?: boolean
  image: string
  education: string
  expertise: string[]
  achievements: string
  tags: string[]
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Prof Riyaz Pathan",
    role: "Associate Professor",
    department: "Electronics and Computer Science Department",
    image: "/assets/member/2.png",
    education: "Ph.D. in Computer Science, Stanford University",
    expertise: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    achievements: "Published over 50 research papers in top-tier conferences and journals",
    tags: ["AI", "ML", "Data Science"]
  },
  {
    name: "Dr. Bandanawaz Kotiyal",
    role: "Head of the Department",
    department: "Electronics and Computer Science",
    isHOD: true,
    image: "/assets/member/3.png",
    education: "Ph.D. in Electronics Engineering, MIT",
    expertise: ["VLSI Design", "Embedded Systems", "IoT"],
    achievements: "Recipient of the National Award for Excellence in Engineering Education",
    tags: ["VLSI", "IoT", "Embedded Systems"]
  },
  {
    name: "Prof Ismail",
    role: "Assistant Professor",
    department: "Electronics and Computer Science Department",
    image: "/assets/member/3.png",
    education: "Ph.D. in Computer Networks, UC Berkeley",
    expertise: ["Network Security", "Cryptography", "Blockchain"],
    achievements: "Lead researcher on a government-funded cybersecurity project",
    tags: ["Networks", "Security", "Blockchain"]
  }
]

export default function FacultySection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-lightblue-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-midnightblue"
        >
          Our Esteemed Faculty
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={faculty.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={`w-full h-full transition-all duration-300 ease-in-out hover:shadow-custom-heavy
                  ${faculty.isHOD ? 'md:scale-105 bg-blue text-white' : 'bg-white'}
                `}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-4">
                      <Image
                        src={faculty.image}
                        alt={faculty.name}
                        layout="fill"
                        className="rounded-full object-cover border-4 border-gray-300 shadow-custom-light"
                      />
                      {faculty.isHOD && (
                        <Badge className="absolute top-0 right-0 bg-red-500 text-white">
                          HOD
                        </Badge>
                      )}
                    </div>
                    <h3 className={`text-xl font-semibold mb-1 ${faculty.isHOD ? 'text-white' : 'text-midnightblue'}`}>
                      {faculty.name}
                    </h3>
                    <p className={`text-sm mb-2 ${faculty.isHOD ? 'text-lightblue-200' : 'text-bluegrey'}`}>
                      {faculty.role}
                    </p>
                    <p className={`text-xs mb-4 ${faculty.isHOD ? 'text-lightblue-200' : 'text-bluegrey'}`}>
                      {faculty.department}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {faculty.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className={`${faculty.isHOD ? 'bg-white text-blue' : 'bg-lightblue text-midnightblue'}`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className={`text-sm font-semibold mb-2 ${faculty.isHOD ? 'text-white hover:text-lightblue-200' : 'text-blue hover:text-midblue'}`}
                    >
                      {expandedIndex === index ? 'Show Less' : 'Show More'}
                    </button>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`text-left mt-4 ${faculty.isHOD ? 'text-white' : 'text-midnightblue'}`}
                      >
                        <div className="flex items-center mb-2">
                          <GraduationCap className="w-5 h-5 mr-2" />
                          <p className="text-sm">{faculty.education}</p>
                        </div>
                        <div className="flex items-start mb-2">
                          <Book className="w-5 h-5 mr-2 mt-1" />
                          <div>
                            <p className="text-sm font-semibold mb-1">Areas of Expertise:</p>
                            <ul className="list-disc list-inside text-sm">
                              {faculty.expertise.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-5 h-5 mr-2" />
                          <p className="text-sm">{faculty.achievements}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}