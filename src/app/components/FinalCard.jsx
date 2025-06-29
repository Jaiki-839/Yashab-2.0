"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart } from "lucide-react"
import Confetti from "react-confetti"
import { useWindowSize } from "@/hooks/use-window-size"

export default function FinalCard() {
    const [showConfetti, setShowConfetti] = useState(false)
    const [isRevealed, setIsRevealed] = useState(false)
    const { width, height } = useWindowSize()

    const handleReveal = () => {
        setIsRevealed(true)
        setShowConfetti(true)
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {showConfetti && (
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={100}
                />
            )}

            <motion.div
                className="relative z-0 w-full max-w-sm mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative rounded-2xl shadow-lg bg-gradient-to-br from-pink-100 to-purple-100 border-2 border-pink-200 p-6 overflow-hidden">

                    <motion.div
                        className="relative z-10 text-center py-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600">i am happy to Send  small gift</h2>

                        <AnimatePresence mode="wait">
                            {!isRevealed ? (
                                <motion.div
                                    key="unrevealed"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center"
                                >
                                    <p className="text-purple-800 text-lg mb-8">
                                        Click the heart to see who loves you the most!
                                    </p>

                                    <motion.button
                                        className=" w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-lg flex items-center justify-center"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handleReveal}
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            boxShadow: [
                                                "0 0 0 0 rgba(236, 72, 153, 0.7)",
                                                "0 0 0 10px rgba(236, 72, 153, 0)",
                                                "0 0 0 0 rgba(236, 72, 153, 0)",
                                            ],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: "loop",
                                        }}
                                    >
                                        <Heart size={40} className="text-white" fill="white" />
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="revealed"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                    className="flex flex-col items-center"
                                >
                                    <motion.div
                                        className="relative bg-rose-50 rounded-2xl p-6 shadow-md border-2 border-rose-200"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="absolute -top-3 -right-3">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                            >
                                                <Heart size={24} className="text-pink-500" fill="#ff8da1" />
                                            </motion.div>
                                        </div>

                                        <div className="absolute -bottom-3 -left-3">
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                            >
                                                <Heart size={24} className="text-pink-500" fill="#ff8da1" />
                                            </motion.div>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">With all my love,</h3>

                                        <h3 className="text-4xl md:text-5xl font-bold text-purple-600">Jaiki Kushwaha</h3>
                                    </motion.div>

                                    <motion.p
                                        className="text-purple-800 text-lg mt-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        I love it your voice ❤️
                                    </motion.p>

                                    <motion.div
                                        className="mt-6"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        <FloatingHearts count={12} />
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

function FloatingHearts({ count }) {
    return (
        <div className="relative h-20 w-full">
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-pink-400"
                    style={{
                        left: `${(i * 100) / count}%`,
                        bottom: 0,
                    }}
                    animate={{
                        y: [0, -40 - (i % 3) * 10, 0],
                        x: [0, (i % 2 === 0 ? 10 : -10) * (1 + (i % 3)), 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2 + (i % 3),
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        delay: i * 0.2,
                    }}
                >
                    <Heart size={i % 3 === 0 ? 20 : i % 3 === 1 ? 16 : 12} fill="currentColor" />
                </motion.div>
            ))}
        </div>
    )
}
