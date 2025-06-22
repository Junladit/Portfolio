'use client'
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'

export default function AboutSection() {
    const [showDetail, setShowDetail] = useState(false)

    return (
        <section className="px-6 md:px-10 py-20 bg-gray-950 text-center md:text-left grid md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto mb-10">
            <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Image
                    src="/images/easy.jpg"
                    alt="About Me"
                    width={400}
                    height={400}
                    className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-xl shadow-lg border-2 border-gray-800 hover:grayscale-0 grayscale transition-all duration-500"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2 className="text-sm uppercase font-bold text-gray-400 mb-2 tracking-wider">WHO AM I</h2>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                    About Me
                </h3>
                
                <AnimatePresence mode="wait">
                  {showDetail ? (
                    <motion.p
                      key="full-text"
                      className="text-gray-400 leading-relaxed mb-6 text-left"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      I am a passionate UI/UX developer with expertise in creating modern, responsive interfaces. 
                      My focus is on crafting intuitive user experiences with clean, efficient code. 
                      With 3+ years of experience, I specialize in React, Next.js, and modern design systems.
                      <br /><br />
                      When I am not coding, you can find me exploring new design trends or contributing to open-source projects.
                    </motion.p>
                  ) : (
                    <motion.p
                      key="short-text"
                      className="text-gray-500 mb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Click below to learn more about my professional journey...
                    </motion.p>
                  )}
                </AnimatePresence>


                <button 
                    onClick={() => setShowDetail(!showDetail)} 
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition shadow-lg"
                >
                    {showDetail ? 'Show Less' : 'Read More'}
                </button>
            </motion.div>
        </section>
    )
} 