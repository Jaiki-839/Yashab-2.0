"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function NavigationButtons({ currentStep, totalSteps, nextStep, prevStep }) {
    return (
        <motion.div
            className="fixed bottom-8 left-0 right-0 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <motion.button
                className="p-3 bg-white text-pink-500 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "#FDF2F8" }}
                whileTap={{ scale: 0.9 }}
                onClick={prevStep}
                disabled={currentStep === 0}
            >
                <ChevronLeft size={24} />
            </motion.button>

            <div className="flex items-center space-x-1">
                {Array.from({ length: totalSteps }).map((_, i) => (
                    <motion.div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === currentStep ? "bg-pink-500" : "bg-pink-200"}`}
                        whileHover={{ scale: 1.2 }}
                    />
                ))}
            </div>

            <motion.button
                className="p-3 bg-white text-pink-500 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "#FDF2F8" }}
                whileTap={{ scale: 0.9 }}
                onClick={nextStep}
                disabled={currentStep === totalSteps - 1}
            >
                <ChevronRight size={24} />
            </motion.button>
        </motion.div>
    )
}
