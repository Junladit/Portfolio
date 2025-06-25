'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function AboutSection() {
  // บังคับ scroll ไปบนสุดเมื่อเข้าหน้านี้
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id="about" className="min-h-screen bg-gray-950 text-white flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="flex justify-center relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-700" />
              <Image
                src="/images/profile.jpg"
                alt="My Profile"
                width={500}
                height={500}
                priority
                className="relative rounded-full w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover border-4 border-gray-800 shadow-2xl group-hover:border-blue-500/50 transition-all duration-500 z-10"
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-500/30 transition-all duration-700 pointer-events-none z-0" />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                เกี่ยวกับฉัน
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                  สวัสดีครับ ผมชื่อ <span className="text-white font-medium">จุลดิษฐ์</span> เป็นนักพัฒนาเว็บเต็มสแต็กที่ชื่นชอบการสร้างเว็บแอปพลิเคชันสมัยใหม่
                </p>
                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                  ด้วยประสบการณ์การพัฒนาเว็บมากกว่า 2 ปี ผมมุ่งมั่นที่จะสร้างงานที่มีคุณภาพและประสบการณ์ผู้ใช้งานที่ยอดเยี่ยม
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  ทักษะและเทคโนโลยี
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:gap-2">
                {[
                  { name: "Next.js/React", icon: "✦" },
                  { name: "TypeScript", icon: "✦" },
                  { name: "Tailwind CSS", icon: "✦" },
                  { name: "Node.js/Express", icon: "✦" },
                  { name: "Prisma/PostgreSQL", icon: "✦" },
                  { name: "Git & GitHub", icon: "✦" }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 bg-gray-900/60 hover:bg-gray-900/80 p-4 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group text-wrap: balance"
                  >
                    <div className="text-blue-400 text-xl group-hover:text-purple-400 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="group-hover:text-white transition-colors text-sm sm:text-base break-words">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Career Goal Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-6"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  เป้าหมายในอาชีพ
                </span>
              </h3>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                ต้องการพัฒนาทักษะไปสู่ระดับ Senior Developer และมีส่วนร่วมในโครงการที่ท้าทาย 
                พร้อมทั้งแบ่งปันความรู้ให้กับชุมชนนักพัฒนา
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <Link href="/">
            <button className="px-10 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full font-medium text-lg hover:scale-[1.02] transition-all shadow-xl hover:shadow-blue-500/30 flex items-center gap-2">
              <span>←</span>
              <span>กลับไปยังหน้าหลัก</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
