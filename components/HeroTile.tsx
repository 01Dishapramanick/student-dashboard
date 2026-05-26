'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function HeroTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.02 }}
      className="w-full h-full rounded-2xl p-8 bg-gradient-to-br from-violet-900/50 to-indigo-900/50 border border-white/10 backdrop-blur-sm"
    >
      <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
        Welcome back, Alex 👋
      </h1>
      <p className="text-zinc-400 text-lg mb-6">
        Ready to continue your learning journey?
      </p>
      <div className="flex items-center gap-2 bg-orange-500/20 w-fit px-4 py-2 rounded-full">
        <Flame className="text-orange-400" size={20} />
        <span className="text-orange-300 font-semibold">7 Day Streak!</span>
      </div>
    </motion.article>
  )
}