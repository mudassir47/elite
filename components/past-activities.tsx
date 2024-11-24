'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar, ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Activity = {
  title: string;
  date: string;
  content: string;
  images: string[];
  category: string;
}

const activities: Activity[] = [
  {
    title: "Industrial Visit to Tech Innovators",
    date: "March 15, 2024",
    content: "Our recent industrial visit to Tech Innovators was an eye-opening experience for our Elite Club members. The day-long excursion provided invaluable insights into cutting-edge industry practices and emerging technologies. Upon arrival, we were greeted by the company's senior leadership team, who gave us an overview of their groundbreaking projects in artificial intelligence and quantum computing. The tour began with a visit to their state-of-the-art research facilities, where we witnessed firsthand the development of next-generation processors and advanced machine learning algorithms. Students had the opportunity to engage in interactive sessions with senior engineers, discussing real-world applications of theoretical concepts learned in classrooms. A highlight of the visit was the hands-on workshop on cloud computing architecture, where our members collaborated with Tech Innovators' developers to solve complex scalability challenges. The day concluded with a networking session, allowing students to forge connections with industry professionals and explore potential internship opportunities. This visit not only broadened our understanding of the tech industry but also inspired many of our members to pursue innovative research projects.",
    images: ["/assets/visit/ind-visit.jpeg", "/placeholder.svg?height=400&width=600"],
    category: "Industrial Visit"
  },
  {
    title: "Elite Club Inauguration Ceremony",
    date: "September 1, 2024",
    content: "The Elite Club Inauguration Ceremony marked the beginning of an exciting new academic year, welcoming a diverse group of talented students into our community. The event, held in the university's grand auditorium, was a celebration of innovation, learning, and collaboration. The ceremony commenced with a keynote address from Dr. Emily Chen, a renowned AI researcher and alumna of our university. Her inspiring speech on the future of technology and the importance of interdisciplinary collaboration set an ambitious tone for the year ahead. Following this, our club president presented an overview of the upcoming year's activities, including workshops, hackathons, and industry partnerships. A highlight of the event was the 'Innovation Showcase,' where returning members presented their summer projects, ranging from sustainable energy solutions to breakthrough algorithms in natural language processing. The ceremony also featured an interactive panel discussion with industry leaders from top tech companies, providing freshers with valuable insights into career paths in technology. The event concluded with a networking session, allowing new members to connect with seniors and faculty advisors. As part of our commitment to sustainability, all attendees received eco-friendly welcome kits containing club merchandise and resources for the upcoming year.",
    images: ["/assets/visit/ino3.jpeg", "/assets/visit/ino2.jpeg","/assets/visit/ino.jpeg"],
    category: "Ceremony"
  },
  {
    title: "Advanced Web Technologies Workshop",
    date: "October 10-12, 2024",
    content: "Our three-day Advanced Web Technologies Workshop was an intensive deep dive into the latest trends and tools in web development. The workshop kicked off with a comprehensive overview of modern frontend frameworks, focusing on React and its ecosystem. Participants learned about component-based architecture, state management with hooks, and the principles of responsive design. The second day was dedicated to server-side rendering and static site generation using Next.js, where students built high-performance, SEO-friendly web applications. We also covered advanced topics such as API routes, authentication, and deployment strategies. The final day focused on GraphQL, exploring its benefits over traditional REST APIs and implementing a full-stack application with Apollo Client and Server. Throughout the workshop, industry experts from leading tech companies provided real-world insights and best practices. Hands-on coding sessions were interspersed with interactive Q&A periods, allowing participants to clarify doubts and discuss complex concepts. The workshop culminated in a mini-hackathon, where teams applied their newly acquired skills to create innovative web solutions addressing real-world problems. This event not only enhanced the technical skills of our members but also fostered teamwork and creativity.",
    images: ["/assets/visit/web2.jpeg", "/assets/visit/web3.jpeg" , "/assets/visit/web.jpeg"],
    category: "Workshop"
  },
  {
    title: "Data Structures and Algorithms Bootcamp",
    date: "November 5-7, 2024",
    content: "The Data Structures and Algorithms Bootcamp was a rigorous three-day program designed to enhance our members' problem-solving skills and algorithmic thinking. The bootcamp began with a review of fundamental data structures, including arrays, linked lists, trees, and graphs, emphasizing their implementation and applications. Participants then delved into advanced topics such as dynamic programming, greedy algorithms, and graph algorithms. Each theoretical session was followed by intensive coding exercises, where students applied their knowledge to solve complex algorithmic challenges. The second day featured a series of lectures on optimization techniques and time complexity analysis, led by Dr. Alex Johnson, a renowned computer scientist specializing in algorithm design. Students learned how to analyze and improve the efficiency of their code, a crucial skill for technical interviews and real-world software development. The final day was dedicated to a coding competition, simulating a real-world hackathon environment. Participants worked in teams to solve a series of increasingly difficult problems, with mentors available to provide guidance. The bootcamp concluded with a awards ceremony, recognizing outstanding performances and innovative solutions. This intensive experience not only sharpened our members' technical skills but also prepared them for coding interviews at top tech companies.",
    images: ["/assets/visit/data.jpeg", "/placeholder.svg?height=400&width=600"],
    category: "Workshop"
  },
  {
    title: "Freshers' Welcome: Tech Fiesta",
    date: "September 20, 2024",
    content: "The Freshers' Welcome: Tech Fiesta was a vibrant celebration designed to introduce new members to the Elite Club community and showcase the exciting world of technology. The event began with an icebreaker session featuring tech-themed games and quizzes, encouraging interaction between freshers and senior members. This was followed by a 'Tech Talent Show,' where new members demonstrated their skills through short presentations on topics ranging from blockchain to artificial intelligence. The highlight of the event was the 'Innovation Challenge,' a rapid prototyping competition where mixed teams of freshers and seniors collaborated to develop solutions for real-world problems presented by local non-profit organizations. This activity not only fostered teamwork but also gave new members a taste of the club's project-based learning approach. The fiesta also included a 'Tech Expo,' where various subcommittees of the Elite Club showcased their ongoing projects and initiatives, allowing freshers to explore different areas of interest. The day concluded with a networking dinner, providing an opportunity for new members to connect with peers, seniors, and faculty advisors in a relaxed setting. Each fresher received a welcome pack containing club merchandise, a roadmap of the year's activities, and resources to kickstart their journey in the world of technology.",
    images: ["/assets/visit/eng-day.jpeg", "/placeholder.svg?height=400&width=600"],
    category: "Social Event"
  },
  {
    title: "Teachers' Day: Honoring Our Mentors",
    date: "September 5, 2024",
    content: "The Teachers' Day celebration was a heartfelt tribute to the dedicated educators who have been instrumental in shaping the minds and careers of our Elite Club members. The event began with a formal ceremony where students shared personal anecdotes and expressed gratitude for the guidance and inspiration provided by their teachers. This was followed by a series of presentations highlighting innovative teaching methods and impactful research conducted by faculty members. A key feature of the celebration was the 'Mentor-Mentee Panel Discussion,' where professors and their student research assistants discussed ongoing projects and the importance of collaborative learning. The event also included the inaugural 'Excellence in Teaching' awards, recognizing outstanding contributions in areas such as innovative pedagogy, research mentorship, and industry collaboration. Students surprised their favorite teachers with personalized digital yearbooks containing messages of appreciation and memories from past and present students. The day concluded with a cultural program featuring performances by students, showcasing talents beyond the realm of technology and emphasizing the holistic development encouraged by our mentors. This celebration not only honored our teachers but also strengthened the bond between faculty and students, fostering a collaborative learning environment.",
    images: ["/assets/visit/ino4.jpeg", "/placeholder.svg?height=400&width=600"],
    category: "Celebration"
  }
]

