'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaFacebook, FaLine, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        {/* Heading with decorative element */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Lets Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Interested in collaborating or have questions? Feel free to reach out through any of these channels. 
            I typically respond within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center gap-2">
              <FiSend className="text-blue-400" />
              Direct Contacts
            </h3>
            
            <ContactLink
              icon={<FaEnvelope size={20} className="text-red-400" />}
              label="Email"
              href="mailto:you@example.com"
              detail="you@example.com"
            />
            <ContactLink
              icon={<FaPhone size={20} className="text-green-400" />}
              label="Phone"
              href="tel:+66812345678"
              detail="+66 81 234 5678"
            />
            <ContactLink
              icon={<FaLine size={20} className="text-green-500" />}
              label="Line"
              href="https://line.me/ti/p/~yourlineid"
              detail="@yourlineid"
            />
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center gap-2">
              <FiSend className="text-purple-400" />
              Professional Networks
            </h3>
            
            <ContactLink
              icon={<FaLinkedin size={20} className="text-blue-500" />}
              label="LinkedIn"
              href="https://linkedin.com/in/yourprofile"
              detail="linkedin.com/in/yourprofile"
            />
            <ContactLink
              icon={<FaGithub size={20} className="text-gray-300" />}
              label="GitHub"
              href="https://github.com/yourusername"
              detail="github.com/yourusername"
            />
            <ContactLink
              icon={<FaFacebook size={20} className="text-blue-600" />}
              label="Facebook"
              href="https://facebook.com/yourprofile"
              detail="facebook.com/yourprofile"
            />
            <ContactLink
              icon={<SiUpwork size={20} className="text-green-500" />}
              label="Upwork"
              href="https://upwork.com/freelancers/~yourprofile"
              detail="Available for freelance"
            />
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h4 className="text-xl font-medium mb-4 text-gray-300">Prefer a contact form?</h4>
          <Link 
            href="/contact-form" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:opacity-90 transition"
          >
            Go to Contact Form
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ContactLink({
  icon,
  label,
  href,
  detail
}: {
  icon: React.ReactNode
  label: string
  href: string
  detail?: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800 transition group"
    >
      <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition">
        {icon}
      </div>
      <div>
        <p className="font-medium text-gray-100">{label}</p>
        {detail && <p className="text-sm text-gray-400 mt-1">{detail}</p>}
      </div>
    </Link>
  )
}