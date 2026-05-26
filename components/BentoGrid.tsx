'use client'

import { motion } from 'framer-motion'
import HeroTile from './HeroTile'
import ActivityTile from './ActivityTile'
import CourseCard from './CourseCard'
import { Course } from '@/types'

export default function BentoGrid({ courses }: { courses: Course[] }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-4"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } },
        }}
        className="lg:col-span-2"
      >
        <HeroTile />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } },
        }}
        className="lg:col-span-1"
      >
        <ActivityTile />
      </motion.div>
      {courses.map((course) => (
        <motion.div
          key={course.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } },
          }}
        >
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.div>
  )
}