export function PastActivitiesComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({})
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null)

  const nextImage = (title: string) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [title]: (prev[title] + 1) % activities.find(a => a.title === title)!.images.length
    }))
  }

  const prevImage = (title: string) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [title]: (prev[title] - 1 + activities.find(a => a.title === title)!.images.length) % activities.find(a => a.title === title)!.images.length
    }))
  }

  const toggleExpand = (title: string) => {
    setExpandedActivity(prev => prev === title ? null : title)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-blue-500"
        >
          Our Past Activities
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={activity.images[currentImageIndex[activity.title] || 0]}
                    alt={activity.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  {activity.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                        onClick={() => prevImage(activity.title)}
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                        onClick={() => nextImage(activity.title)}
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                    </>
                  )}
                  <Badge className="absolute top-2 right-2  text-white bg-blue">
                    {activity.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-500">{activity.title}</CardTitle>
                  <CardDescription className="flex items-center text-black-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {activity.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {expandedActivity === activity.title
                      ? activity.content
                      : `${activity.content.slice(0, 150)}...`}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 text-blue-500 hover:text-blue-500"
                    onClick={() => toggleExpand(activity.title)}
                  >
                    {expandedActivity === activity.title ? (
                      <>
                        Read Less
                        <ChevronUp className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Read More
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}