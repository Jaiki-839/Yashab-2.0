"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart, Star, Flower } from "lucide-react"

export default function BackgroundElements({ isMobile }) {
    const [elements, setElements] = useState([])
    const colors = ["text-rose-400", "text-yellow-400", "text-purple-400", "text-pink-500", "text-fuchsia-400"]

    useEffect(() => {
        const elementCount = isMobile ? 12 : 20
        const temp = []

        for (let i = 0; i < elementCount; i++) {
            temp.push({
                id: i,
                type: Math.floor(Math.random() * 3),
                size: 10 + Math.floor(Math.random() * 15),
                opacity: 0.8 + Math.random() * 0.3,
                left: Math.random() * 100,
                top: Math.random() * 100,
                delay: Math.random() * 5,
                duration: 15 + Math.random() * 20,
                color: colors[Math.floor(Math.random() * colors.length)]
            })
        }

        setElements(temp)
    }, [isMobile])

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden ">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className={`absolute ${el.color}`}
                    style={{
                        left: `${el.left}%`,
                        top: `${el.top}%`,
                        opacity: el.opacity,
                    }}
                    animate={{
                        y: [0, -15, 0],
                        x: [0, el.id % 2 === 0 ? 15 : -15, 0],
                        rotate: [0, el.id % 2 === 0 ? 180 : -180, 0],
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: el.delay,
                    }}
                >
                    {el.type === 0 && <Heart size={el.size} />}
                    {el.type === 1 && <Star size={el.size} />}
                    {el.type === 2 && <Flower size={el.size} />}
                </motion.div>
            ))}

            {/* Soft gradient blobs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-200/80  blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-200/80  blur-3xl" />
        </div>
    )
}
