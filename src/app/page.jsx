"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useWindowSize } from "@/hooks/use-window-size"
import LoadingScreen from "./components/LoadingScreen"
import MainContent from "./components/MainContent"
import BackgroundElements from "./components/BackgroundElements"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const { width } = useWindowSize()
  const isMobile = width < 768

  useEffect(() => {
    // Show loading screen for 6 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200">
      {/* Background decorative elements */}
      <BackgroundElements isMobile={isMobile} />

      {/* Main content */}
      <div className="relative z-10 w-full h-screen">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <LoadingScreen />
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <MainContent currentStep={currentStep} setCurrentStep={setCurrentStep} isMobile={isMobile} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
