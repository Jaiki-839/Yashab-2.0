"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function WelcomeCard({ nextStep }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
        nextStep()
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <motion.div
                className="relative w-full max-w-sm mx-auto"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
            >
                <div className="relative">
                    <motion.div
                        className="relative z-10 w-full h-64 bg-gradient-to-br from-pink-300 to-pink-400 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center overflow-hidden"
                        animate={{
                            scale: isOpen ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        {!isOpen && (
                            <>
                                <motion.div
                                    className="text-white text-center "
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h2 className="text-3xl md:text-4xl mb-4 relative z-10">To Yashab Bhai</h2>
                                    <p className="text-lg md:text-xl mb-6">A special message from me </p>

                                    <motion.button
                                        className="relative px-6 py-3 bg-white text-pink-500 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleOpen}
                                    >
                                        Open Card
                                    </motion.button>
                                </motion.div>

                                {/* Decorative hearts */}
                                <motion.div
                                    className="absolute top-4 left-4 text-white opacity-70"
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "loop",
                                    }}
                                >
                                    <Heart size={24} fill="white" />
                                </motion.div>
                                <motion.div
                                    className="absolute bottom-4 right-4 text-white opacity-70"
                                    animate={{
                                        rotate: [0, -10, 10, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "loop",
                                        delay: 1,
                                    }}
                                >
                                    <Heart size={24} fill="white" />
                                </motion.div>
                            </>
                        )}
                    </motion.div>

                </div>
            </motion.div>
        </div>
    )
}
