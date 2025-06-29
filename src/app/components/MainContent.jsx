"use client"
import { motion, AnimatePresence } from "framer-motion"
import WelcomeCard from "./WelcomeCard"
import MessageCard from "./MessageCard"
import MemoriesCard from "./MemoriesCard"
import FinalCard from "./FinalCard"
import NavigationButtons from "./NavigationButton"

export default function MainContent({ currentStep, setCurrentStep }) {
    const totalSteps = 4

    const nextStep = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1)
        }
    }

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-4 py-8 pb-24">
            <div className="w-full max-w-md mx-auto">
                <AnimatePresence mode="wait">
                    {currentStep === 0 && (
                        <motion.div
                            key="welcome"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <WelcomeCard nextStep={nextStep} />
                        </motion.div>
                    )}

                    {currentStep === 1 && (
                        <motion.div
                            key="message"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MessageCard />
                        </motion.div>
                    )}

                    {currentStep === 2 && (
                        <motion.div
                            key="memories"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MemoriesCard />
                        </motion.div>
                    )}

                    {currentStep === 3 && (
                        <motion.div
                            key="final"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FinalCard />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {currentStep > 0 && (
                <NavigationButtons currentStep={currentStep} totalSteps={totalSteps} nextStep={nextStep} prevStep={prevStep} />
            )}
        </div>
    )
}
