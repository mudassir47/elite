'use client'

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

const Banner = () => {
    const router = useRouter()

    const handleJoinTeam = () => {
        router.push("/teamRegister")
    }

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-lightblue-100 py-20 sm:py-32">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-5" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-midnightblue mb-4"
                    >
                        The Elite Club
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl sm:text-2xl font-semibold text-blue mb-6"
                    >
                        Your destination to be a Tech Elite!
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg text-bluegrey mb-8"
                    >
                        Join the forefront of innovation and technology. Collaborate, learn, and grow with like-minded individuals passionate about electronics and computer science.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleJoinTeam}
                            className="px-8 py-3 text-lg font-semibold text-white bg-blue rounded-full shadow-custom-heavy hover:bg-midblue transition-colors duration-300"
                        >
                            Join Team
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 text-lg font-semibold text-blue bg-white rounded-full shadow-custom-light hover:bg-lightblue-200 transition-colors duration-300"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </section>
    )
}

export default Banner