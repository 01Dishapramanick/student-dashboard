'use client'

import { motion } from 'framer-motion'

const activityData = [
  2,1,3,0,2,1,3,
  0,2,3,1,2,0,1,
  3,2,1,0,2,3,1,
  2,0,1,3,2,1,0,
  2,3,1,2,0,1,3,
]

const colorMap: Record<number, string> = {
  0: 'bg-zinc-800',
  1: 'bg-violet-900',
  2: 'bg-violet-600',
  3: 'bg-violet-400',
}

export default function ActivityTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl p-6 bg-zinc-900 border border-white/10"
    >
      <h2 className="text-white font-semibold text-lg mb-4">Learning Activity</h2>
      <div className="grid grid-cols-7 gap-1">
        {activityData.map((level, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.02 }}
            className={`w-6 h-6 rounded-sm ${colorMap[level]}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span className="text-zinc-500 text-xs">Less</span>
        {[0,1,2,3].map((level) => (
          <div key={level} className={`w-3 h-3 rounded-sm ${colorMap[level]}`} />
        ))}
        <span className="text-zinc-500 text-xs">More</span>
      </div>
    </motion.article>
  )
}