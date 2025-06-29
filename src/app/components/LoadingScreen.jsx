"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function LoadingScreen() {
    const [count, setCount] = useState(5)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount <= 1) {
                    clearInterval(interval)
                    return 0
                }
                return prevCount - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-4">
            <motion.div
                className="relative"
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                }}
            >
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <div className="absolute inset-0 bg-pink-200 rounded-full opacity-30 animate-ping" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                            {/* Heart-shaped container with gradient border */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full" />
                            <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                                <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                                    {count}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">Creating something magical</h2>
                <p className="text-lg md:text-xl text-purple-700">for the most wonderful man  in the world...</p>
            </motion.div>

            <motion.div
                className="mt-8 w-64 md:w-80 h-3 bg-pink-100 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <motion.div
                    className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "easeInOut" }}
                />
            </motion.div>

            <div className="mt-8 flex space-x-2">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-3 h-3 rounded-full bg-pink-400"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                    }}
                >
                    <Heart size={30} className="text-pink-400" fill="#ff8da1" />
                </motion.div>
            </div>
        </div>
    )
}
