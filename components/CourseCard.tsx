'use client'

import { motion } from 'framer-motion'
import { Code2, Layers3, Database, Sparkles } from 'lucide-react'
import { Course } from '@/types'

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} className="text-violet-400" />,
  Layers3: <Layers3 size={24} className="text-blue-400" />,
  Database: <Database size={24} className="text-green-400" />,
  Sparkles: <Sparkles size={24} className="text-yellow-400" />,
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl p-6 bg-zinc-900 border border-white/10 flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        {iconMap[course.icon_name] ?? <Code2 size={24} className="text-violet-400" />}
        <h2 className="text-white font-semibold text-lg">{course.title}</h2>
      </div>
      <div className="w-full bg-zinc-700 rounded-full h-2">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${course.progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      <p className="text-zinc-400 text-sm">{course.progress}% complete</p>
    </motion.article>
  )
}