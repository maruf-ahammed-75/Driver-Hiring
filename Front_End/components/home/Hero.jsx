"use client"

import { motion } from "framer-motion"
import { ChevronRight, Users, Award, MapPin } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const statsData = [
  { icon: Users, value: 25000, label: "Drivers", suffix: "+" },
  { icon: Award, value: 1500, label: "Companies", suffix: "+" },
  { icon: MapPin, value: 120, label: "Cities", suffix: "" },
]

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#F5ECE0]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/hero.jpg" alt="Professional driver background" fill className="object-cover opacity-10" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5ECE0]/95 to-[#F5ECE0]/85 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#5F99AE]/20 text-[#5F99AE] font-medium text-sm mb-4">
                Professional Drivers Network
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block"
              >
                Drive Your Career
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="block text-[#5F99AE]"
              >
                Forward
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 max-w-lg"
            >
              Join the leading platform connecting professional drivers with top opportunities across the country.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#5F99AE] text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:bg-[#5F99AE]/90 transition"
              >
                Get Started <ChevronRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#5F99AE] text-[#5F99AE] px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#5F99AE]/10 transition flex items-center justify-center"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
            >
              {statsData.map((stat, index) => (
                <AnimatedStat
                  key={index}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  delay={1.3 + index * 0.2}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative h-[550px] w-full overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-[#5F99AE]/20 mix-blend-multiply z-10 rounded-2xl"></div>
              <Image src="/hero.jpg" alt="Professional driver" fill className="object-cover rounded-2xl" priority />
              <motion.div
                initial={{ height: "100%" }}
                animate={{ height: "0%" }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#F5ECE0] z-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AnimatedStat({ icon: Icon, value, label, suffix, delay }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    const increment = value / totalFrames

    let currentFrame = 0
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        currentFrame++
        setCount(Math.min(Math.floor(increment * currentFrame), value))

        if (currentFrame === totalFrames) {
          clearInterval(counter)
        }
      }, frameDuration)

      return () => clearInterval(counter)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [value, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center p-4"
    >
      <div className="bg-[#5F99AE]/10 p-3 rounded-full mb-3">
        <Icon className="h-6 w-6 text-[#5F99AE]" />
      </div>
      <div className="text-3xl font-bold text-gray-800">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  )
}

