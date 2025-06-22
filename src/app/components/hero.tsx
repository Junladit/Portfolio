'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [showDetailProfile, setShowDetailProfile] = useState(false);

  return (
    <section className="bg-gray-950  container mx-auto my-10 rounded-xl text-white px-10 md:px-10 py-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 border border-gray-800">
      <div className="max-w-xl flex-1">
        <motion.p 
          className="text-sm text-gray-400 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MY NAME IS
        </motion.p>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          JUNLADIT
        </motion.h1>

        {showDetailProfile && (
          <motion.p
            className="text-gray-400 leading-relaxed mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            I am a passionate UI developer with expertise in creating modern and responsive user interfaces. 
            My focus is on delivering seamless user experiences with clean, efficient code.
          </motion.p>
        )}

        <motion.button
          onClick={() => setShowDetailProfile(!showDetailProfile)}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {showDetailProfile ? 'HIDE PROFILE' : 'ABOUT ME'}
        </motion.button>
      </div>

      <motion.div 
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          width={300}
          height={300}
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-gray-800 shadow-xl"
          priority
        />
      </motion.div>
    </section>
  );
}